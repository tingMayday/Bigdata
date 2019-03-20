<template>
	<div class="wrap">
		<div class="box">
            <p class="box-title">
            {{ title }}
            </p>
            <div class="box-con">
                <div id="barChart3" />
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
            const myChart = this.$echarts.init(document.getElementById('barChart3'))
            let cate = [], data = [],type = { x: 'category', y: 'value'}
            this.pdata.forEach(k => {
                cate.push(k.name)
                data.push(k.value)
            })
            myChart.setOption(options2.barOption2(type, cate, data))
        }
    }
}
</script>