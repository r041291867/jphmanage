//import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ECharts from 'vue-echarts'
import 'echarts-wordcloud'

Vue.config.productionTip = false

Vue.use(Vuetify, {
})
Vue.use(VueRouter)
Vue.use(MintUI)
Vue.component('chart', ECharts)

router.beforeEach((to, from, next)=>{
  const isLogin = localStorage.getItem('token') == 'ImLogin' ;
  if( isLogin ){
    next();
  } else {
    if( to.path !== '/login')
      next('/login');
    else
      next();
  }
});

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
