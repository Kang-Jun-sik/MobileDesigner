<template>
  <div :uid="uid" class="dews-mobile-datePicker dews-mobile-component date-picker-wrap focus">
    <label>{{ title }}</label>
    <span class="select-wrap">
      <span class="select-shape">
        <span class="select-input">
          {{ inputValue }}
        </span>
      </span>
      <span class="select-icon date-picker-icon"></span>
    </span>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-datepicker',
  data() {
    return {
      uid: '',
      title: 'DatePicker',
      disabled: false,
      readonly: false,
      required: false,
      value: '',
      inputValue: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-datepicker');
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-date-picker();
</style>
