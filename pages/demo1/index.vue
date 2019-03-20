<template>
  <div class="container">
    <Title :time="time" title="DEMO1" stitle="实时数据分析" />
    <div class="con">
      <pie :pdata="data1" title="各项占比" />
      <bar :pdata="data2" chartid="barChart1" title="数码类产品订单" />
      <bar :pdata="data3" chartid="barChart2" title="日用产品订单" />
      <bar :pdata="data4" chartid="barChart3" title="快消类产品订单" />
      <areac :pdata="data5" title="总销量曲线" />
      <bar2 :pdata="data6" chartid="barChart4" title="订单增长统计" />
      <rise :pdata="data7" title="业绩增长" />
      <top :pdata="data8" title="大额订单TOP6" />
      <ring :pdata="data9" title="各省绩效" />
      <linellae :pdata="data10" title="用户增长趋势" />
    </div>
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
import Pie from '~/components/demo1/pie.vue'
import Bar from '~/components/demo1/bar.vue'
import Areac from '~/components/demo1/area.vue'
import Bar2 from '~/components/demo1/bar2.vue'
import Rise from '~/components/demo1/rise.vue'
import Top from '~/components/demo1/top.vue'
import Ring from '~/components/demo1/ring.vue'
import Linellae from '~/components/demo1/line.vue'
import moment from 'moment'
import axios from 'axios'
export default {
  components: {
    Title,
    Pie,
    Bar,
    Areac,
    Bar2,
    Rise,
    Top,
    Ring,
    Linellae
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
