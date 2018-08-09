import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DayInfo from './views/DayInfo.vue'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: HelloWorld,
        nav: Header
      }
    },
    {
      path: '/login',
      name: 'home',
      component: Home
    },
    {
      path: '/dayinfo',
      name: 'DayInfo',
      component: DayInfo
    },
    { //讓不存在或錯誤的路由不會再是 404，自動導向回根路徑
      path: '*',
      redirect: '/',
    }
  ]
})
