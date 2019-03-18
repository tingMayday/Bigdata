export const options = {
  // 饼图
  pieOption: (data, ring) => {
    return {
      tooltip : {
        trigger: 'item',
        formatter: "{b}：{d}%"
      },
      series: [
        {
          name: '',
          type: 'pie',
          data: data,
          startAngle: 190,
          label: false
        }
      ]
    }
  },
  // 圆环
  ringOption: data => {
    return {
      title: {
        text: data[0] + '%',
        top:'44%',
        left:'35%',
        textStyle:{
          color: '#6FD7FA',
          fontWeight: 'bold',
          fontSize: 18,
        }
      },
      color:['#6FD7FA','#273e6f'],
      grid:{   //绘图区调整
        x: 50,  //左
        y: 0,   //上
        x2: 8,  //右
        y2: '10%'   //下
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series: [
        {
          name: '山东',
          type: 'pie',
          data: data,
          label: false,
          radius: ['45%', '80%']
        }
      ]
    }
  },
  // 横向柱状图
  barOption: (barcolor, cate, data) => {
    return {
      grid:{   //绘图区调整
        x: 50,  //左
        y: 0,   //上
        x2: 8,  //右
        y2: '10%'   //下
      },
      xAxis : [{
        type: 'value',
        axisLine: {
          show: true,
          lineStyle : {
            color : '#a5a5a5'
          }
        },
        axisLabel: {
          show: true,
          color: '#a5a5a5'
        },
        boundaryGap: [0, 0.01]
      }],
      yAxis : [{
        type : 'category',
        data: cate,
        axisLabel:{
          textStyle:{
            fontSize:'14',
            color: "#a5a5a5"
          }
        }
      }],
      series : [{
        type:'bar',
        barWidth: 14,  //柱宽度
        data: data,
        itemStyle:{
          normal:{    //柱状图颜色
            color: barcolor
          }
        },
      }],
      animationDurationUpdate: 1000
    }
  },
  // 竖向柱状图
  barOption2: (cate, data1, data2) => {
    return {
      grid:{   //绘图区调整
        x: 50,  //左
        y: 10,   //上
        x2: 20,  //右
        y2: '10%'   //下
      },
      xAxis : [{
        type: 'category',
        data: cate,
        axisLine: {
          show: true,
          lineStyle : {
            color : '#a5a5a5'
          }
        },
        axisLabel: {
          show: true,
          color: '#a5a5a5'
        },
        boundaryGap: [0, 0.01]
      }],
      yAxis : [{
        type : 'value',
        axisLabel:{
          textStyle:{
            fontSize:'14',
            color: "#a5a5a5"
          }
        }
      }],
      series : [{
        name: '订单数',
        type:'bar',
        barWidth: 14,  //柱宽度
        data: data1,
        itemStyle:{
          normal:{    //柱状图颜色
            color: '#21a954'
          }
        },
      },{
        name: '退单数',
        type:'bar',
        barWidth: 14,  //柱宽度
        data: data2,
        itemStyle:{
          normal:{    //柱状图颜色
            color: '#0779e6'
          }
        },
      }],
      animationDurationUpdate: 1000
    }
  },
  // 区域图
  areaOption: (cate, data) => {
    return {
      grid:{   //绘图区调整
        x: 50,  //左
        y: 20,   //上
        x2: 0,  //右
        y2: 20   //下
      },
      tooltip: {
          trigger: 'axis'
      }, 
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: cate
      },
      yAxis: {
          type: 'value'
      },
      series: [{
        name: '',
        type: 'line',
        data: data,
        areaStyle: {
          color: 'rgba(0,141,255,.2)'
        },
        itemStyle: {
          color: '#008dff'
        },
      }]
    }
  },
  // 线图
  lineOption: (cate, data1, data2) => {
    return {
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          // data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
          bottom: 0
      },
      grid: {
          left: '3%',
          right: '4%',
          top: '3%',
          bottom: '10%',
          containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: cate,
        axisLine: {
          show: true,
          lineStyle : {
            color : '#a5a5a5'
          }
        },
      },
      yAxis: {
          type: 'value',
          axisLabel:{
            textStyle:{
              fontSize:'14',
              color: "#a5a5a5"
            }
          }
      },
      series: [
          {
              name:'tokyo',
              type:'line',
              stack: '总量',
              data: data1
          },
          {
              name:'london',
              type:'line',
              stack: '总量',
              data: data2
          },
      ]
    }
  }
}
