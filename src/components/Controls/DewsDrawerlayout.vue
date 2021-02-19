<template>
  <div class="layer-drawer">
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
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
