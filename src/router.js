import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/login.vue'
//import DayInfo from './views/DayInfo.vue'
import Home from 'components/Home.vue'
import Header from 'components/Header.vue'
import memberAnalysisDay from 'components/memberAnalysisDay.vue'
import memberAnalysisWeek from 'components/memberAnalysisWeek.vue'
import customerReportHourly from 'components/customerReportHourly.vue'
import customerReportDay from 'components/customerReportDay.vue'
import customerReportWeek from 'components/customerReportWeek.vue'
import customerReportMonth from 'components/customerReportMonth.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/jphmanage',
      components: {
        default: Home,
        nav: Header
      }
    },
    {
      path: '/home',
      alias: '/jphmanage',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/memberAnalysisDay',
      name: 'memberAnalysisDay',
      component: memberAnalysisDay
    },
    {
      path: '/memberAnalysisWeek',
      name: 'memberAnalysisWeek',
      component: memberAnalysisWeek
    },
    {
      path: '/customerReportHourly',
      name: 'customerReportHourly',
      component: customerReportHourly
    },
    {
      path: '/customerReportDay',
      name: 'customerReportDay',
      component: customerReportDay
    },
    {
      path: '/customerReportWeek',
      name: 'customerReportWeek',
      component: customerReportWeek
    },
    {
      path: '/customerReportMonth',
      name: 'customerReportMonth',
      component: customerReportMonth
    },
    { //讓不存在或錯誤的路由不會再是 404，自動導向回根路徑
      path: '*',
      redirect: '/jphmanage',
    }
  ]
})
