<template>
  <div id="app">
    <h2>网站标题</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
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
</style>
