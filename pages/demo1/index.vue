<template>
  <div class="container">
    <Title :time="time" />
    <div class="con">
      <pie :pdata="data1" />
      <bar />
    </div>
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
import Pie from '~/components/demo1/pie.vue'
import Bar from '~/components/demo1/bar.vue'
import moment from 'moment'
import axios from 'axios'
export default {
  components: {
    Title,
    Pie,
    Bar
  },
  data() {
    return {
      time: '',
      data1: {}
    }
  },
  mounted() {
    this.getTime()
    this.getData()
  },
  methods: {
    getTime() {
      this.time =
        moment().format('YYYY/MM/DD') + ' ' + moment().format('HH:mm:ss')
    },
    getData() {
      axios.get('/api-demo1').then(res => {
        res = res.data
        if (res.ret && res.data) {
          this.data1 = res.data.data1
          this.data2 = res.data.data2
        }
      })
    }
  }
}
</script>
