<template>
  <div class="wrap">
    <div class="box">
      <p class="box-title">
        {{ title }}
      </p>
      <div class="box-con">
        <div :id="chartid" class="demo1-chart" />
      </div>
    </div>
  </div>
</template>

<script>
import { options } from '~/plugins/options.js'
export default {
  props: {
    title: {
      type: String
    },
    pdata: {
      type: Array,
      default: () => {
        return []
      }
    },
    chartid: {
      type: String
    }
  },
  data() {
    return {}
  },
  updated() {
    this.echartsInit()
  },
  watch: {
    pdata: 'echartsInit'
  },
  methods: {
    echartsInit() {
      const _this = this
      const myChart = this.$echarts.init(document.getElementById(_this.chartid))
      let cate = [], data = [], barcolor = ['#63b8e0', '#5cf100', '#e67300']
      let id = _this.chartid.replace(/[^0-9]/ig,"") - 1;
      this.pdata.forEach(k => {
        cate.push(k.name)
        data.push(k.value)
      })
      myChart.setOption(options.barOption(barcolor[id], cate, data))
    }
  }
}
</script>
