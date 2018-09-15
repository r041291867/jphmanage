<template>
	<div class="reportHour">
		<v-layout row wrap>
			<v-flex d-flex xs12>
				<v-card class="elevation-0">
					<v-card-text>
						<v-data-table
							:headers="headers"
							:items="customDay"
							class="elevation-8"
							:rows-per-page-items='[6,12,18,{"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}]'
						>
							<template slot="items" slot-scope="props">
								<td class="text-xs-center">{{ props.item.times }}</td>
								<td class="text-xs-center">{{ props.item.customersAll }}</td>
								<td class="text-xs-center">{{ props.item.males }}</td>
								<td class="text-xs-center">{{ props.item.females }}</td>
							</template>
						</v-data-table>	
					</v-card-text>
				</v-card>
			</v-flex>
			<v-flex d-flex xs12 style="margin-top: 0px;">
				<v-card class="elevation-0">
					<v-card-text>
						<chart
							flex
							:options='drawReport'
							ref='bar'
							auto-resize
							style="height: 30vh; width: 100%"
							class="elevation-8"
						/>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
		<v-btn @click="handleDownload">click</v-btn>
	</div>
</template>

<script>
//import Vue from 'vue'
//import axios from 'axios'
import echarts from 'echarts'
import ECharts from "vue-echarts/components/ECharts";
import customData from 'assets/customData/customerReportHourly.json'

//import 'script-loader!file-saver'; //保存文件用
//import 'script-loader!@/vendor/Blob'; //转二进制用
//import 'script-loader!xlsx/dist/xlsx.core.min'; //xlsx核心

var res = customData, customDay = []       //導入預設資料及計算本頁面所需資料
var male = [], female = [], customerAll = []
var time = ['00:00~00:59','01:00~01:59','02:00~02:59','03:00~03:59','04:00~04:59','05:00~05:59','06:00~06:59','07:00~07:59','08:00~08:59','09:00~09:59','10:00~10:59','11:00~11:59','12:00~12:59','13:00~13:59','14:00~14:59','15:00~15:59','16:00~16:59','17:00~17:59','18:00~18:59','19:00~19:59','20:00~20:59','21:00~21:59','22:00~22:59','23:00~23:59']
for (let i = 0;i<res.length-1;i+=2) {
	male[i/2] = res[i].malesage1+res[i].malesage2+res[i].malesage3+res[i].malesage4+res[i].malesage5+res[i+1].malesage1+res[i+1].malesage2+res[i+1].malesage3+res[i+1].malesage4+res[i+1].malesage5
	female[i/2] = res[i].femalesage1+res[i].femalesage2+res[i].femalesage3+res[i].femalesage4+res[i].femalesage5+res[i+1].femalesage1+res[i+1].femalesage2+res[i+1].femalesage3+res[i+1].femalesage4+res[i+1].femalesage5
	customerAll[i/2] = male[i/2]+female[i/2]
	customDay.push({
		times: time[i/2],
		customersAll: customerAll[i/2],
		males: male[i/2],
		females: female[i/2]
	})
}


export default {
	components: {
    chart: ECharts,
  },
	data () {
		return {
			headers: [
				{ text: '时间', align: 'center', sortable: false, value: this.times },
				{ text: '来客人数', align: 'center', sortable: false, value: this.customersAll },
				{ text: '男', align: 'center', sortable: false, value: this.males },
				{ text: '女', align: 'center', sortable: false, value: this.females },
			],
			res,customDay,male,female,customerAll,
			drawReport: this.drawCustomerReport(),
		}
	},
	methods : {
		drawCustomerReport () {
			return {
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
              normal:{color:'#1e88e5'}
            },
						data: male
					},
					{
						name:'女',
						type:'bar',
						stack: '总人数',
						itemStyle:{
              normal:{color:'#e53935'}
            },
						data: female
					},
				]
			}
		},
		handleDownload() { 
			//require.ensure([], () => { // 用 webpack Code Splitting xlsl还是很大的
			import('@/vendor/Export2Excel').then(excel => {
				const { export_json_to_excel } = require('../vendor/Export2Excel');
				const tHeader = ['时间', '来客人数', '男', '女']; // excel 表格头
				const filterVal = ['times', 'customersAll', 'males', 'females'];
				const list = this.customDay;
				const data = this.formatJson(filterVal, list); // 自行洗数据 按序排序的一个array数组
				export_json_to_excel(tHeader, data, '客流时报表');
			})
		},/*
		formatJson(filterVal, jsonData) {
			return jsonData.map(v => filterVal.map(j => v[j]))
		}*/
		formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }

	}
}
</script>

<style scoped lang="scss">
.reportHour {
	position:relative;
  display:block;
	figure .echarts {
    width: 90%;
  }
}
</style>