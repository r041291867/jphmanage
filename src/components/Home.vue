<template>
  <div class="home">
    <v-layout row wrap>
      <v-flex xs12 sm4 style="margin-top: 3px;">
        <v-card>
          <v-layout>
            <v-flex xs5 id="weather">
              <v-card-media
                :src="weatherimg"
                height="25vh"
                contain
              ></v-card-media>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <figure>
                  <div>
                    <h2><span>{{today}}</span></h2>
                    <h3><span>{{weekday}}</span></h3>
                    <h3><span>{{todayweather}}</span></h3>
                    <h3><span>{{aqi}}</span></h3>
                  </div>
                </figure>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm4 style="margin-top: 3px;">
        <v-card>
          <figure class="echarts">
            <chart
              flex
              :options='DrawSex'
              ref='bar'
              auto-resize
              style="height: 30vh;"
            />
          </figure>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm4 style="margin-top: 3px;">
        <v-card>
          <figure class="echarts">
            <chart
              flex
              :options='DrawAge'
              ref='pie'
              auto-resize
              style="height: 30vh;"
            />
          </figure>
        </v-card>
      </v-flex>
      <github-corner style="position: absolute; top: 0px; border: 0; right: 0;"/>
      <v-flex d-flex xs12 sm4 style="margin-top: 3px;">
        <v-card>
          <v-card-text class="kll">
            <h3>本日客流统计</h3>
            <h1 style="font-size: 5em; line-height:20vh;">{{CustomerSum}}</h1> 
          </v-card-text>          
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm8 style="margin-top: 3px;">
        <v-card>
          <v-card-text>
            <chart
              flex
              :options='CustomerDaily'
              ref='bar'
              auto-resize
              style="height: 30vh;  width: 100%"
            />
          </v-card-text>          
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm12 style="margin-top: 3px;">
        <v-card>
          <v-card-text>
            <chart
              flex
              :options='CustomerWeek'
              ref='line'
              auto-resize
              style="height: 30vh; width: 100%"
            />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import echarts from 'echarts'
import drawAge from "components/data/home/drawAge"
import drawSex from "components/data/home/drawSex"
import salesMetricsDay from "components/data/home/salesMetricsDay"
import customerDaily from "components/data/home/customerDaily"
import customerSum from "components/data/home/customerSum"
import customerWeek from "components/data/home/customerWeek"
import customData from "assets/customData/weather.json"
import GithubCorner from "./GithubCorner"

Vue.prototype.$echarts = echarts

export default {
  components: {
    GithubCorner,
  },
  data() {
    return {
      weatherimg: require('assets/weather/sunnycloud.png'),
      aqi: 'Loading...',
      today: 'Loading...',
      weekday: 'Loading...',
      todayweather: 'Loading...',
      DrawAge: drawAge(),
      DrawSex: drawSex(),
      MetricDay: salesMetricsDay(),
      CustomerDaily: customerDaily(),
      CustomerSum: customerSum(),
      CustomerWeek: customerWeek()
    }
  },
  methods: {
    /* eslint-disable */
    gettodayweather: () => {
      var day = new Date().getFullYear()+"-"+less10(new Date().getMonth()+1)+"-"+less10(new Date().getDate());
      function less10(num) {
        if(num < 10) {
          return "0"+num;
        } else return num;
      }
      return axios.get("/api/weatherToday?date="+day)
        .then(response => response.data)
        .catch((err) => customData);     //api故障時會呈現預設好的資料
    },
    /* eslint-enable */
  },
  mounted() {
    var vm = this;
    this.gettodayweather().then(value => {
      // console.log(value);
      let w = value[0].Weather;
      // vm.weatherimg = require('@/assets/weather/sunnycloud.png');
      switch (w) {
        case "多云":
        case "阴":
        case "阴转多云":
        case "阴~多云":
        case "阵雨转多云":
          vm.weatherimg = require('assets/weather/cloud.png');
          break;
        case "多云转阵雨":
        case "多云转中雨":
        case "中雨~大雨":
        case "大雨~中雨":
        case "中雨~雷阵雨":
        case "小雨转中雨":
        case "小雨":
        case "阵雨":
        case "阵雨转中雨":
        case "阵雨转小雨":
        case "中雨":
        case "小雨转多云":
        case "中雨转多云":
        case "大雨转暴雨":
          vm.weatherimg = require('assets/weather/rainy.png');
          break;
        case "小到中雨~雷阵雨":
        case "雷阵雨":
        case "雷阵雨~小到中雨":
        case "雷阵雨转阵雨":
        case "阵雨转雷阵雨":
        case "多云转雷阵雨":
        case "中雨转雷阵雨":
          vm.weatherimg = require('assets/weather/cloudrainy.png');
          // weatherimg = cloudrainy;
          break;
        case "晴转多云":
        case "晴转阴":
          vm.weatherimg = require('assets/weather/sunnycloud.png');
          // weatherimg = sunnycloud;
          break;
        default:
          vm.weatherimg = require('assets/weather/sunny.png');
          // weatherimg = sunny;
          break;
      }
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var b = new Date(Date.parse(value[0].Date.replace(/\-/g,"/")));  //計算該日期是星期幾
      //console.log(b.getDay())
      switch (days[b.getDay()]) {
        case "Wednesday":
          this.weekday = '星期三';
          break;
        case "Tuesday":
          this.weekday = '星期二';
          break;
        case "Monday":
          this.weekday = '星期一'
          break;
        case "Sunday":
          this.weekday = '星期日'
          break;
        case "Saturday":
          this.weekday = '星期六'
          break;
        case "Friday":
          this.weekday = '星期五'
          break;
        default: // "Thursday"
          this.weekday = '星期四';
      }
      this.aqi = "空气品质："+value[0].AQI;
      this.today = value[0].Date;
      this.todayweather = value[0].Weather + " / " +value[0].Low_Temp+"~"+value[0].High_Temp+"℃";
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/css/home.scss';
</style>
