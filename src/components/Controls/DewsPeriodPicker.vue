<template>
  <div :uid="uid" class="dews-mobile-periodPicker dews-mobile-component period-picker-wrap focus outside">
    <label>{{ title }}</label>
    <span class="select-wrap">
      <span class="select-shape">
        <span class="select-input">
          {{ value }}
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
      value: '',

      /* Properties */
      id: '',
      title: 'PeriodPicker',
      disabled: false,
      readonly: false,
      required: false,
      min: '',
      max: '',
      holidaysVisible: false,
      holidaysDisabled: false,
      start: '',
      end: ''
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
@include dews-periodpicker();
</style>
