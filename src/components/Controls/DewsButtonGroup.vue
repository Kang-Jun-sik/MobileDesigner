<template>
  <div :uid="uid" class="dews-mobile-buttonGroup dews-mobile-component dews-button-group">
    <ul class="button-group-wrap">
      <li class="button-group" data-type="button-group" :data-uid="dataUid" ref="buttonGroup">
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store/index";
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-button-group',
  data() {
    return {
      uid: '',
      dataUid: '',
      controlType: 'button-group',

      /* Properties */
      id: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-button-group');
    this.dataUid = CreateService.createUid('button-group');
    store.commit('matchUid', {'uid': this.uid, 'dataUid': this.dataUid});
  },
  mounted() {
    window.drake.containers.push(this.$refs.buttonGroup);
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-button-group
//======================================

@include dews-button-group();

.dews-button-group {
  min-height: 38px;
  border: 1px dotted #212121;

  .button-group {
    min-height: 38px;
    padding: 0;
  }
}
</style>
