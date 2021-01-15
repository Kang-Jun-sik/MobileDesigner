<template>
  <div :uid="uid" class="dews-mobile-radioGroup dews-mobile-component dews-radio-group-wrap">
    <span class="radio-group-label">{{ title }}</span>
    <div class="radio-group" :class="align"
      data-type="group" :data-uid="dataUid" ref="radioButtonGroup">
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-radiobutton-group',
  data() {
    return {
      uid: '',
      dataUid: '',
      controlType: 'group',

      /* Properties */
      id: '',
      title: 'RadioButtonGroup',
      disabled: false,
      align: 'horizontal',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-radiobutton-group');
    this.dataUid = CreateService.createUid('radiobutton-group');
    store.commit('matchUid', {'uid': this.uid, 'dataUid': this.dataUid});
  },
  mounted() {
    window.drake.containers.push(this.$refs.radioButtonGroup);
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-radio-group
//======================================
.dews-radio-group-wrap {
  @include radio-group-wrap();
}

.dews-radio-group-wrap {
  .radio-group {
    border: 1px dotted #212121;
  }
}
</style>
