<template>
  <div :uid="uid" class="dews-mobile-panel dews-mobile-component dews-panel dews-panel-hide outside"></div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-area-panel',
  data() {
    return {
      uid: '',

      /* Properties */
      id: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-area-panel');
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-area-panel();


//--------------------------------------
// FD 추가 영역
//--------------------------------------
.dews-panel {
  position: relative;
  width: 100%;

  .dews-panel-show {
    padding: 12px 10px 0;
    border: 1px dotted #193a75;
    margin-bottom: 12px;
  }
}
.designer-tabletL {
  .dews-panel {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
  }
}
</style>
