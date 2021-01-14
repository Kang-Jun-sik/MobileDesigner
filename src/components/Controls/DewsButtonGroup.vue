<template>
  <div :uid="uid" class="dews-mobile-buttonGroup dews-mobile-component dews-button-group">
    <ul class="button-group-wrap">
      <li>
        <dews-button :isGroup="true" :controlChild="controlChild"></dews-button>
        <dews-button :isGroup="true" :controlChild="controlChild"></dews-button>
      </li>
    </ul>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DewsButton from "@/components/Controls/DewsButton";

export default {
  name: 'dews-button-group',
  components: {DewsButton},
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
</style>
