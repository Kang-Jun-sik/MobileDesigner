<template>
  <div :uid="uid" class="dews-mobile-periodPicker dews-mobile-component periodpicker-wrap focus">
    <label>{{ title }}</label>
    <span class="select-wrap"
          :class="{disabled: disabled ? 'disabled' : '',
          readonly: readonly ? 'readonly' : '',
          required: required ? 'required' : ''}">
      <span class="select-shape">
        <span class="select-input">
          {{ value }}
        </span>
      </span>
      <span class="select-icon periodpicker-icon"></span>
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
    setHolidaysVisible(value) {
      this.holidaysVisible = JSON.parse(value);
    },
    setHolidaysDisabled(value) {
      this.holidaysDisabled = JSON.parse(value);
    },
    setStart(value) {
      this.start = value;
    },
    setEnd(value) {
      this.end = value;
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@import 'src/assets/scss/_mixins';
@include dews-periodpicker();

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.periodpicker-wrap {
  @include dews-designer-picker-style();
}
</style>
