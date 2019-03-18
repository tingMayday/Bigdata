<template>
  <div class="wrap">
    <div class="box">
      <p class="box-title">
        {{ title }}
      </p>
      <div class="box-con flex">
        <div id="ringChart1" class="ringChart" />
        <div id="ringChart2" class="ringChart" />
        <div id="ringChart3" class="ringChart" />
        <div id="ringChart4" class="ringChart" />
        <div id="ringChart5" class="ringChart" />
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
      this.pdata.forEach((k, index) => {
        let data = [k.percent, 100 - k.percent]
        const myChart = this.$echarts.init(document.getElementById('ringChart' + (index + 1)))
        myChart.setOption(options.ringOption(data))
      })
    }
  }
}
</script>