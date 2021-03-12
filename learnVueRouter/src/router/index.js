import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 懒加载方式
// 路由懒加载的主要作用就是将路由对应的组件打包成一个个的js代码块，只有在这个路由被访问到的时候, 才加载对应的组件，这样就更加高效了
const Home = () => import('../components/Home')
const HomeNews = () => import("../components/HomeNews")
const HomeMessage = () => import("../components/HomeMessage")
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import("../components/Profile")

// 1.通过Vue.use(插件), 安装插件
Vue.use(Router)

const routes = [
  {
    // 重定向，实现默认到首页的效果
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    // 嵌套路由
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 2.创建VueRouter对象
// 3.将router对象传入到Vue实例
export default new Router({
  routes,
  // 改为history模式，消除路径中的hash值，即#
  mode: 'history'
})
