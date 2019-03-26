export const options = {
  // 饼图
  pieOption: (data) => {
    return {
      tooltip : {},
      color:['#cd4261', '#227fe0','#24a8ae','#33a75b','#d6af36'],
      series: [{
        type: 'pie',
        data: data,
        startAngle: 190,
        label: false,
        itemStyle: {
          normal: {
              borderWidth: 1,
              borderColor: '#fff',
          }
        }
      }]
    }
  },
  // 横向柱状图
  barOption: (barcolor, cate, data) => {
    return {
      grid:{ x: 0, y: 10, x2: 10, y2: 0, containLabel: true },
      tooltip: {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
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
        splitLine:{ 
          show:true, 
          lineStyle:{ 
            type:'dashed',
            color: '#373741'
          } 
        }
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
  // 区域图
  areaOption: (cate, data) => {
    return {
      grid:{ x: 0, y: 10, x2: 25, y2: 12, containLabel: true },
      tooltip: {
        // trigger: 'axis'
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
        axisLabel: {
          show: true,
          interval:'0',
          rotate: -40,
          color: '#a5a5a5'
        }
      },
      yAxis: {
        type: 'value',
        axisLabel:{
          textStyle:{
            fontSize:'14',
            color: "#a5a5a5"
          }
        },
        splitLine:{ 
          show:true, 
          lineStyle:{ 
            type:'dashed',
            color: '#373741'
          } 
        }
      },
      series: [{
        type: 'line',
        data: data,
        showSymbol: false,
        areaStyle: {
          color: 'rgba(0,141,255,.2)'
        },
        itemStyle: {
          color: '#008dff'
        },
      }]
    }
  },
  // 竖向柱状图
  barOption2: (cate, data1, data2) => {
    return {
      grid:{ x: 0, y: 10, x2: 10, y2: 0, containLabel: true },
      tooltip: {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
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
        },
        splitLine:{ 
          show:true, 
          lineStyle:{ 
            type:'dashed',
            color: '#373741'
          } 
        }
      }],
      series : [{
        name: '订单数',
        type:'bar',
        barWidth: 14, 
        data: data1,
        stack: 'total',
        itemStyle:{
          normal:{ 
            color: '#21a954'
          }
        }
      },{
        name: '退单数',
        type:'bar',
        barWidth: 14, 
        data: data2,
        stack: 'total',
        itemStyle:{
          normal:{
            color: '#0779e6'
          }
        }
      }],
      animationDurationUpdate: 1000
    }
  },
  // 圆环
  ringOption: data => {
    return {
      title: {
        text: data[0].value + '%',
        top:'44%',
        left:'38%',
        textStyle:{
          color: '#6FD7FA',
          fontWeight: 'bold',
          fontSize: 18,
        }
      },
      color:['#6FD7FA','#273e6f'],
      grid:{ x: 0, y: 10, x2: 0, y2: 50, containLabel: true },
      legend: {
        icon: 'none',
        bottom: 0,
        left: '20%',
        textStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          color: '#6FD7FA'
       },
      },
      series: [
        {
          type: 'pie',
          data: data,
          label: false,
          radius: ['45%', '80%'],
          itemStyle: {
            normal: {
              borderWidth: 1,
              borderColor: '#fff',
            }
          }
        }
      ]
    }
  },
  // 线图
  lineOption: (cate, data1, data2) => {
    return {
      grid: { x: 0, y: 10, x2: 10, y2: 40, containLabel: true },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
        icon: 'rec',
        bottom: 0,
        textStyle: {
          color: '#8a8a8b'
        }
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
          },
          splitLine:{ 
            show:true, 
            lineStyle:{ 
              type:'dashed',
              color: '#b4b4c0'
            } 
          }
      },
      series: [
          {
            name:'tokyo',
            type:'line',
            data: data1,
            symbolSize: 10,
            itemStyle: {
              normal: {
                borderColor: '#fff',
                color: '#2593fb'
              }
            }
          },
          {
            name:'london',
            type:'line',
            data: data2,
            symbolSize: 10,
            itemStyle: {
              normal: {
                borderColor: '#fff',
                color: '#38c060'
              }
            }
          },
      ]
    }
  }
}

