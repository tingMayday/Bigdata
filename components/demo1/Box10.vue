<template>
  <div class="wrap">
    <div class="box">
      <p class="box-title">
        {{ title }}
      </p>
      <div class="box-con">
        <div id="lineChart" class="demo1-chart" />
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
      console.log(this.pdata)
      const myChart = this.$echarts.init(document.getElementById('lineChart'))
      myChart.setOption(options.lineOption(this.pdata.cate, this.pdata.tokyo, this.pdata.london))
    }
  }
}
</script>