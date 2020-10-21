<template>
  <div :uid="uid" class="dews-item col-8">
    <dews-box ref="dewsBox"></dews-box>
  </div>
</template>

<script>
  import DewsBox from "@/components/Area/AreaBox";
  import GlobalService from "@/service/GlobalService";
  export default {
    name: 'area-item',
    components: {DewsBox},
    data() {
      return {
        uid: '',
      }
    },
    mounted() {
      this.uid = GlobalService.createUid('mobile-item');
    }
  }
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-area-item
//======================================
//--------------------------------------
// 레이아웃 영역
//--------------------------------------
* {
  @include reset();
}
.dews-item {
  @include reset();
  position: relative;
  display: block;
  min-height: 1px;
}
@include media("(min-width: #{$media-size-tablet-l})") {
  .dews-item {
    padding: 0 $area-item-space;
    flex: 1 0 100%;
    min-width: $area-item-size-minimum-width;
  }
  .dews-item:first-of-type {
    padding-left: 0;
  }
  .dews-item:last-of-type {
    padding-right: 0;
  }
  @for $i from $area-item-col-size-start through $area-item-col-size-end {
    .dews-item.col-#{$i} {
      @include item-col-size($i);
    }
  }
}

</style>
