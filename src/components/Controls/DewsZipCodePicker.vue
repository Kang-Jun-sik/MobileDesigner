<template>
  <div :uid="uid" class="dews-mobile-zipcodePicker dews-mobile-component zipcodepicker-wrap" :class="{disabled: disabled ? 'disabled' : '',
          readonly: readonly ? 'readonly' : '',
          required: required ? 'required' : ''}">
    <label>{{ title }}</label>
    <span class="zipcode-input">
      <input type="number" readonly>
      <button><span>검색</span></button>
    </span>
    <span class="zipcode-reset">
        <button class="dews-mobile-button dews-mobile-component dews-button icon solid large ico-reset">
          <span class="button-icon"></span>
          <span class="button-text">{{ text }}</span>
        </button>
    </span>
    <span class="zipcode-address">
      <input type="text" readonly>
    </span>
    <span class="zipcode-detail">
      <input type="text" placeholder="상세주소">
    </span>

<!--    <span class="select-wrap"-->
<!--          :class="{disabled: disabled ? 'disabled' : '',-->
<!--          readonly: readonly ? 'readonly' : '',-->
<!--          required: required ? 'required' : ''}">-->
<!--      <span class="select-shape">-->
<!--        <span class="select-input">{{ value }}</span>-->
<!--      </span>-->
<!--      <span class="select-icon time-picker-icon"></span>-->
<!--    </span>-->
<!--    <span class="select-wrap"-->
<!--          :class="{disabled: disabled ? 'disabled' : '',-->
<!--          readonly: readonly ? 'readonly' : '',-->
<!--          required: required ? 'required' : ''}">-->
<!--      <span class="select-shape">-->
<!--        <span class="select-input">{{ value }}</span>-->
<!--      </span>-->
<!--    </span>-->
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-zipcodepicker',
  data() {
    return {
      uid: '',
      value: '',

      /* Properties */
      title: 'ZipCodePicker',
      disabled: false,
      readonly: false,
      required: false,
      min: '',
      max: '',
      spinner: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-zipcodepicker');
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
  },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-zipcodepicker();
@include dews-button();

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.zipcode-detail {
  input {
    @include input-wrap();
  }
}
</style>
