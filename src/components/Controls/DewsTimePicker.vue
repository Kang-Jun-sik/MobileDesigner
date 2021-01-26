<template>
  <div :uid="uid" class="dews-mobile-timePicker dews-mobile-component time-picker-wrap">
    <label>{{ title }}</label>
    <span class="select-wrap">
      <span class="select-shape">
        <span class="select-input">{{ value }}</span>
      </span>
      <span class="select-icon time-picker-icon"></span>
    </span>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-timepicker',
  data() {
    return {
      uid: '',
      value: '',

      /* Properties */
      title: 'TimePicker',
      disabled: false,
      readonly: false,
      required: false,
      min: '',
      max: '',
      spinner: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-timepicker');
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-timepicker();
</style>
