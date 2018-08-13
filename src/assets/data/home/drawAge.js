//import Vue from 'vue'
//import axios from 'axios';
//import echarts from 'echarts'



export default function drawAge() {
	//let Age = this.$echarts.init(document.getElementById('Age'))
  return {
    title: { 
      left: 'center',
      text: '年龄画像' 
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient : 'vertical',
      x : 'right',
      data:['18~25岁','26~35岁','36~45岁','46~55岁','>56岁']
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
          {value:667, name:'18~25岁'},
          {value:543, name:'26~35岁'},
          {value:312, name:'36~45岁'},
          {value:223, name:'46~55岁'},
          {value:176, name:'>56岁'}
        ]
      }
    ]
  }
}

