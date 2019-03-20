<template>
  <div class="wrap">
    <div class="box">
      <p class="box-title">
        {{ title }}
      </p>
      <div class="box-con flex">
        <div class="cate">
          <p>数码类：<span class="blue">{{ pdata.digital }}</span></p>
          <p>日用品：<span class="green">{{ pdata.daily }}</span></p>
          <p>快消类：<span class="orange">{{ pdata.consumer }}</span></p>
        </div>
        <div id="pieChart" />
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
    }
  },
  data() {
    return {

    }
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
      const myChart = this.$echarts.init(document.getElementById('pieChart'))
      myChart.setOption(options.pieOption(_this.pdata.canvasdata))
    }
  }
}
</script>
