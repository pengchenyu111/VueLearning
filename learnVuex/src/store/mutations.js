import * as types from "./mutations-types";

export default {
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
}
