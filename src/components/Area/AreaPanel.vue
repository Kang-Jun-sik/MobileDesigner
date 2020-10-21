<template>
  <div :uid="uid" class="dews-panel">
    <area-item ref="areaItem"></area-item>
  </div>
</template>

<script>
  import AreaItem from "@/components/Area/AreaItem";
  import GlobalService from "@/service/GlobalService";
  export default {
    name: 'dews-area-panel',
    components: {AreaItem},
    data() {
      return {
        uid: ''
      }
    },
    mounted() {
      this.uid = GlobalService.createUid('mobile-panel');
    }
  }
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-area-panel
//======================================

//--------------------------------------
// 레이아웃 영역
//--------------------------------------
* {
  @include reset();
}
.dews-panel {
  position: relative;
  width: 100%;
}
@include media("(min-width: #{$media-size-tablet-l})") {
  .dews-panel {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
  }
}
</style>
