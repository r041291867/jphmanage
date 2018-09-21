//import Vue from 'vue'
//import axios from 'axios';
//import echarts from 'echarts'
import customData from 'assets/customData/customerReportHourly.json'


export default function customerSum() {
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

  return male+female
}
