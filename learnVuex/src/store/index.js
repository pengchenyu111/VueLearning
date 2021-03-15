import Vue from 'vue'
import Vuex from 'vuex'

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import moduleA from "./modules/moduleA";

Vue.use(Vuex)

const store = new Vuex.Store({
  // 保存状态
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'kobe', age: 20},
      {id: 112, name: 'bob', age: 25},
      {id: 113, name: 'james', age: 31},
    ],
    info: {
      id: 222,
      name: 'pcy',
      age: 22
    }
  },

  // 建议通过mutations来修改state，而不是直接修改
  mutations,

  // 做异步操作，再到mutation
  actions,

  // 将state中数据变换后的数据
  getters,

  // 分模块，解决单一状态树过于臃肿的情况
  modules: {
    a: moduleA
  }
})


export default store
