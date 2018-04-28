// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import config from './config'
import setupAxios from './utils/interceptors'

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = config.baseURL
Vue.config.productionTip = false

/* eslint-disable no-new */
setupAxios()
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
