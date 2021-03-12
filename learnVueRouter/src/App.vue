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
    <router-view></router-view>
    <h2>版权信息</h2>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.router-link-active {
  color: red;
}
</style>
