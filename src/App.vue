<template>
  <div id="app">
    <mobile-wrapper></mobile-wrapper>
  </div>
</template>

<script>

import GlobalService from "@/service/GlobalService";

export default {
  name: 'app',
  components: {},
  mounted() {

  },
  created: function () {
    this.$nextTick(function () {
      GlobalService.openService();
    })
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/main";

#app {
  max-width: 1272px;
  padding: 0;
  overflow: auto;
}
</style>
