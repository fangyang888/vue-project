// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routers from './routers'
import service from './services.js'
import VueScroller from 'vue-scroller'
import store from './store/index'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(service)
Vue.use(VueScroller)
FastClick.attach(document.body)

Vue.config.productionTip = false



const router = new VueRouter({
  mode: 'history',
  routes: routers
})
router.beforeEach((to, from, next) => {

  document.title = to.meta.title;
  next();

})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
