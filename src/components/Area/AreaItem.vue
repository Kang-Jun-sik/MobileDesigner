<template>
  <div :uid="uid" class="dews-mobile-areaItem dews-mobile-component dews-item" :class="col" ref="dewsItem"></div>
</template>

<script>
import ControlService from "@/service/ControlService";

export default {
  name: 'area-item',
  data() {
    return {
      uid: '',
      handles: 'e',
      col: 'col-fd-6',
      cols: {
        col4: 'col-fd-4',
        col5: 'col-fd-5',
        col6: 'col-fd-6',
        col7: 'col-fd-7',
        col8: 'col-fd-8',
        col12: 'col-fd-12'
      },
    }
  },
  created() {
    // item 구분을 위한 guid 추가
    this.uid = ControlService.createUid('mobile-item');
  },
  mounted() {
    window.drake.containers.push(this.$refs.dewsItem);
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
  box-sizing: border-box;
  width: 100%;
  min-height: 1px;
  background-clip: content-box;
}

.designer-tabletL {
  .dews-item {
    margin: 0 $area-item-space 12px;
    flex: 1 0 100%;
    min-width: $area-item-size-minimum-width;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  @for $i from $area-item-col-size-start through $area-item-col-size-end {
    .dews-item.col-fd-#{$i} {
      @include item-col-size($i);
    }
  }
}

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.dews-item {
  //item design
  padding: 10px 10px 0;
  margin-bottom: 12px;
  min-height: 40px;
  border: 1px dotted #343a40;
}
</style>
