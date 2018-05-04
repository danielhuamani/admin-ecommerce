const ModuleSystem = {
  state: {
    isMenu: false,
    nameMenu: 'Dashboard'
  },
  getters: {
    getIsMenu: state => {
      return state.isMenu
    },
    getNameMenu: state => {
      return state.nameMenu
    }
  },
  mutations: {
    changeIsMenu (state) {
      state.isMenu = !state.isMenu
    },
    setNameMenu (state, name) {
      state.nameMenu = name
    }
  },
  actions: {
    changeIsMenu ({commit}) {
      commit('changeIsMenu')
    }
  }
}

export default ModuleSystem
