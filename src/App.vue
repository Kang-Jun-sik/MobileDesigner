<template>
  <div id="app">
    <wrapper></wrapper>
  </div>
</template>

<script>
import servicetest from "@/service/servicetest";

export default {
  name: 'app',
  components: {},
  mounted() {
    servicetest.abc.test();
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/main";

#app {
  padding: 0;
}
</style>
