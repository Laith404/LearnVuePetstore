// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('./assets/app.css')
import { store } from './store/store';
import firebase from 'firebase/app';
import './firebase';
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
