<template>
  <div class="wrap">
    <div class="box">
      <p class="box-title">
        {{ title }}
      </p>
      <div class="box-con">
        <div id="lineChart" class="h380" />
      </div>
    </div>
  </div>
</template>

<script>
import { options2 } from '~/plugins/options.js'
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
      const myChart = this.$echarts.init(document.getElementById('lineChart'))
      myChart.setOption(options2.lineOption(this.pdata))
    }
  }
}
</script>