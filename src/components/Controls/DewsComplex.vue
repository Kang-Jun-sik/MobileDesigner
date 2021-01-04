<template>
  <div :uid="uid" class="dews-mobile-complex dews-complex">
    <label>{{ title }}</label>
    <ul class="complex-wrap">
      <li class="complex-line">
        <div :class="[componentClass, commonClass, widthType]">
          <dews-dropdownlist></dews-dropdownlist>
        </div>
        <div :class="[componentClass, commonClass, widthType]">
          <dews-button></dews-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DewsDropdownlist from "@/components/Controls/dropdownlist/DewsDropdownlist";
import DewsButton from "@/components/Controls/DewsButton";

export default {
  name: 'dews-complex',
  components: {DewsButton, DewsDropdownlist},
  data() {
    return {
      uid: '',
      title: 'Complex',
      liClass: 'complex-line',
      componentClass: 'components',
      commonClass: 'item',
      WIDTH_TYPE: {
        variable: 'variable',
        fix: 'fix',
        autofix: 'autofix'
      },
      widthType: 'variable',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-complex');
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-complex
//======================================
@include dews-complex();
</style>
