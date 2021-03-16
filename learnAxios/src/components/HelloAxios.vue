<template>
  <ul>
    <li v-for="item in myData">{{ item }}</li>
  </ul>
</template>


<script>

import * as httpFetch from '../api/request'

export default {
  name: "HelloAxios",
  data() {
    return {
      pageNum: 0,
      pageSize: 20,
      myData: []
    }
  },
  created() {
    this.queryPageMovie()
  },
  methods: {
    queryPageMovie() {
      httpFetch
        .queryPageMovie(0, 20)
        .then(res => {
          console.log(res);
          this.myData = res.data.data.list
        })
    }
  }
}
</script>

<style scoped>

</style>
