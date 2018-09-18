//import Vue from 'vue'
//import axios from 'axios';
//import echarts from 'echarts'
import customData from 'assets/customData/customerReportWeek.json'

var res = customData, customDay = []       //導入預設資料及計算本頁面所需資料
var male = [], female = [], customerAll = []
var time = ['日','一','二','三','四','五','六']
for (let i in res) {
  male[i] = res[i].malesage1+res[i].malesage2+res[i].malesage3+res[i].malesage4+res[i].malesage5
  female[i] = res[i].femalesage1+res[i].femalesage2+res[i].femalesage3+res[i].femalesage4+res[i].femalesage5
  customerAll[i] = male[i]+female[i]
  customDay.push({
    times: time[i],
    customersAll: customerAll[i],
    males: male[i],
    females: female[i]
  })
}

export default function drawCustomerReport() {
  return {
    title: { 
      left: 'center',
      text: '客流量周报表' 
    },
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      orient : 'vertical',
      x : 'right',
      data: ['男','女']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        data : time
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [  
      {
        name:'男',
        type:'bar',
        stack: '总人数',
        itemStyle:{
          normal:{color:'#03a9f4'}
        },
        data: male
      },
      {
        name:'女',
        type:'bar',
        stack: '总人数',
        itemStyle:{
          normal:{color:'#e57373'}
        },
        data: female
      },
    ]
  }
}