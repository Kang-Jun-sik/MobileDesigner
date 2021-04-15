<template>
  <div :uid="uid" class="dews-mobile-containerButton dews-mobile-component">
    <div v-show="containerType === 'form' || containerType === 'list'" class="option-custom-button">
      <ul class="custom-button-field" :data-uid="dataUid" ref="customButton" data-type="container-button">
        <slot></slot>
      </ul>
    </div>
    <div class="option-convenience-button">
      <ul>
        <li class="data-capture"><button class="capture"><span> Data Capture</span></button></li>
        <li class="data-set"><button class="set"><span>Data Set</span></button></li>
        <li class="data-reset"><button class="reset"><span>Data Reset</span></button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import store from "@/store";

export default {
  name: 'container-button',
  props: ['containerType'],
  data() {
    return {
      uid: '',
      dataUid: '',
      parentUid: '',
      /* check child */
      controlChild: 'container-button',
      controlType: 'common-control',

      /* Properties */
      id: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('container-button');
    this.dataUid = CreateService.createUid('custom-button');
    store.commit('MATCH_UID', { 'uid': this.uid, 'dataUid': this.dataUid });
  },
  mounted() {
    window.drake.containers.push(this.$refs.customButton);
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

@include dews-container-option-custom-button();
@include dews-container-option-convenience-button();

.option-custom-button {
  padding: 14px 14px;
}
.custom-button-field {
  min-height: 20px;
}
</style>
