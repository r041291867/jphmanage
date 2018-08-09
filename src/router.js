import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/login.vue'
//import DayInfo from './views/DayInfo.vue'
import Home from './components/Home.vue'
import Header from './components/Header.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    { //讓不存在或錯誤的路由不會再是 404，自動導向回根路徑
      path: '*',
      redirect: '/',
    }
  ]
})
