<template>
	<div class="wrap">
		<div class="box">
            <p class="box-title">
            {{ title }}
            </p>
            <div class="box-con">
                <div class="table">
                    <p class="thead">
                        <span>渠道</span>
                        <span>工单数</span>
                        <span>同比</span>
                    </p>
                    <p v-for= "(item,index) in pdata" :key="index">
                        <span>{{item.name}}</span>
                        <span>{{item.value}}</span>
                        <span>{{item.growth}}</span>
                    </p>
                </div>
                <div class="piechart">
                    <div id="pieChart" />
                </div>
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
            const myChart = this.$echarts.init(document.getElementById('pieChart'))
            myChart.setOption(options2.pieOption(_this.pdata))
        }
    }
}
</script>
