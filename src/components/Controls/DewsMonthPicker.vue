<template>
  <div :uid="uid" class="dews-mobile-monthPicker dews-mobile-component datepicker-wrap focus"
       :class="{disabled: disabled ? 'disabled' : '',
          readonly: readonly ? 'readonly' : '',
          required: required ? 'required' : ''}">
    <label>{{ title }}</label>
    <span class="select-wrap">
      <span class="select-shape">
        <span class="select-input">
          {{ value }}
        </span>
      </span>
      <span class="select-icon datepicker-icon"></span>
    </span>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-monthpicker',
  data() {
    return {
      uid: '',
      parentUid: '',
      value: '',

      /* Properties */
      id: '',
      title: 'MonthPicker',
      disabled: false,
      readonly: true,
      required: false,
      min: '',
      max: '',
      spinner: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-monthpicker');
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
    },
    setValue(value) {
      this.value = value;
    },
    setMin(value) {
      this.min = value;
    },
    setMax(value) {
      this.max = value;
    },
    setDisabled(value) {
      this.disabled = JSON.parse(value);
    },
    setReadonly(value) {
      this.readonly = JSON.parse(value);
    },
    setRequired(value) {
      this.required = JSON.parse(value);
    },
    setSpinner(value) {
      this.spinner = JSON.parse(value);
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-datepicker();
</style>
