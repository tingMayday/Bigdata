<template>
	<div class="wrap">
		<div class="box">
            <p class="box-title">
            {{ title }}
            </p>
            <div class="box-con">
                <div id="barChart" />
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
            const _this = this
            const myChart = this.$echarts.init(document.getElementById('barChart'))
            myChart.setOption(options2.barOption(_this.pdata))
        }
    }
}
</script>