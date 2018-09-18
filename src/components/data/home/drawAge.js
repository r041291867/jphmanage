//import Vue from 'vue'
//import axios from 'axios';
//import echarts from 'echarts'
import customData from 'assets/customData/customerReportHourly.json'


export default function drawAge() {
	//let Age = this.$echarts.init(document.getElementById('Age'))
  var ageNum1 = [], ageNum2 = [], ageNum3 = [], ageNum4 = [], ageNum5 = []
  var age1 = 0, age2 = 0, age3 = 0, age4 = 0, age5 = 0 
  var res = customData   //導入預設資料

  for (let i in res) {
    ageNum1[i] = res[i].femalesage1+res[i].malesage1
    ageNum2[i] = res[i].femalesage2+res[i].malesage2
    ageNum3[i] = res[i].femalesage3+res[i].malesage3
    ageNum4[i] = res[i].femalesage4+res[i].malesage4
    ageNum5[i] = res[i].femalesage5+res[i].malesage5
  }

  for (let i in ageNum1) age1 += ageNum1[i]
  for (let i in ageNum2) age2 += ageNum2[i]
  for (let i in ageNum3) age3 += ageNum3[i]
  for (let i in ageNum4) age4 += ageNum4[i]
  for (let i in ageNum5) age5 += ageNum5[i]

  return {
    title: { 
      left: 'center',
      text: '年龄分布' 
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient : 'vertical',
      x : 'left',
      data:['0~18岁','19~30岁','31~40岁','41~~50岁','>51岁']
    },
    calculable : true,
    series : [
      {
        name:'年龄',
        type:'pie',
        radius : ['50%', '70%'],
        itemStyle : {
          normal : {
            color: function (params) {
              var colorList = [
                '#1e88e5','#e53935','#fbc02d','#66bb6a','#ba68c8'
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
          {value:age1, name:'0~18岁'},
          {value:age2, name:'19~30岁'},
          {value:age3, name:'31~40岁'},
          {value:age4, name:'41~~50岁'},
          {value:age5, name:'>51岁'}
        ]
      }
    ]
  }
}

