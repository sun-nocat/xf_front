<template>
  <div class="swiper">
    <div class="arrow">
      <img src="/static/dist/src/assets/arrow.png" alt="">
      <!-- <img src="/src/assets/arrow.png" alt=""> -->
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <!-- <swiper-slide class="flex bg-full one" style="background-image: url('/static/dist/src/assets/first.jpg')"> -->
      <swiper-slide>
        <img src="/static/dist/src/assets/first.jpg" alt="" class="background">
        <div class="vertical-center">
          <div class="center" style="font-weight: normal;">
            <p class="textCenter">你的学期账单</p>
            <img src="" alt="">
            <p class="textCenter">请上滑查看</p>
          </div>
        </div>
      </swiper-slide>

      <!-- <swiper-slide class="bg-full" style="background-image: url('/static/dist/src/assets/second.jpg');font-size:18px"> -->
      <swiper-slide>
        <img src="/static/dist/src/assets/second.jpg" alt="" class="background">
        <div class="slide-sum">
          <p>时光总是偷偷流逝</p>
          <p>打开一卡通账单</p>
          <p>看看这一学期是不是过的不太一样</p>
          <p style="display:inline-block">总共花费</p>
          <span class="cost-num-x" style="font-size: 24px">{{costTotal}}元</span>
        </div>
      </swiper-slide>

      <!-- <swiper-slide class="bg-full" style="background-image: url('/static/dist/src/assets/third.jpg');font-size:18px"> -->
      <swiper-slide>
        <img src="/static/dist/src/assets/third.jpg" alt="" class="background">
        <div class="slide-detail">
          <p>
            <span style="color:#ff9800">{{restName}}</span> 得到你的青睐</p>
          <p style="display:inline-block">总共消费</p>
          <span class="cost-num-x" style="font-size: 24px">{{rantCost}}元</span>
          <p class="slide-tips" style="font-size: 16px">{{randomTipsOne}}</p>
        </div>

        <div class="talk-img-x">
          <img src="/static/dist/src/assets/talk.png" alt="">
          <p>你去征服世界</p>
          <p>我只想征服你的胃和心</p>
        </div>
        <!-- <div class="slide-bubble">
        </div> -->

      </swiper-slide>

      <!-- <swiper-slide class="bg-full" style="background-image: url('/static/dist/src/assets/third.jpg');font-size:18px"> -->
      <swiper-slide>
        <img src="/static/dist/src/assets/third.jpg" alt="" class="background">
        <div class="slide-detail">
          <p style="display:inline">
            你为
            <span style="color:#ff9800">{{mostExpenseName}} </span>花费了 </p>
          <span class="cost-num-x" style="font-size: 24px">{{mostCost}}元</span>
          <p>唯美食与爱不可辜负</p>
          <p>
            <span style="color:#ff9800">{{mostTimesName}} </span>是你的最爱</p>
          <p style="display:inline-block">总共光顾</p>
          <span class="cost-num-x" style="font-size: 24px">{{mostTimes}}次</span>
        </div>

        <div class="slide-tips-y" style="font-size: 16px">
          <p>{{randomTipsSec}}</p>
          <p>{{randomTipsThi}}</p>
        </div>

      </swiper-slide>

      <!-- <swiper-slide class=" bg-full" style="background-image: url('/static/dist/src/assets/fourth.jpg');font-size:18px"> -->
      <swiper-slide>
        <img src="/static/dist/src/assets/fourth.jpg" alt="" class="background">
        <div class="slide-detail">
          <div>
            <p style="display:inline-block;padding-top: 16px;">光顾
              <span style="color:#ff9800">{{shopMostName}} </span>
            </p>
            <span class="cost-num-x" style="font-size: 24px">{{shopMostTime}}次</span>
          </div>
          <div>
            <p style="display:inline-block;padding-top: 16px;">总共消费</p>
            <span class="cost-num-x" style="font-size: 24px">{{shopMostCost}}元</span>
          </div>
          <div>
            <p style="display:inline-block;padding-top: 16px;">
              <span style="color:#ff9800">奶茶店</span> 总共消费</p>
            <span class="cost-num-x" style="font-size: 24px">{{milkCost}}元</span>
          </div>
          <div>
            <p style="display:inline-block;padding-top: 16px;">总共光顾</p>
            <span class="cost-num-x" style="font-size: 24px">{{milkCostTimes}}次</span>
          </div>
          <div class="talk-img">
            <img src="/static/dist/src/assets/talk.png" alt="">
            <p>拿了我的东西</p>
            <p>以后就是我的人了</p>
          </div>
        </div>

      </swiper-slide>

      <!-- <swiper-slide class="flex bg-full" style="background-image: url('/static/dist/src/assets/first.jpg');"> -->
      <swiper-slide>
        <img src="/static/dist/src/assets/first.jpg" alt="" class="background">
        <div class="vertical-center">
          <div class="center" style="padding-bottom: 40px;font-size: 18px;font-weight: normal;">
            <p class="textCenter">一卡通账单陪你度过了一学期的岁月</p>
            <p class="textCenter">
              <a style="color:#03a9f4;text-decoration: none;font-weight: bold;" href="#">点击右上角分享</a>我的一卡通账单</p>
            <p class="textCenter">这学期还是你来买单我记录</p>
          </div>
        </div>

      </swiper-slide>

      <!-- <swiper-slide class="flex bg-full" style="background-image: url('/static/dist/src/assets/first.jpg')"> -->
      <!-- <swiper-slide class="flex bg-full" style="background-image: url('/src/assets/first.jpg')"> -->
      <swiper-slide>
        <img src="/static/dist/src/assets/first.jpg" alt="" class="background">
        <div class="qr-code" style="font-size:18px">
          <p class="textCenter">扫描下方二维码生成你的学期账单</p>
          <img class="qr-code-img" src="/static/dist/src/assets/qrcode.jpg" alt="公众号二维码">
        </div>
      </swiper-slide>

      <!-- Optional controls -->
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>
<script>
import axios from 'axios'
import dayjs from 'dayjs'
// import '..//static/dist/src/assets/js/rem.js'

