<template>
  <div class="box">
    <p class="box-title">
      {{ title }}
    </p>
    <div class="box-con">
      <div class="data">
        <p>数码类：{{ pdata.digital }}</p>
        <p>日用品：{{ pdata.daily }}</p>
        <p>快消类：{{ pdata.consumer }}</p>
      </div>
      <div id="pieChart" />
    </div>
  </div>
</template>

<script>
import { options } from '~/plugins/options.js'
export default {
  props: {
    pdata: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      title: '各项占比'
    }
  },
  mounted() {
    this.echartsInit()
  },
  methods: {
    echartsInit() {
      const _this = this
      const myChart = this.$echarts.init(document.getElementById('pieChart'))
      myChart.setOption(options.pieOption(_this.pdata.canvasdata))
      console.log(this.pdata)
    }
  }
}
</script>
