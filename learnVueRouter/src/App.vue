<template>
  <div id="app">
    <h2>网站标题</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>

    <!-- 通过tag属性将其渲染成其他标签   -->
    <!-- replace不会留下history记录, 所以指定replace的情况下, 后退键返回不能返回到上一个页面中-->
    <!-- active-class: 当<router-link>对应的路由匹配成功时, 会自动给当前元素设置一个router-link-active的class   -->
    <!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace active-class="">关于</router-link>-->

    <!--    通过代码进行跳转-->
    <!--<button @click="homeClick">首页</button>-->
    <!--<button @click="aboutClick">关于</button>-->

    <router-link v-bind:to="'/user/'+userId">用户</router-link>

    <!--    参数传递，方式一：动态路由方式  方式二：传对象query方式-->
    <!--    <router-link to="/profile">我的</router-link>-->
    <router-link :to="{path: '/profile', query:{name: 'coderwhy', age: 18, height:1.88}}">我的</router-link>
    <!--    以代码的方式传递-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">我的</button>

    <router-view></router-view>
    <h2>版权信息</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: '123'
    }
  },
  methods: {
    homeClick() {
      // 通过代码的方式修改路由 vue-router
      // push => pushState
      // this.$router.push('/home')
      this.$router.replace('/home')
      console.log('homeClick');
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log('aboutClick');
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: 1.87
        }
      })
    }
  }

}
</script>

<style>
.router-link-active {
  color: red;
}
</style>
