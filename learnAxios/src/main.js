import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   url: 'http://localhost:8090/api/recommendation/movieDetail/page/0/10',
//   method: 'get'
// }).then(res => {
//   console.log(res)
// })
