export default {
  state: {
    name: 'tom'
  },
  getters: {
    fullName(state) {
      return state.name += 'hadi'
    },
    // 第三个参数可以拿到根的state
    fullName2(state, getters, rootState) {
      return getters.fullName + rootState.counter
    },

  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000)
    }
  }
}
