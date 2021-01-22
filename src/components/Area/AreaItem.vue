<template>
  <div :uid="uid" class="dews-mobile-item dews-mobile-component dews-item" :class="col" ref="dewsItem"></div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'area-item',
  data() {
    return {
      uid: '',

      /* Properties */
      id: '',
      col: 'col-fd-6',
    }
  },
  created() {
    // item 구분을 위한 guid 추가
    this.uid = CreateService.createUid('area-item');
  },
  mounted() {
    window.drake.containers.push(this.$refs.dewsItem);
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

@include dews-area-item();


//--------------------------------------
// FD 추가 영역
//--------------------------------------
.dews-item {
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-height: 1px;
  background-clip: content-box;

  //item fd design
  padding: 12px 10px 0;
  margin-bottom: 12px;
  min-height: 40px;
  border: 1px dotted #212121;
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
</style>
