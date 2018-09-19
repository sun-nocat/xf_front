<template>
  <div>
    <div class="logo_pic">
      <img v-bind:src="logo" class="img" alt="智邮普创" style="border:#ccc solid 1px; border-radius: 50%">
    </div>
    <div class="el-form">
      <el-form :status-icon="true" class="form-inline" :model="ruleForm" ref="ruleForm" :rules="rules" @submit.native.prevent>
        <el-form-item prop="cardpwd" v-if="isPass">
          <el-input type="password" v-model="ruleForm.cardpwd" placeholder="请输入您的一卡通充值密码" class="login-form-input" :inline-message="true" />
        </el-form-item>

        <el-form-item class="indentify-form" prop="validate">
          <el-input type="text" class="identify" v-model="ruleForm.validate" />
          <img :src="checkImg" alt="验证码" class="indentifyPicture" @click="getAgainCode">
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary" :loading="submitLoading" @click="onSubmit('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer" style="font-size:16px">
      <p>西安邮电大学信息中心 智邮普创工作室</p>
      <p>电话：88166083</p>
      <p>地址：西安邮电大学图书馆514室</p>
    </div>
  </div>
</template>

<script>
import LOGO from '../assets/logo.jpg'

export default {
  data() {
    return {
      // student:0,
      // checkImg: '/static/img/'+student+'chckcode.jpg',
      checkImg: '',
      logo: LOGO,
      isPass:'',  //改动的地方
      ruleForm: {
        cardpwd: '',
        validate: ''
      },
      rules: {
        cardpwd: [
          {
            required: true,
            message: '请输入正确的一卡通密码',
            trigger: 'change'
          }
        ],
        validate: [
          {
            required: true,
            message: '请输入正确的验证码',
            trigger: 'change',
            len: 4
          }
        ]
      },
      submitLoading: false
    }
  },
  created() {
    this.getCheckImg();
    // 验证是否需要一卡通密码
    var isPass = this.getCookie()
    // console.log('ispass的cookie是', isPass);
    // isPass = '1';
    if (isPass === '1') {
      this.isPass = true
    } else if (isPass === '0') {
      this.isPass = false
    }
  },
  
  methods: {
    // 刷新验证码
    getAgainCode() {
      // 强制刷新 1为刷新页面 2为刷新图片
      window.location.replace('http://yktcx.xupt.org')
      // _this.checkImg = 'http://118.126.110.182:8002/static/img/chckcode.jpg?' + new Date().valueOf();
    },
    getCheckImg(){
      let _this = this;
      let strCookie = document.cookie
      let arrCookie = strCookie.split('; ')
      var obj = {}
      for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split('=');
        obj[arr[0]] = arr[1];
      }
      _this.checkImg = '/static/img/' + obj.student + 'chckcode.jpg'
      console.log(_this.checkImg)
    },
    
    // 获取指定cookie值
    getCookie() {
      let _this = this;
      let strCookie = document.cookie
      let arrCookie = strCookie.split('; ')
      console.log(arrCookie)

      var obj2 = {} //创建一个对象，来保存cookie数据
      for (var i = 0; i < arrCookie.length; i++) {

        var arrs = arrCookie[i].split('=');
        console.log(arrs)
        obj2[arrs[0]] = arrs[1];

      }
              console.log(obj2.password)

        return obj2.password
      return ''
    },
    onSubmit(formName) {
      // 表单验证
      this.$refs[formName].validate(valid => {
        if (valid) {
          let _this = this
          _this.submitLoading = true
          _this
            .$http({
              url: '/api/check',
              method: 'get',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              // data: {
              //   checkcode: _this.ruleForm.validate,
              // },
              //   transformRequest: [function (data) {
              //     let ret = ''
              //     for (let it in data) {
              //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              //     }
              //     return ret
              //   }],
              params: {
                cardpwd: _this.ruleForm.cardpwd,
                checkcode: _this.ruleForm.validate
              }
            })
            .then(function (res) {
              console.log('前端', res.data)
              if (res.data.status === 0) {
                _this.$router.push('/choose')
              } else {
                _this.$message.error('登陆失败, 密码错误')  //密码错误，让用户输入新密码---添加一个新的接口来解决
                _this.getAgainCode()
                // _this.isPass = '0'
                // console.log('变化')
              }
              _this.submitLoading = false
            })
            .catch(function (error) {
              console.log(error)
              _this.submitLoading = false
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style>
.indentify-form {
    width: 80%;
    margin: 10px auto;
    margin-bottom: 50px;
}

.indentify-form .identify {
    width: 75%;
}

.indentifyPicture {
    float: right;
    vertical-align: middle;
    width: 25%;
    height: 40px;
    margin: 0;
}

.logo_pic {
    display: flex;
    justify-content: center;
    padding-top: 60px;
}

.img {
    width: 30%;
    height: 30%;
}

.el-form {
    padding-top: 20px;
}

.identify .el-input__inner {
    width: 90%;
    vertical-align: middle;
    margin: 0 auto;
    border: 0 none;
    border-bottom: 1px solid #c0c4cc;
}
.el-form-item__error {
    left: 20%;
}
.login-form-input .el-input__inner {
    display: block;
    margin: 0 auto;
    border: 0 none;
    background: url('./../assets/u19.png');
    background-repeat: no-repeat;
    background-position-x: 19px;
    /*图片显示的位置*/
    width: 80%;
    padding: 0 0 13px 100px;
    border-bottom: 1px solid #c0c4cc;
    border-radius: 0;
}

.login-btn .el-button {
    display: block;
    margin: 0 auto;
    width: 80%;
    font-size: 20px;
}

.footer p {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    color: gray;
}

.footer {
    margin-top: 80px;
}
</style>
