<template>
  <div class="home">
    <v-layout>
      <v-flex xs12 sm5 offset-sm3>
        <v-card>
          <v-layout>
            <v-flex xs5>
              <v-card-media
                :src="weatherimg"
                height="25vh"
                contain
              ></v-card-media>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <h2><span>{{today}}</span></h2>
                  <h3><span>{{weekday}}</span></h3>
                  <h3><span>{{todayweather}}</span></h3>
                  <h3><span>{{aqi}}</span></h3>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      weatherimg: require('assets/weather/sunnycloud.png'),
      aqi: '',
      today: 'Loading...',
      weekday: 'Loading...',
      todayweather: 'Loading...',
    }
  },
  methods: {
    gettodayweather: () => {
      var day = new Date().getFullYear()+"-"+less10(new Date().getMonth()+1)+"-"+less10(new Date().getDate());
      function less10(num) {
        if(num < 10) {
          return "0"+num;
        } else return num;
      }
      return axios.get("http://edudata.foxconn.com/ConvenienceStore/weatherToday?date="+day)
        .then(response => response.data)
    },
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
      switch (days[new Date().getDay()]) {
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
.home {
  margin-top: 0;
}
h2 {
  font-size: 30px;
  text-align: center;
}
h3 {
  font-size: 25px;
  text-align: center;
  margin: 0px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
