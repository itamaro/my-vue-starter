import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import Firebase from 'firebase'
import VueMaterial from 'vue-material'
import App from './components/App'
import router from './router'
import store from './store'
import 'vue-material/dist/vue-material.css'

let config = {
  apiKey: 'AIzaSyDghyGJtYmOY93Iw4cTaM9R2ydPNX2r66U',
  authDomain: 'counter-demo-w00t.firebaseapp.com',
  databaseURL: 'https://counter-demo-w00t.firebaseio.com',
  projectId: 'counter-demo-w00t',
  storageBucket: '',
  messagingSenderId: '92757085039'
}
let firebaseApp = Firebase.initializeApp(config)
let firebaseDB = firebaseApp.database()
let counterRef = firebaseDB.ref('public/count')

sync(store, router)

Vue.use(VueMaterial)

const app = new Vue({
  router,
  store,
  ...App,
  created() {
    this.$store.dispatch('setCounterRef', counterRef)
  }
})

export { app, router, store }
