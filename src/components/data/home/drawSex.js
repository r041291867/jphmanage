//import Vue from 'vue'
//import axios from 'axios';
//import echarts from 'echarts'
import customData from 'assets/customData/customerReportHourly.json'


export default function drawSex() {
	//let Age = this.$echarts.init(document.getElementById('Age'))
  var maleNum = [], femaleNum = []
  var male = 0, female = 0
  var res = customData   //導入預設資料

  for (let i in res) {
    maleNum[i] = res[i].malesage1+res[i].malesage2+res[i].malesage3+res[i].malesage4+res[i].malesage5;
    femaleNum[i] = res[i].femalesage1+res[i].femalesage2+res[i].femalesage3+res[i].femalesage4+res[i].femalesage5;
  }

  for (let i in maleNum) male += maleNum[i]
  for (let i in femaleNum) female += femaleNum[i]

  return {
    title: { 
      left: 'center',
      text: '性别比例' 
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient : 'vertical',
      x : 'right',
      data:['男','女']
    },
    calculable : true,
    series : [
      {
        name:'性别',
        type:'pie',
        radius : ['50%', '70%'],
        itemStyle : {
          normal : {
            color: function (params) {
              var colorList = [
                '#1e88e5','#e53935','#fbc02d','#4caf50','#ba68c8'
              ]
              return colorList[params.dataIndex]
            },
            label : {
              show : false
            },
            labelLine : {
              show : false
            }
          },
        },
        data:[
          {value:male, name:'男'},
          {value:female, name:'女'},
        ]
      }
    ]
  }
}
