<template>
    <div>
        <el-collapse v-model="activeNames">
            <el-collapse-item style="padding: 0px" :name="key.key" v-for="key in detailKey" :key="key.key">
                <template slot="title">
                    <!-- <img
                    :src="imgOne"
                    alt=""
                    class="icon ll"
                    style="margin-left: 10px; border: none; border-radius: 50%"
                > -->
                    <span style="margin-left: 25px;color: #000000c7;">{{'星期' + turnWeek[key.week]}}</span>
                    <span style="margin-left: 23px;color: #808080e8;">{{key.key}}</span>
                    <span style="position: relative;left: 18%;font-size: 14px;color: #303133;font-weight: bold;">{{'本日支出 ' + Number(Math.abs(detailDic[key.key].dayCost)).toFixed(1) }}</span>
                </template>

                <el-card shadow="hover" v-for="item in detailDic[key.key].data" :key="item.txdate" style="display: block; height: 80px">
                    <img :src="picDic[item.dir]" alt="类型图标" style="width: 50px;float: left;margin: 0px 10px;">
                    <div style="float: right;position: relative;right: 10%;">
                        <p style="color: #ff0000;font-size: 14px;text-align: right;">{{Number(item.txamt).toFixed(1) }}</p>
                        <p style="color: #999999;font-size: 12px;">{{item.txdate.slice(11,16)}}</p>
                    </div>
                    <p>{{item.dir==='无'?'其他':item.dir}}</p>
                    <p style="font-size: 12px;color: #999;">{{item.shopname==='无'?'其他':item.shopname}}</p>
                </el-card>

            </el-collapse-item>
        </el-collapse>
    </div>
</template>



<script>
let dayjs = require('dayjs')
import picOne from './../assets/u106.png'
import dirx from './../assets/dirx.png'
import dird from './../assets/dird.png'
import dirm from './../assets/dirm.png'
import dirs from './../assets/dirs.png'
import dirq from './../assets/dirq.png'

// 分类图标字典
const picDic = {
  旭日苑: dirx,
  东升苑: dird,
  美广: dirm,
  超市: dirs,
  其他: dirq,
  无: dirq
}

// 星期数字转化为汉字字典
const turnWeek = {
  '1': '一',
  '2': '二',
  '3': '三',
  '4': '四',
  '5': '五',
  '6': '六',
  '0': '日'
}

export default {
  data() {
    return {
      turnWeek: turnWeek,
      imgOne: picOne,
      picDic: picDic,
      activeNames: [],
      detailData: [],
      cost: '',
      detailDic: {},
      detailKey: []
    }
  },

  mounted() {
    let _this = this
    _this
      .$http({
        url: '/api/getOneMonthData',
        method: 'get',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function(res) {
        // console.log(res)
        if (res.data.status === 0) {
          // 数据整理 按照日期对数据进行分类
          let orderBydate = {}
          let orderByKey = []
          for (let item of res.data.data) {
            let theDay = dayjs(item.txdate).format('YYYY-MM-DD') //将日期作为key值
            if (theDay in orderBydate) {
              orderBydate[theDay].data.push(item)
              orderBydate[theDay].dayCost += Number(item.txamt)
            } else {
              orderByKey.push({
                key: theDay,
                week: dayjs(theDay)
                  .day()
                  .toString()
              })
              orderBydate[theDay] = {
                dayCost: Number(item.txamt), //将字符转化为数字
                data: [item]
              }
            }
            console.log('1',orderBydate);
            console.log('2',orderByKey);
          }

          _this.detailDic = orderBydate
          _this.detailKey = orderByKey
          // 默认打开第一个元素
          _this.activeNames = [orderByKey[0].key]
          _this.detailData = res.data.data
          // _this.cost = res.data.cost;
        } else {
          _this.$message.error('获取失败')
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>



<style scoped>
.bel-col {
  border-top: 1px solid #80808082;
}

.date {
  color: gray;
  font-size: 10px;
  padding-top: 5px;
}

.deatilCost {
  margin: 15px 0;
  font-size: 15px;
}

.top {
  margin: 2px 0;
}

.dirFont {
  position: absolute;
  bottom: 0;
  font-size: 12px;
  right: 31px;
}

.span {
  display: inline-block;
}

.dircolor {
  color: #e66b45;
}

.placeShop {
  font-size: 14px;
}

.shopName {
  font-size: 12px;
  color: gray;
}

.fontSize {
  font-size: 7px;
  color: gray;
}

.move {
  padding-left: 80px;
}

.moneyNum {
  margin-top: 40px;
}

.placeName {
  margin-top: 22px;
}

.dir {
  margin: 10px 0 5px;
}

.grid-content {
  background-color: #ebeef56e;
  min-height: 42px;
}

.el-collapse-item__content {
  padding: 0px !important;
}
</style>
