//import Vue from 'vue'
//import axios from 'axios';
//import echarts from 'echarts'



export default function drawSex() {
	//let Age = this.$echarts.init(document.getElementById('Age'))
  return {
    title: { 
      left: 'center',
      text: '性别画像' 
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
          {value:567, name:'男'},
          {value:478, name:'女'},
        ]
      }
    ]
  }
}