export const options2 = {
  pieOption: (data) => {
    return {
      color: ['#2181e0', '#23a9ae', '#32a85b', '#d6b136', '#cc4361', '#7243c6'],
      grid: { x: 0, y: 0, x2: 100, y2: 250, containLabel: true },
      tooltip : {
        trigger: 'item'
      },
      legend: {
        bottom: 0,
        icon: 'circle',
        // width: 10,
        // padding: [100, 50, 0],
        textStyle: {
          color: '#707172'
        }
      },
      series: [{
        name: '',
        type: 'pie',
        data: data,
        center : ['50%', '42%'],
        itemStyle: {
          normal: {
            borderColor: '#fff'
          }
        },
        label: {
          normal: {
              textStyle: {
                  color: '#a6a6a6'
              }
          }
        },
      }]

    }
  },
  // 竖向多组柱状图
  barOption: (data) => {
    return {
      color: ['#2183e3', '#32aa5e', '#d6b339', '#20336d', '#7245c9', '#26aeaf'],
      grid: { x: 0, y: 10, x2: 0, y2: 50, containLabel: true },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['wechart', 'email', 'telephone', 'people_com_cn', 'internet', 'mayor'],
        bottom: 0,
        icon: 'rect',
        textStyle: {
          color: '#717273'
        }
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {show: false},
          data: data.cate,
          axisLine: {
            show: true,
            lineStyle : {
              color : '#a5a5a5'
            }
          },
          axisLabel: {
            show: true,
            color: '#a5a5a5'
          }
        }
      ],
      yAxis: [{
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
        splitLine:{ 
          show:true, 
          lineStyle:{ 
            type:'dashed',
            color: '#373741'
          } 
        }
      }],
      series: [{
          name: 'wechart',
          type: 'bar',
          barWidth: 12,
          barGap: 0,
          data: data.wechart
        }, {
          name: 'email',
          type: 'bar',
          barWidth: 12,
          data: data.email
        }, {
          name: 'telephone',
          type: 'bar',
          barWidth: 12,
          data: data.telephone
        }, {
          name: 'people_com_cn',
          type: 'bar',
          barWidth: 12,
          data: data.people_com_cn
      },{
        name: 'internet',
        type: 'bar',
        barWidth: 12,
        data: data.internet
      }, {
        name: 'mayor',
        type: 'bar',
        barWidth: 12,
        data: data.mayor
      }]
    }
  },
  // 柱状图
  barOption2: (type, cate, data) => {
    return {
      grid:{ x: 0, y: 10, x2: 10, y2: 0, containLabel: true },
      tooltip: {},
      xAxis : [{
        type: type.x,
        data: cate,
        axisLine: {
          show: true
        },
        axisLabel: {
          show: true,
          color: '#a5a5a5'
        },
        splitLine:{ 
          show:true, 
          lineStyle:{ 
            type:'dashed',
            color: '#373741'
          } 
        }
      }],
      yAxis : [{
        type : type.y,
        data: cate,
        axisLabel:{
          textStyle:{
            fontSize:'14',
            color: "#a5a5a5"
          }
        },
        axisLine: {
          show: true,
          lineStyle : {
            color : '#a5a5a5'
          }
        },
        splitLine:{ 
          show:true, 
          lineStyle:{ 
            type:'dashed',
            color: '#373741'
          } 
        }
      }],
      series : [{
        type:'bar',
        // barWidth: 14,
        data: data,
        itemStyle:{
          normal:{
            color: '#2181e0'
          }
        },
      }],
      animationDurationUpdate: 1000
    }
  },

   // 圆环
   ringOption: data => {
    return {
      color:['#cc4361','#d6b136','#32a85b','#23a9ae','#2181e0'],
      grid:{ x: 0, y: 0, x2: 0, y2: 0, containLabel: true },
      legend: {
        left: 'center',
        bottom: 0,
        icon: 'circle',
        data:['其他','举报','投诉','建议','咨询'],
        textStyle: {
          color: '#707172'
        }
      },
      tooltip: {},
      series: [{
        type: 'pie',
        data: data,
        radius: ['40%', '70%'],
        center: ['50%', '45%'],
        itemStyle: {
          normal: {
            borderColor: '#fff'
          }
        },
        label: {
          normal: {
              textStyle: {
                  color: '#a6a6a6'
              }
          }
        }
      }]
    }
  },

  // 线图
  lineOption: (data) => {
    return {
      color: ['#2593fb', '#38c060', '#f9cb34', '#233471', '#844add', '#27c2c1'],
      grid:{ x: 0, y: 10, x2: 10, y2: 80, containLabel: true },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        }
      },
      legend: {
        data:['wechart','email','telephone','people_com_cn','internet','mayor'],
        bottom: 0,
        icon: 'rect',
        textStyle: {
          color: '#707172'
        }
      },
      xAxis: {
        type: 'category',
        data: data.cate,
        axisLine: {
          lineStyle : {
            color : '#3f455c'
          }
        },
        axisLabel:{
          interval: 0,  
          textStyle:{
            fontSize:'14',
            color: "#a5a5a5"
          }
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        axisLabel:{
          textStyle:{
            fontSize:'14',
            color: "#a5a5a5"
          }
        },
        splitLine: {
          lineStyle:{ 
            type:'dashed',
            color: '#373741'
          } 
        }
      },
      series: [{
          name:'wechart',
          type:'line',
          symbolSize: 8,
          data: data.wechart
        },
        {
          name:'email',
          type:'line',
          symbolSize: 8,
          data: data.email
        },
        {
          name:'telephone',
          type:'line',
          symbolSize: 8,
          data: data.telephone
        },
        {
          name:'people_com_cn',
          type:'line',
          symbolSize: 8,
          data: data.people_com_cn
        },
        {
          name:'internet',
          type:'line',
          symbolSize: 8,
          data: data.internet
        },{
          name:'mayor',
          type:'line',
          symbolSize: 8,
          data: data.mayor
      }]
    }
  }
  
}