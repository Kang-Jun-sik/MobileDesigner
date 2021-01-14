<template>
  <div :uid="uid" class="dews-mobile-radioGroup dews-mobile-component dews-radio-group-wrap">
    <span class="radio-group-label">{{ title }}</span>
    <div class="radio-group" :class="align">
      <span class="group-item">
        <dews-radiobutton :controlChild="controlChild"></dews-radiobutton>
      </span>
      <span class="group-item">
        <dews-radiobutton :controlChild="controlChild"></dews-radiobutton>
      </span>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DewsRadiobutton from "@/components/Controls/DewsRadioButton";

export default {
  name: 'dews-radiobutton-group',
  components: {DewsRadiobutton},
  data() {
    return {
      uid: '',
      hasChildControl: true,
      controlChild: 'dews-radiobutton',
      groupItemClass: 'group-item',

      /* Properties */
      id: '',
      title: 'RadioButtonGroup',
      disabled: false,
      align: 'horizontal',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-radiobutton-group');
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

</style>
