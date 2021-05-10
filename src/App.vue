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
  },
  created() {
    console.log('App Created...');
  },
  mounted() {
    console.log('APP Starting...');
  }
}
</script>

<style lang="scss">
  @import "src/assets/scss/main";

  #app {
    min-width: 1002px;
    //max-width: 1658px;
    min-height: 852px;
    overflow: auto;

    &.designer-style {
      overflow: visible;
      min-height: inherit;
    }
  }
</style>
