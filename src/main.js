import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

import 'animate.css/animate.min.css'

import VueScreenSize from 'vue-screen-size'
Vue.use(VueScreenSize)

// import 'parallax-js/dist/parallax.min.js'

// let script = document.createElement('script')
// script.onload = () => {
//   // eslint-disable-next-line
//   new WOW().init()
// }

// script.src = './wow.min.js'
// document.head.appendChild(script)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
