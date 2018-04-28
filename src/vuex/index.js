import Vue from 'vue'
import Vuex from 'vuex'
import ModuleSystem from './system'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    ModuleSystem: ModuleSystem
  }
})

export default store
