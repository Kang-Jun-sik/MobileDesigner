<template>
  <div :uid="uid" class="dews-mobile-checkboxGroup dews-mobile-component dews-checkbox-group-wrap">
    <span class="checkbox-group-label">{{ title }}</span>
    <div class="checkbox-group" :class="align">
      <span class="group-item">
        <dews-checkbox></dews-checkbox>
      </span>
      <span class="group-item">
        <dews-checkbox></dews-checkbox>
      </span>
      <span class="group-item">
        <dews-checkbox></dews-checkbox>
      </span>
    </div>
  </div>
</template>

<script>
import DewsCheckbox from "@/components/Controls/DewsCheckBox";
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-checkbox-group',
  components: {DewsCheckbox},
  data() {
    return {
      uid: '',
      groupItemClass: 'group-item',

      /* Properties */
      id: '',
      title: 'CheckBoxGroup',
      align: 'horizontal',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-checkbox-group');
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-checkbox-group
//======================================
.dews-checkbox-group-wrap {
  @include checkbox-group-wrap();
}
</style>
