import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseAction, firebaseMutations } from 'vuexfire'

Vue.use(Vuex)

const strict = true;

const state = {
  count: {"value": null}
}

const mutations = {
  INCREMENT (state) {
    this.counterRef.child("value").set(state.count.value + 1)
  },
  DECREMENT (state) {
    this.counterRef.child("value").set(state.count.value - 1)
  },
  ...firebaseMutations
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  },
  setCounterRef: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef('count', ref)
    store.counterRef = ref
  }),
}

const getters = {
  count: state => state.count,
}

const store = new Vuex.Store({
  strict,
  state,
  mutations,
  getters,
  actions,
})

export default store
