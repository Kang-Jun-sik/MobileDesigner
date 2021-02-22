<template>
  <div class="layer-drawer" :class="drawerSize">
    <div class="overlay"></div>
    <div class="layer layer-bottom" :style="style">
      <div class="layer-moving-button">
        <span v-if="scrollEnabled" class="moving-button"></span>
        <span v-else class="fixed-button"></span>
      </div>
      <div class="layer-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'drawer-layout',
  data() {
    return {
      title: '',
      active: false,
      height: '',
      scrollEnabled: false,
      drawer: 'bottom',
      style: {
        height: '0px'
      },
    }
  },
  created() {},
  methods: {},
  computed: {
    ...mapGetters({
      drawerSize: "getDrawerSize",
    })
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include layer-drawer();
</style>
