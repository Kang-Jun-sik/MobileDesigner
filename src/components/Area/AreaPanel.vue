<template>
  <div :uid="uid" class="dews-panel"></div>
</template>

<script>
  import ControlService from "@/service/ControlService";

  export default {
    name: 'dews-area-panel',
    data() {
      return {
        uid: '',
      }
    },
    created() {
      this.uid = ControlService.createUid('mobile-panel');
    },
    mounted() {
      this.$nextTick(() => {
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
