<template>
    <div>
        <el-row style="height: 60px">
            <el-col :span="12">
                <div class="grid-content bg-purple cash">
                    <p class="text-cash">账户余额<br>
                        <span class="text-cash-span">{{Number(balance).toFixed(1)}}</span>
                    </p>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light cash">
                    <p class="text-cash">本月支出<br>
                        <span class="text-cash-span">{{Number(cost).toFixed(1)}}</span>
                    </p>
                </div>
            </el-col>
        </el-row>
        <div>
            <div style="margin-left: 5px;display: inline-block; width: 10px; height: 10px; background: #FF6666; border-radius: 50%"></div>
            <span>消费流水</span>
        </div>
        <el-row>
            <!-- <el-col :span="12">
            <div class="grid-content bg-purple">
                <p class="date">{{dayData.daily}}</p>
            </div>
        </el-col> -->
            <el-col :span="24">
                <div class="grid-content bg-purple-light right">
                    <span style="line-height: 24px;margin-left: 23px;">{{dayData.daily}}</span>
                    <span class="date" style="line-height: 24px;">{{'本周支出 ¥' + Number(dayData.pay).toFixed(1)}}</span>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="conPlace">
                    <div class="place qq" v-for="item in dayData.data" :key="item.txdate">
                        <div class="pdiv">
                            <div class="dirPic">
                                <img :src="picDic[item.dir]" alt="" class="dirPicDeatil"></div>
                            <div class="dirFont">
                                <p class="dir">{{item.dir==='无'?'其他':item.dir}}</p>
                                <p class="shopname">{{item.shopname==='无'?'其他':item.shopname}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">

                <div class="content" v-for="item in dayData.data">
                    <p class="payDetail">{{Number(item.txamt).toFixed(1)}}</p>
                </div>
            </el-col>

            <el-col :span="24">
                <div class="viewAll">
                    <p @click="goDetail" class="viewAll_a">查看全部 ></p>
                </div>
            </el-col>
        </el-row>

        <div class="pass"></div>

        <el-row type="flex" justify="center">
            <el-col :span="24">
                <div class="tabs">
                    <el-tabs style="width: 100%" :stretch="true" v-model="checkTab" @tab-click="handleClick" class="tabsWidth">
                        <el-tab-pane :label="item.title + '月'" :name="item.title" style="width:100%;" class="eltab" v-for="item in monthLen" :key="item.title">
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
        <el-row style="margin: 20px 0px">
            <div>
                <div style="margin-left: 5px;display: inline-block; width: 10px; height: 10px; background: #FF6666; border-radius: 50%"></div>
                <span>支出分类</span>
            </div>
            <el-col :span="12">
                <div id="pie"></div>
            </el-col>
            <el-col :span="12" style="margin-top: 20px;">
                <div class="vertical">
                    <div class="padding">
                        <div style="display: inline-block; width: 10px; height: 10px; background: #FF6666; border-radius: 50%"></div>
                        <p class="middle">旭日苑
                            <span class="middleInline">{{Number(monthData.dirlist.dirx).toFixed(1)}}</span>
                        </p>
                    </div>
                    <div class="padding">
                        <div style="display: inline-block; width: 10px; height: 10px; background: #33CC66; border-radius: 50%"></div>
                        <p class="middle">东升苑
                            <span class="middleInline">{{Number(monthData.dirlist.dird).toFixed(1)}}</span>
                        </p>
                    </div>
                    <div class="padding">
                        <div style="display: inline-block; width: 10px; height: 10px; background: #FF9966; border-radius: 50%"></div>
                        <p class="middle">美广
                            <span class="middleInline">{{Number(monthData.dirlist.dirm).toFixed(1)}}</span>
                        </p>
                    </div>
                    <div class="padding">
                        <div style="display: inline-block;width: 10px; height: 10px; background: #9966CC; border-radius: 50%"></div>
                        <p class="middle">超市
                            <span class="middleInline">{{Number(monthData.dirlist.dirs).toFixed(1)}}</span>
                        </p>
                    </div>
                    <div class="padding">
                        <div style="display: inline-block;width: 10px; height: 10px; background: #3399FF; border-radius: 50%"></div>
                        <p class="middle">其他
                            <span class="middleInline">{{Number(monthData.dirlist.dirq).toFixed(1)}}</span>
                        </p>
                    </div>
                </div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24">
                <div style="margin-left: 5px;display: inline-block; width: 10px; height: 10px; background: #FF6666; border-radius: 50%"></div>
                <span class="ss">吃货统计</span>
            </el-col>
            <el-col :span="24">
                <div id="demo" style="width: 100%; height: 500px; overflow: scorll"></div>
            </el-col>
        </el-row>
    </div>
</template>



<script>
import dirx from './../assets/dirx.png'
import dird from './../assets/dird.png'
import dirm from './../assets/dirm.png'
import dirs from './../assets/dirs.png'
import dirq from './../assets/dirq.png'

let dayjs = require('dayjs')

const picDic = {
  旭日苑: dirx,
  东升苑: dird,
  美广: dirm,
  超市: dirs,
  其他: dirq,
  无: dirq
}

export default {
  data() {
    return {
      picDic: picDic,
      checkTab: 0,
      monthLen: 0,
      balance: 0,
      todayCost: 0,
      cost: '',
      dayData: {
        pay: '',
        data: [],
        daily: dayjs().format('YYYY-MM')
      },
      weekData: {},
      monthData: {
        dirlist: {
          dirx: '',
          dird: '',
          dirq: '',
          dirm: '',
          dirs: ''
        },
        toplist: {}
      },
      getPieOption: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#FF6666', '#33CC66', '#FF9966', '#9966CC', '#3399FF'],
        // legend: {
        //     type: 'scroll',
        //     orient: 'vertical',
        //     right: 50,
        //     top: 130,
        //     data:['旭日苑','东升苑','美广','超市','其它']
        // },
        series: [
          {
            name: '消费地点',
            type: 'pie',
            radius: ['50%', '70%'],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            avoidLabelOverlap: false,
            data: []
            // center: ['0%', '50%']
          }
        ]
      },
      getBarOption: {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          y2: 140
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval: 0, // 底标信息全显示
              rotate: -30 // -30度显示
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '消费数额',
            type: 'bar',
            barWidth: '60%',
            data: [],
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: 'black'
                }
              }
            },
            itemStyle: {
              //通常情况下：
              normal: {
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function(params) {
                  var colorList = [
                    '#FF6666',
                    '#FF9966',
                    '#33CC66',
                    '#3399FF',
                    '#9966CC'
                  ]
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        ]
      }
    }
  },
  created() {
    //判断tab显示几个月
    let monthLen = Number(dayjs().month()) + 1
    let resultMonth = []
    for (let i = 0; i < monthLen; i++) {
      resultMonth.push({
        title: i + 1
      })
    }
    this.monthLen = resultMonth
  },
  mounted() {
    this.drawLinePie() //扇形图
    // 初始化月份
    this.checkTab = dayjs().month() + 1
    let _this = this
    let enddate = dayjs().format("YYYY-MM-DD");
    let begindate= dayjs().startOf('month').format("YYYY-MM-DD");
    console.log(enddate);
    console.log(begindate);
    
    
    // 获取余额 截止到上个月当前日期
    _this
      .$http({
        url: '/api/getNewData',
        method: 'get',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
            begindate,
            enddate,
        }
      })
      .then(function(res) {
        _this.cost = res.data.cost;
        if (res.data.status === 0) {
          _this.balance = res.data.data[0].balance;
          let costArray = [];
          for (let item of res.data.data) {
            //   costArray = Number(Math.abs(item.txamt))
            costArray.push(Number(Math.abs(item.txamt)));
            // console.log(costArray)
            let result = 0;
            if(costArray.length == 0){
                result = 0;
            }
            else if(costArray.length == 1){
                result = costArray[0];
            }
            else{
                for(let i=0;i<costArray.length;i++){
                    result += costArray[i]
                }
            }
            console.log(costArray);
            console.log('123');
            _this.todayCost = result;
          }
        } else {
          _this.$message.error('获取失败')
        }
      })
      .catch(function(error) {
        console.log(error)
      })

    // 获取本月支出数据
    _this
      .$http({
        url: '/api/getOneMonthData',
        method: 'get',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function(res) {
        if (res.data.status === 0) {
          // _this.cost = res.data.cost
        } else {
          _this.$message.error('获取失败')
        }
      })
      .catch(function(error) {
        console.log(error)
      })

    // 消费列表详情
    // let beginWeek = dayjs().startOf('week').format('YYYY-MM-DD');
    // let endWeek = dayjs().endOf('week').format('YYYY-MM-DD');
    _this
      .$http({
        url: '/api/getOneWeekData',
        method: 'get',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function(res) {
        if (res.data.status === 0) {
          _this.dayData.pay = res.data.cost
          _this.dayData.data = res.data.data.slice(0, 3)
        } else {
          _this.$message.error('获取失败')
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods: {
    // 路由跳转详情页
    goDetail() {
      this.$router.push('/detail')
    },
    handleClick(tab) {
      this.checkTab = tab.name

      // 根据tab值生成对应的年月日
      let getYear = dayjs().year() + '-' + this.checkTab + '-' + '01'

      let begindate = dayjs(getYear)
        .startOf('month')
        .format('YYYY-MM-DD')
      let enddate = dayjs(getYear)
        .endOf('month')
        .format('YYYY-MM-DD')

      this.drawLinePie({
        begindate,
        enddate
      })
    },
    //异步axios请求数据，完成扇形统计图
    drawLinePie(monthData) {
      this.linePie = echarts.init(document.getElementById('pie'))
      this.linePie.setOption(this.getPieOption)
      let _this = this
      // 获取当月月初和月底时间
      let begindate = dayjs()
        .startOf('month')
        .format('YYYY-MM-DD')
      let enddate = dayjs()
        .endOf('month')
        .format('YYYY-MM-DD')
      if (monthData) {
        begindate = monthData.begindate
        enddate = monthData.enddate
      }

      _this
        .$http({
          url: '/api/getNewData',
          method: 'get',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          params: {
            begindate,
            enddate
          }
        })
        .then(function(res) {
          if (res.data.status === 0) {
            // 按区域消费统计
            _this.monthData.dirlist = res.data.dirlist[0]
            // 按吃货分类统计
            _this.monthData.toplist = res.data.toplist
            _this.linePie.setOption({
              // title: {
              //     //标题组件
              //     text: '支出分类',
              //     top: '10px',
              //     left: '8px', //标题的位置 默认是left，其余还有center、right属性
              //     textStyle: {
              //         color: '#696969',
              //         fontSize: 14
              //     }
              // },
              graphic: {
                type: 'text',
                left: 'center',
                top: 'center',
                style: {
                  text: Number(res.data.cost).toFixed(1) + '\r\n总支出',
                  textAlign: 'center',
                  fill: '#000',
                  width: 30,
                  height: 30
                },
                textStyle: {
                  fontSize: 15,
                  color: '#39CCCC'
                }
              },
              tooltip: {
                position: ['50%', '50%']
              },
              series: [
                {
                  radius: ['45%', '60%'],
                  data: [
                    {
                      value: res.data.dirlist[0].dirx,
                      name: '旭日苑'
                    },
                    {
                      value: res.data.dirlist[0].dird,
                      name: '东升苑'
                    },
                    {
                      value: res.data.dirlist[0].dirm,
                      name: '美广'
                    },
                    {
                      value: res.data.dirlist[0].dirs,
                      name: '超市'
                    },
                    {
                      value: res.data.dirlist[0].dirq,
                      name: '其它'
                    }
                  ]
                }
              ]
            })
            _this.drawLineBar() //柱状图
          } else {
            _this.$message.error('获取失败')
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    // 加载柱状图
    drawLineBar() {
      this.lineBar = echarts.init(document.getElementById('demo'))
      this.lineBar.setOption(this.getBarOption)
      // 对吃货种类进行处理 两类数组一一对应
      let titleArr = [];
      let valueArr = [];
      let allData = this.monthData.toplist;
      // 柱状图依据消费sum进行前五排序
      let compare = function(x, y) {
        return y['sum'] - x['sum']
      }
      allData.sort(compare)
      // 截取前五
      let showData = allData.slice(0, 5)

      for (let item of showData) {
        titleArr.push(item.shopname)
        valueArr.push(Number(item.sum).toFixed(1))
      }

      this.lineBar.setOption({
        noDataLoadingOption: {
          text: '当月无消费数据',
          effect: 'bubble',
          effectOption: {
            effect: {
              n: 5
            }
          }
        },
        // title: {
        //     //标题组件
        //     text: '吃货统计',
        //     top: '10px',
        //     left: '8px', //标题的位置 默认是left，其余还有center、right属性
        //     textStyle: {
        //         color: '#696969',
        //         fontSize: 14
        //     }
        // },
        xAxis: {
          data: titleArr
        },
        series: {
          data: valueArr
        }
      })
    }
  }
}
</script>


<style scoped>
.padding {
  padding: 5px 0;
}

.vertical {
  margin-top: 30px;
}

.middleInline {
  float: right;
}

.icon {
  vertical-align: middle;
  /* 居中对齐， */
  margin-left: 40px;
}

.middle {
  vertical-align: middle;
  /* 居中对齐， */
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  width: 60%;
}

.dirFont {
  float: left;
  padding: 2px 0 2px 15px;
}

.tabsWidth {
  font-size: 13px;
  height: 33px;
}

#pie {
  width: 100%;
  height: 250px;
}

.qq {
  overflow: auto;
}

.img {
  width: 40px;
  height: 40px;
}

.dirPic {
  float: left;
  overflow: hidden;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.imgdiv {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  float: left;
  margin-right: 15px;
  overflow: hidden;
  margin-top: 4px;
}

.pdiv {
  float: left;
  padding-top: 8px;
  height: 50px;
  box-sizing: border-box;
}

.ll {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.viewAll {
  text-align: center;
}

.viewAll_a {
  text-decoration: none;
  color: #908d8d;
  cursor: pointer;
}

.tabs {
  display: flex;
  justify-content: center;
  width: 100%;
  /* width: 100% */
}

.pass {
  background-color: #e4e4e4;
  height: 20px;
  margin-top: 5px;
}

.pay {
  padding: 5px 20px;
  text-align: end;
  font-size: 14px;
  background-color: #e4e4e4;
}

.dirPicDeatil {
  height: 40px;
}

.payDetail {
  padding: 0px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.date {
  padding-right: 20px;
  font-size: 14px;
  float: right;
}

.conPlace {
  margin-left: 20px;
}

.shopname {
  color: gray;
  font-size: 12px;
}

.dir {
  font-size: 15px;
}

.con_flow {
  margin: 20px 0 10px 25px;
}

.text-cash-span {
  font-size: 22px;
}

.text-cash {
  text-align: center;
  vertical-align: middle;
  background: #ffcc33;
}

#demo {
  display: flex;
  justify-content: center;
}

.grid-content {
  background: #e4e4e4;
  height: 25px;
}
</style>
