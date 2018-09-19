import Mock from 'mockjs'

const newData = Mock.mock(
  '/api/getNewData', 'get', (req, res) => {
    return { //输出数据
      "status": 0,
      "msg": "查询成功！",
      "cost": 759.1,
      "data": [{
        "txdate": "2018-05-27",
        "acctype": "校园卡",
        "tradetype": "消费",
        "txamt": "-4.00",
        "mername": "17号档口",
        "poscode": "0369",
        "balance": "41.02",
        "posname": "东区食堂消费POS",
        "shopname": "风味饼",
        "dir": "东升苑"
      }],
      "dirlist": [{
        "dird": 0,
        "dirq": 102.1,
        "dirs": 92,
        "dirx": 467,
        "dirm": 98
      }],
      "toplist": [{
          "shopname": "综合经营部（商店）",
          "sum": 40.5,
          "time": 10,
        },
        {
          "shopname": "鹏宇快印（靠近男生宿舍打印店）",
          "sum": 22.400000000000002,
          "time": 6,
        },
        {
          "shopname": "山西饼",
          "sum": 100,
          "time": 9,
        }
      ]
    }
  }
)

export default newData
