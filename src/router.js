import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/login.vue'
//import DayInfo from './views/DayInfo.vue'
import Home from 'components/Home.vue'
import Header from 'components/Header.vue'
import memberAnalysisDay from 'components/memberAnalysisDay.vue'
import memberAnalysisWeek from 'components/memberAnalysisWeek.vue'
import customerReportHourly from 'components/customerReport/customerReportHourly.vue'
import customerReportDay from 'components/customerReport/customerReportDay.vue'
import customerReportWeek from 'components/customerReport/customerReportWeek.vue'
import customerReportMonth from 'components/customerReport/customerReportMonth.vue'
import search from 'components/Search.vue'

Vue.use(Router)

export default new Router({
  //mode: 'history',   //需要後端支持
  routes: [
    {
      path: '/',

      components: {
        default: Home,
        nav: Header
      }
    },
    {
      path: '/home',
      alias: '/jphmanage',
      name: '首页',
      component: Home
    },
    {
      path: '/login',
      name: '登陆',
      component: Login
    },
    {
      path: '/search',
      name: '搜索',
      component: search
    },
    {
      path: '/memberAnalysisDay',
      name: '会员分析日报表',
      component: memberAnalysisDay
    },
    {
      path: '/memberAnalysisWeek',
      name: '会员分析周报表',
      component: memberAnalysisWeek
    },
    {
      path: '/customerReportHourly',
      name: '客流时报表',
      component: customerReportHourly
    },
    {
      path: '/customerReportDay',
      name: '客流日报表',
      component: customerReportDay
    },
    {
      path: '/customerReportWeek',
      name: '客流周报表',
      component: customerReportWeek
    },
    {
      path: '/customerReportMonth',
      name: '客流月报表',
      component: customerReportMonth
    },
    { //讓不存在或錯誤的路由不會再是 404，自動導向回根路徑
      path: '*',
      redirect: '/jphmanage',
    }
  ]
})
