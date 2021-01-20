<template>
  <div id="app" :class="mode">
    <mobile-wrapper></mobile-wrapper>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      mode: 'getWorkMode'
    })
  }
}
</script>

<style lang="scss">
  @import "src/assets/scss/main";

  #app {
    min-width: 1002px;
    max-width: 1360px;
    //max-width: 1272px;
    min-height: 852px;
    //padding: 0;
    overflow: auto;

    &.designer-style {
      overflow: visible;
      min-height: inherit;
      min-width: inherit;
      max-width: inherit;
    }
  }
</style>
