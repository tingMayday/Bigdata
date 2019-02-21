<template>
  <div class="box">
    <p class="box-title">
      {{ title }}
    </p>
    <div class="box-con">
      <div id="barChart" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '数码类产品订单'
    }
  },
  mounted() {
    this.echartsInit()
  },
  methods: {
    echartsInit() {
      // const _this = this
      // const myChart = this.$echarts.init(document.getElementById('pieChart'))
      // myChart.setOption(options.pieOption(_this.pdata.canvasdata))
      // console.log(this.pdata)
    }
  }
}
</script>