const tipsSentence = ['美食，是可以吃下去的幸福回忆',
  '谁不眷恋一茶一饭的光辉，一口又一口的美食~',
  '胃觉得充实，心也感觉满满的',
  '既然生活就要有滋有味，那么美食就不可辜负',
  '想在有酒有肉的日子，款待没心没肺的自己']

export default {
  data() {
    return {
      costTotal: 0,
      restName: '',
      rantCost: 0,
      mostExpenseName: '',
      mostCost: 0,
      mostTimesName: '',
      mostTimes: 0,
      randomTipsOne: '',
      randomTipsSec: '',
      randomTipsThi: '',
      milkCost: 0,
      milkCostTimes: 0,
      shopMostName: '',
      shopMostCost: 0,
      shopMostTime: 0,
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        observer: true,
        observeParents: true,
        autoHeight: true,
        direction: 'vertical',
        fade: 'true',
        autoplay: false,
        // speed: 1000,
        height: window.innerHeight,
        width: window.innerWidth,
      },
      newTopList: [],

    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },

  },
  methods: {
    getInit() {
      let self = this;
      let restCost = {};
      // let begindate = dayjs().format('2018-03-01');
      // let enddate = dayjs().format('2018-08-30')
      let getThreeToFive = () => {
        return axios.get('/api/getNewData', {
          params: {
            begindate: dayjs().format('2018-03-01'),
            enddate: dayjs().format('2018-04-30')
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        })
      };
      let getFiveToSix = () => {
        return axios.get('/api/getNewData', {
          params: {
            begindate: dayjs().format('2018-05-01'),
            enddate: dayjs().format('2018-06-30')
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        })
      };
      let getSevToEight = () => {
        return axios.get('/api/getNewData', {
          params: {
            begindate: dayjs().format('2018-07-01'),
            enddate: dayjs().format('2018-08-31')
          }
        })
      }
      axios.all([getThreeToFive(), getFiveToSix(), getSevToEight()])
        .then(axios.spread((res1, res2, res3) => {
          let _this = this;
          // console.log(res1);
          // console.log(res2);
          // console.log(res3);
          let costSum = res1.data.cost + res2.data.cost + res3.data.cost;
          this.costTotal = costSum.toFixed(1);
          let restCostArr = [res1.data.dirlist[0], res2.data.dirlist[0], res3.data.dirlist[0]];
          let restCostObj = {
            dird: 0,
            dirm: 0,
            dirq: 0,
            dirs: 0,
            dirx: 0,
          }
          for (let item of restCostArr) {
            Object.keys(item).forEach((key) => {
              Object.keys(restCostObj).forEach((keyName) => {
                if (key === keyName) {
                  restCostObj[keyName] += item[key];
                }
                // console.log(restCostObj);
                let restData = [];
                //比较出花费最多的餐厅
                Object.keys(restCostObj).forEach((keyValue) => {
                  restData.push(restCostObj[keyValue]);
                  //将restData数组解构，给Math.max传入参数，返回最大数值
                  // console.log(restData);F
                  let arr = Math.max(...restData);
                  this.rantCost = Number(arr.toFixed(1))
                  // if (arr[0] == restCost[key]) {
                  if (arr == restCostObj[keyValue]) {
                    // this.restName = keyName;
                    switch (keyValue) {
                      case 'dirx':
                        this.restName = '旭日苑餐厅';
                        break;
                      case 'dird':
                        this.restName = '东升苑餐厅';
                        break;
                      case 'dirm':
                        this.restName = '美广餐厅';
                        break;
                      case 'dirs':
                        this.restName = '商店';
                        break;
                      default:
                        this.restName = '未统计'
                    }
                  }
                });
              })
            })
          }

          let topListArr = [...res1.data.toplist, ...res2.data.toplist, ...res3.data.toplist];
          let milkArr = [];
          let newObj = {}
          let newArrList = [];
          let costArr = [];
          let timesArr = [];
          let shopTime = [];
          let shopObj = {
            "综合经营部（商店）": {
              sum: 0,
              time: 0
            },
            "勤工助学商店": {
              sum: 0,
              time: 0
            },
            // "二楼商店": 0,
            // "旭日院一楼商店": 0,
            "大学超市": {
              sum: 0,
              time: 0
            },
            "商店": {
              sum: 0,
              time: 0
            },
            "东区超市": {
              sum: 0,
              time: 0
            },
            "东区生活服务中心": {
              sum: 0,
              time: 0
            },
          }
          // let newTopList = [];
          for (let stall of topListArr) {
            let shopname = stall.shopname
            if (shopname in newObj) {
              newObj[shopname].sum += Number(stall.sum)
              newObj[shopname].time += Number(stall.time)
            } else {
              newArrList.push({
                key: shopname
              })
              newObj[shopname] = {
                shopname: stall.shopname,
                sum: stall.sum,
                time: stall.time
              }
            }
          }

          Object.keys(newObj).forEach((key) => {
            _this.newTopList.push(newObj[key])
          })
          console.log("新数据结构", _this.newTopList);

          for (let item of _this.newTopList) {
            // console.log('标记', item)
            //统计次数最多的消费地点
            if (
              item.shopname != '商店' &&
              item.shopname != '东区超市' &&
              item.shopname != '一楼商店' &&
              item.shopname != '综合经营部（商店）' &&
              item.shopname != '勤工助学商店' &&
              item.shopname != '大学超市' &&
              item.shopname != '二楼商店'
            ) {
              costArr.push(Number(item.sum.toFixed(2)))
              let maxMath = Math.max(...costArr)
              if (maxMath == Number(item.sum.toFixed(2))) {
                this.mostCost = maxMath
                this.mostExpenseName = item.shopname
              }
              //统计次数最多的消费地点
              timesArr.push(item.time)
              //将timesArr数组解构后的值作为参数传入Math.max（）函数，返回最大值
              let cptimeMax = Math.max(...timesArr)
              if (cptimeMax == item.time) {
                this.mostTimesName = item.shopname
                this.mostTimes = cptimeMax
              }
            }

            // 统计奶茶店的消费金额和次数
            if (item.shopname == "咪一咻" || item.shopname == "蜜雪冰城") {
              this.milkCost += Number((item.sum).toFixed(2))
              this.milkCostTimes += item.time
            }



            // 比较用户在哪家商店花销最多
            Object.keys(shopObj).forEach(key => {
              if (key == item.shopname) {
                shopObj[key].sum = item.sum;
                shopObj[key].time = item.time;
              }
            })
          }
          console.log(shopObj);

          Object.keys(shopObj).forEach(val => {
            shopTime.push(Number(shopObj[val].time));
            let maxTime = Math.max(...shopTime);
            console.log("1", shopTime);
            console.log("2", maxTime);
            if (maxTime == shopObj[val].time) {
              this.shopMostName = val;
              this.shopMostCost = (shopObj[val].sum).toFixed(1);
              this.shopMostTime = shopObj[val].time;
            }
          })
        }))
    },
    randomTips() {
      //随机展示提示语
      let index = Math.floor(Math.random() * tipsSentence.length);
      //当index等于数组最后一个索引时
      if (index == tipsSentence.length - 1) {
        index--;
      } else if (index == 0) {
        index++;
      }
      this.randomTipsOne = tipsSentence[index];
      this.randomTipsSec = tipsSentence[index + 1];
      this.randomTipsThi = tipsSentence[index - 1];
    }
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
    this.getInit();
    this.randomTips();
  }
}
</script>
<style>
.talk-img {
    position: relative;
    left: 10%;
    height: auto;
    /* padding-top: 15px; */
}
.talk-img img {
    height: 195px;
    width: 240px;
    position: absolute;
    z-index: 1;
}
.talk-img p {
    font-size: 16px;
    position: relative;
    left: 10%;
    top: 26px;
}
.talk-img-x {
    position: relative;
    left: 10%;
    padding-top: 20%;
}
.talk-img-x img {
    height: 195px;
    width: 240px;
    position: absolute;
    z-index: 1;
}
.talk-img-x p {
    font-size: 16px;
    position: relative;
    left: 10%;
    top: 26px;
}
.qr-code-img {
    width: 200px;
    height: 200px;
    margin-top: 13px;
}
.arrow {
    display: block;
    width: 100%;
    position: fixed;
    z-index: 9999;
    bottom: 5%;
    animation: move 1.5s infinite;
    text-align: center;
}
@keyframes move {
    from {
        bottom: 5%;
    }
    to {
        bottom: 10%;
    }
}
@-webkit-keyframes move /* Safari and Chrome */ {
    from {
        bottom: 5%;
    }
    to {
        bottom: 10%;
    }
}
.slide-bubble {
    width: 0;
    height: 0;
    border-width: 50px;
    border-style: solid;
    border-color: #ffeb3b transparent transparent;
    position: absolute;
    bottom: 150px;
    left: 80px;
}
.qr-code {
    width: 100%;
    font-size: 18px;
    position: relative;
    color: black;
    top: 30%;
    font-weight: bold;
    text-align: center;
}
/* .ovals {
    position: relative;
    left: 10%;
    top: 20%;
    width: 55%;
    height: 14%;
    border-width: 10px;
    border-style: solid;
    border-color: #ffeb3b;
    border-radius: 15px;
}
.ovals:before,
.ovals:after {
    content: '';
    display: block;
    border-width: 19px;
    position: absolute;
    bottom: -40px;
    left: 100px;
    border-style: solid dashed dashed;
    border-color: #ffeb3b transparent transparent;
    font-size: 0;
    line-height: 0;
}
.ovals:after {
    bottom: -33px;
    border-color: #fff transparent transparent;
} */
.cost-num-x {
    display: inline-block;
    font-size: 24px;
    color: #03a9f4;
}
.slide-sum {
    margin-left: 28px;
    margin-top: 35%;
    font-size: 18px;
}
.slide-detail {
    margin-left: 28px;
    margin-top: 32%;
    font-size: 18px;
}
.slide-tips {
    margin-top: 0.5rem;
    font-weight: bold;
    position: relative;
    font-style: italic;
    color: #ffcc00;
    top: 15%;
}
.slide-tips-y {
    position: relative;
    font-style: italic;
    color: #ffcc00;
    top: 15%;
    text-align: left;
    left: 20px;
    font-weight: bold;
}
.flex {
    display: flex;
    text-align: center;
}
.swiper_bottom {
    position: absolute;
    bottom: 1rem;
    text-align: center;
    width: 100%;
    font-size: 0.9rem;
}
.center {
    /* background: aqua; */
    font-size: 24px;
    text-align: center;
    margin: auto;
    font-weight: bold;
}
.textCenter {
    text-align: center;
}

.fontSize {
    width: 100%;
    position: absolute;
    text-align: center;
    top: 25%;
    font-size: 1.5rem;
}
.firImg {
    /* background-size: cover; */
}
/* .bg-full {
    background-size: cover !important;
    -webkit-background-size: cover !important;
    -o-background-size: cover !important;
    background-position: center 0;
    background-repeat: no-repeat !important;
    height: auto;
} */
.background {
    position: fixed;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -100;
}
.swiper-wrapper {
    height: 100%;
}
.vertical-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
p {
    padding-top: 18px;
}
</style>