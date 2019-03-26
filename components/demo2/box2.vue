<template>
	<div class="wrap box2-2">
        <div class="box">
            <p class="box-title">{{ title }}</p>
            <p class="thead flex">
                <span>渠道</span>
                <span>工单数</span>
                <span>同比</span>
            </p>
        </div>
         <div class="box box2-notop">
            <p v-for= "(item,index) in pdata" :key="index">
                <span>{{item.name}}</span>
                <span>{{item.value}}</span>
                <span v-if="item.growth > 0" class="rise">{{item.growth}}</span>
                <span v-else-if="item.growth < 0" class="down">{{item.growth}}</span>
                <span v-else>{{item.growth}}</span>
            </p>
        </div>
         <div class="box box2-notop">
            <div class="piechart">
                <div id="pieChart" class="h300" />
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
