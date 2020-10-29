import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from "./store"
import firebase from "firebase/app"
import { storageFirebase } from "./config"


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.config.productionTip = false

firebase.initializeApp({
  storageBucket: storageFirebase
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
