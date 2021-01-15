<template>
  <div :uid="uid" class="dews-mobile-buttonGroup dews-mobile-component dews-button-group">
    <ul class="button-group-wrap">
      <li>
      </li>
    </ul>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-button-group',
  data() {
    return {
      uid: '',
      hasChildControl: true,
      controlChild: 'dews-button',

      /* Properties */
      id: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-button-group');
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
  min-height: 24px;
  border: 1px dotted #212121;
}
</style>
