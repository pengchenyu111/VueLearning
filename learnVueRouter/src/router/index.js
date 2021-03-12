import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

// 1.通过Vue.use(插件), 安装插件
Vue.use(Router)

const routes =  [
  {
    // 重定向，实现默认到首页的效果
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }
]

// 2.创建VueRouter对象
// 3.将router对象传入到Vue实例
export default new Router({
  routes,
  // 改为history模式，消除路径中的hash值，即#
  mode: 'history'
})
