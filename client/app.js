import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import Firebase from 'firebase'
import VueMaterial from 'vue-material'
import App from './components/App'
import router from './router'
import store from './store'
import 'vue-material/dist/vue-material.css'

let config = {
  apiKey: 'AIzaSyDOthcx9EAS4Hqy7YI0_vrNV923aM8x41w',
  authDomain: 'weight-track-644d5.firebaseapp.com',
  databaseURL: 'https://weight-track-644d5.firebaseio.com',
  projectId: 'weight-track-644d5',
  storageBucket: 'weight-track-644d5.appspot.com',
  messagingSenderId: '102598797725'
}
let firebaseApp = Firebase.initializeApp(config)
let firebaseDB = firebaseApp.database()
let counterRef = firebaseDB.ref('count')

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
