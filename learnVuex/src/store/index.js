import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 保存状态
  state: {
    counter: 1000
  },
  // 建议通过mutations来修改state，而不是直接修改
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {},
  getters: {},
  modules: {}
})


export default store
