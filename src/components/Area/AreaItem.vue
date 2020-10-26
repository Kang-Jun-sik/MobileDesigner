<template>
  <div :uid="uid" class="dews-item dews-mobile-component" :class="col"></div>
</template>

<script>
  import GlobalService from "@/service/GlobalService";

  export default {
    name: 'area-item',
    props: ['colNum'],
    data() {
      return {
        uid: '',
        col: this.colNum,
      }
    },
    created() {
      function guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
        }
        return 'mobile-item' + '-' + s4() + s4();
      }

      // this.uid = GlobalService.createUid('mobile-item');
      this.uid = guid();
    },
    mounted() {

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
  box-sizing: content-box;
  min-height: 1px;
  background-clip: content-box;
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
    .dews-item.col-fd-#{$i} {
      @include item-col-size($i);
    }
  }
}

</style>
