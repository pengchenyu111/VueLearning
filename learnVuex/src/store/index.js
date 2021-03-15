import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations-types'


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
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
      // 提交方式1
      state.counter += payload
      // 提交方式2
      //state.counter += payload.count
    },
    addStu(state, stu) {
      state.students.push(stu)
    },
    [types.UPDATE_INFO](state) {
      state.info.name = 'xxx'
    }
  },
  actions: {},

  // 将state中数据变换后的数据
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20Stu(state) {
      return state.students.filter(s => {
        return s.age > 20
      })
    },
    more20StuLength(state, getters) {
      return getters.more20Stu.length
    },
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {}
})


export default store
