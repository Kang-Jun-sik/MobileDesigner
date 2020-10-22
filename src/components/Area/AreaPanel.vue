<template>
  <div :uid="uid" class="dews-panel">
    <area-item :colNum="cols.col6" :areaStyle="areaStyle.dewsBox"></area-item>
    <area-item :colNum="cols.col6" :areaStyle="areaStyle.dewsTabs"></area-item>
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
        uid: '',
        cols: {
          col4: 'col-4',
          col5: 'col-5',
          col6: 'col-6',
          col7: 'col-7',
          col8: 'col-8',
          col12: 'col-12'
        },
        areaStyle: {
          dewsBox: 'dews-box',
          dewsTabs: 'dews-tabs'
        }
      }
    },
    created() {
      this.uid = GlobalService.createUid('mobile-panel');
    },
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
