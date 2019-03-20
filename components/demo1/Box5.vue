<template>
	<div class="wrap">
		<div class="box">
	    <p class="box-title">
	      {{ title }}
	    </p>
	    <div class="box-con">
	      <div id="areaChart" class="demo1-chart" />
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
      const myChart = this.$echarts.init(document.getElementById('areaChart'))
      let cate = [], data = []
      this.pdata.forEach(k => {
      	cate.push(k.name)
        data.push(k.value)
      })
      myChart.setOption(options.areaOption(cate, data))
    }
	}
}
</script>