<template>
  <div id="app">
    <h2>---------------App内容--------------</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addStu">添加学生</button>

    <h2>---------------App内容:getter--------------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>年龄大于20的学生：{{ $store.getters.more20Stu }}</h2>
    <h2>个数：{{ $store.getters.more20StuLength }}</h2>
    <h2>年龄大于传入年龄的学生：{{ $store.getters.moreAgeStu(25) }}</h2>

    <h2>---------------HelloVuex内容--------------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '我是App组件'
    }
  },
  computed: {
    // more20Stu() {
    //   return this.$store.state.students.filter(s => {return s.age >= 20})
    // }
  },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // 1.普通的提交风格
      this.$store.commit('incrementCount', count)
      // 2. 特殊的提交风格
      // this.$store.commit({
      //   type: 'incrementCount',
      //   count: count
      // })
    },
    addStu() {
      const stu = {id: 114, name: 'alan', age: 32}
      this.$store.commit('addStu', stu)
    }
  }
}
</script>

<style>

</style>
