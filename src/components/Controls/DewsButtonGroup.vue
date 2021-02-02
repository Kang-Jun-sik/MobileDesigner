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
    store.commit('MATCH_UID', { 'uid': this.uid, 'dataUid': this.dataUid });
  },
  mounted() {
    window.drake.containers.push(this.$refs.buttonGroup);
  },
  methods: {
    setID(value) {
      this.id = value;
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-button-group();

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.dews-button-group {
  height: 100%;
  min-height: 24px;
  border: 1px dotted #212121;

  .button-group {
    min-height: 24px;
    padding: 8px 0;
  }
}
</style>
