import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VueMaterial from 'vue-material'
import App from './components/App'
import router from './router'
import store from './store'
import 'vue-material/dist/vue-material.css'

sync(store, router)

Vue.use(VueMaterial)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
