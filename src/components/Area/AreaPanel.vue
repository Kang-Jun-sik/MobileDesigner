<template>
  <div :uid="uid" class="dews-panel">
    <area-item :colNum="cols.col6"></area-item>
    <area-item :colNum="cols.col6"></area-item>
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
      this.uid = GlobalService.createUid('mobile-panel');
    },
    mounted() {
      this.$nextTick(() => {
        console.log('mounted')
      })
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
.designer-tabletL {
  .dews-panel {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
  }
}
</style>
