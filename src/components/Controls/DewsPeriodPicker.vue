<template>
  <div :uid="uid" class="dews-mobile-periodPicker dews-mobile-component period-picker-wrap focus">
    <label>{{ title }}</label>
    <span class="select-wrap">
      <span class="select-shape">
        <span class="select-input">
          {{ inputValue }}
        </span>
      </span>
      <span class="select-icon period-picker-icon"></span>
    </span>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-periodpicker',
  data() {
    return {
      uid: '',
      title: 'PeriodPicker',
      disabled: false,
      readonly: false,
      value: '',
      inputValue: '',
      visible: false,
      hdDisabled: false,
      min: '',
      max: '',
      end: '',
      start: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-periodpicker');
  },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-period-picker();
</style>
