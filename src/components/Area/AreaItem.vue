<template>
  <div :uid="uid" class="dews-mobile-areaItem dews-item dews-mobile-component" :class="col" ref="dewsItem"></div>
</template>

<script>
export default {
  name: 'area-item',
  data() {
    return {
      uid: '',
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
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
      }

      return 'mobile-item' + '-' + s4() + s4();
    }
    // item 구분을 위한 guid 추가
    this.uid = guid();
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

  //item design
  padding: 10px;
  min-height: 30px;
  border: 1px dotted blue;
}

.designer-tabletL {
  .dews-item {
    margin: 0 $area-item-space;
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
