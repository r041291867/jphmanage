//import Vue from 'vue'
//import axios from 'axios';
//import echarts from 'echarts'

export default function salesMetricsDay() {
	return {
		title: { 
			left: 'center',
			text: '日销售数据' 
		},
    tooltip: {},
    xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
      itemStyle: {
				normal: {
          color: '#1e88e5',
        }
      }
    }],
    
	}
}