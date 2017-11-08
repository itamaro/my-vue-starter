<template>
  <div class="counter-wrapper">
    <md-card md-with-hover>
      <div class="counter">
        {{ count }}
      </div>
      <md-ink-ripple></md-ink-ripple>
      <md-card-actions>
        <md-button class="md-icon-button md-raised" @click="$store.commit('INCREMENT')"><md-icon>add</md-icon></md-button>
        <md-button class="md-icon-button md-raised" @click="$store.commit('DECREMENT')"><md-icon>remove</md-icon></md-button>
        <md-button class="md-icon-button md-raised" @click="$store.dispatch('incrementAsync')"><md-icon>forward</md-icon></md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>
.counter {
  margin: 10px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  user-select: none;
}
</style>
