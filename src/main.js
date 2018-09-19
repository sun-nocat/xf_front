import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// import mockdata from './mock/NewData' // Mock模拟数据

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
