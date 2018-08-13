//import Vue from 'vue'
//import axios from 'axios';
//import echarts from 'echarts'

export default function salesMetricsDay() {

  return {
    title: { 
      left: 'center',
      text: '各时段客流量与客单数' 
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      orient: 'vertical',
      x: 'right',
      data:['客单数','客流量']
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
      },
      data: ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name:'客流量',
      type:'line',
      smooth: true,
      data: [33, 6, 6, 21, 3, 29, 35, 264, 129, 74, 71, 146, 225, 77, 93, 104, 70, 125, 175, 116, 106, 6, 5, 5],
      itemStyle: {
        normal: {
          color: '#1e88e5'
        }
      },
    },
    {
      name:'客单数',
      type:'line',
      smooth: true,
      data: [19, 2, 3, 5, 2, 8, 9, 63, 36, 28, 19, 51, 71, 32, 29, 39, 31, 64, 70, 72, 51, 0, 0, 0],
      itemStyle: {
        normal: {
          color: '#ED695E'
        }
      },
    }]
  }
}