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
							hide-actions
						>
							<template slot="items" slot-scope="props">
								<td class="text-xs-center">{{ props.item.times }}</td>
								<td class="text-xs-center">{{ props.item.customersAll }}</td>
								<td class="text-xs-center">{{ props.item.males }}</td>
								<td class="text-xs-center">{{ props.item.females }}</td>
								<td class="text-xs-center">{{ props.item.average }}</td>
							</template>
						</v-data-table>	
					</v-card-text>
				</v-card>
			</v-flex>
			<v-flex d-flex xs12 md6 style="margin-top: 0px;">
				<v-card class="elevation-0">
					<v-card-text>
						<chart
							flex
							:options='drawSex'
							ref='pie'
							auto-resize
							style="height: 30vh; width: 100%"
							class="elevation-8"
						/>
					</v-card-text>
				</v-card>
			</v-flex>
			<v-flex d-flex xs12 md6 style="margin-top: 0px;">
				<v-card class="elevation-0">
					<v-card-text>
						<chart
							flex
							:options='drawAge'
							ref='pie'
							auto-resize
							style="height: 30vh; width: 100%"
							class="elevation-8"
						/>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
//import Vue from 'vue'
//import axios from 'axios'
import echarts from 'echarts'
import ECharts from "vue-echarts/components/ECharts";
import customData from 'assets/customData/customerReportMonth.json'

var res = customData, customDay = []       //導入預設資料及計算本頁面所需資料
//計算性別
var male = [], female = [], customerAll = []
var malesAll = 0,femalesAll = 0
var customerAVG = 0

for (let i in res) {
	male[i]=res[i].malesage1+res[i].malesage2+res[i].malesage3+res[i].malesage4+res[i].malesage5
	female[i]=res[i].femalesage1+res[i].femalesage2+res[i].femalesage3+res[i].femalesage4+res[i].femalesage5
}

for (let i in male) malesAll+=male[i]
for (let i in female) femalesAll+=female[i]

customerAVG = Math.round((malesAll+femalesAll)/res.length)

//Datetime轉換
var date = new Date(res[0].Datetime)
var Y = date.getFullYear() + '-';					//year
var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);    //month

customDay.push({
	times: Y+M,
	customersAll: malesAll+femalesAll,
	males: malesAll,
	females: femalesAll,
	average: customerAVG
})

//計算年齡
var ageNum1 = [], ageNum2 = [], ageNum3 = [], ageNum4 = [], ageNum5 = []
var age1 = 0, age2 = 0, age3 = 0, age4 = 0, age5 = 0 

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
				{ text: '平均来客人数', align: 'center', sortable: false, value: this.average }
			],
			customDay,customerAll,malesAll,femalesAll,
			age1,age2,age3,age4,age5,
			drawAge: this.drawAgeRate(),
			drawSex: this.drawSexRate()
		}
	},
	methods : {
		drawAgeRate() {
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
					x : 'right',
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
							{value:age1, name:'0~18岁'},
							{value:age2, name:'19~30岁'},
							{value:age3, name:'31~40岁'},
							{value:age4, name:'41~~50岁'},
							{value:age5, name:'>51岁'}
						]
					}
				]
			}
		},
		drawSexRate() {
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
							{value:malesAll, name:'男'},
							{value:femalesAll, name:'女'},
						]
					}
				]
			}
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