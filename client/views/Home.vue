<template>
  <div class="page">
    <md-whiteframe>
      <md-toolbar>
        <h1 class="md-title">My Vue Starter</h1>
        <md-button class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>
      </md-toolbar>
    </md-whiteframe>
    <div class="card-layout">
      <div class="column">
        <counter></counter>
      </div>
      <div class="column">
        <md-card class="md-primary" md-theme="orange" md-with-hover>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">VuePack</div>
              <div class="md-subhead">Getting Started</div>
            </md-card-header-text>
          </md-card-header>
          <md-card-content>To get started, edit files in <code>./client</code> and save.</md-card-content>
          <md-ink-ripple></md-ink-ripple>
          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from 'components/Counter'

export default {
  components: {
    Counter
  }
}
</script>

<style>
.md-title {
  flex: 1;
}

.card-layout {
  margin: 16px 15%;
  display: flex;

  .column {
    flex: 1;

    + .column {
      margin-left: 8px;
    }
  }

  .md-card + .md-card {
    margin-top: 8px;
  }
}
</style>
