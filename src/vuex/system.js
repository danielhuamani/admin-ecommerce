const ModuleSystem = {
  state: {
    isMenu: false
  },
  getters: {
    getIsMenu: state => {
      return state.isMenu
    }
  },
  mutations: {
    changeIsMenu (state) {
      state.isMenu = !state.isMenu
    }
  },
  actions: {
    changeIsMenu ({commit}) {
      commit('changeIsMenu')
    }
  }
}

export default ModuleSystem
