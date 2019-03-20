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
      type: Object,
      default: () => {
        return {}
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
      myChart.setOption(options.barOption2(_this.pdata.cate, _this.pdata.order, _this.pdata.back))
    }
  }
}
</script>
