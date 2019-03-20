<template>
  <div class="container">
    <Title :time="time" title="DEMO1" stitle="实时数据分析" />
    <div class="con">
      <box1 :pdata="data1" title="各项占比" />
      <box2 :pdata="data2" chartid="barChart1" title="数码类产品订单" />
      <box2 :pdata="data3" chartid="barChart2" title="日用产品订单" />
      <box2 :pdata="data4" chartid="barChart3" title="快消类产品订单" />
      <box5 :pdata="data5" title="总销量曲线" />
      <box6 :pdata="data6" chartid="barChart4" title="订单增长统计" />
      <box7 :pdata="data7" title="业绩增长" />
      <box8 :pdata="data8" title="大额订单TOP6" />
      <box9 :pdata="data9" title="各省绩效" />
      <box10 :pdata="data10" title="用户增长趋势" />
    </div>
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
import Box1 from '~/components/demo1/box1.vue'
import Box2 from '~/components/demo1/box2.vue'
import Box5 from '~/components/demo1/box5.vue'
import Box6 from '~/components/demo1/box6.vue'
import Box7 from '~/components/demo1/box7.vue'
import Box8 from '~/components/demo1/box8.vue'
import Box9 from '~/components/demo1/box9.vue'
import Box10 from '~/components/demo1/box10.vue'
import moment from 'moment'
import axios from 'axios'
export default {
  components: {
    Title,
    Box1,
    Box234,
    Box5,
    Box6,
    Box7,
    Box8,
    Box9,
    Box10
  },
  data() {
    return {
      time: '',
      data1: {},
      data2: [],
      data3: [],
      data4: [],
      data5: [],
      data6: {},
      data7: [],
      data8: [],
      data9: [],
      data10: {}
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
        if (res.ret) {
          this.data1 = res.data1
          this.data2 = res.data2
          this.data3 = res.data3
          this.data4 = res.data4
          this.data5 = res.data5
          this.data6 = res.data6
          this.data7 = res.data7
          this.data8 = res.data8
          this.data9 = res.data9
          this.data10 = res.data10
        }
      })
    }
  }
}
</script>
