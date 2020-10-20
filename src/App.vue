<template>
  <div id="app">
    <mobile-wrapper></mobile-wrapper>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  @import "src/assets/scss/main";

  #app {
    min-width: 1002px;
    max-width: 1272px;
    min-height: 852px;
    padding: 0;
    overflow: auto;
  }
</style>
