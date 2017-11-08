<template>
  <div class="page">
    <md-whiteframe>
      <md-toolbar>
        <h1 class="md-title">My Vue Starter</h1>
      </md-toolbar>
    </md-whiteframe>
    <div class="card-layout">
      <counter></counter>
      <vue-pack></vue-pack>
    </div>
  </div>
</template>

<script>
import Counter from 'components/Counter'
import VuePack from 'components/VuePack'

export default {
  components: {
    Counter,
    VuePack
  }
}
</script>

<style>
.card-layout {
  display: flex;
  .md-card {
    margin: 8px;
  }
}
</style>
