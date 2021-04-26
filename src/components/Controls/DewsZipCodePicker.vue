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
        <button class="dews-mobile-button dews-button icon solid large ico-reset">
          <span class="button-icon"></span>
          <span class="button-text">{{ text }}</span>
        </button>
    </span>
    <span class="zipcode-address" v-if="hasAddress">
      <input type="text" readonly>
    </span>
    <span class="zipcode-detail" v-if="hasDetailAddress">
      <input type="text" readonly placeholder="상세주소">
    </span>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import {mapGetters} from "vuex";

export default {
  name: 'dews-zipcodepicker',
  data() {
    return {
      uid: '',
      parentUid: '',
      value: '',

      /* Properties */
      id: '',
      title: 'ZipCodePicker',
      disabled: false,
      readonly: false,
      required: false,
      type: 'street',
      detailAddress: '',
      zipCode: '',
      address: '',
      detail: false
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-zipcodepicker');
    this.zipCode = '';
    this.address = '';
    this.detailAddress = '';
  },
  computed: {
    hasAddress() {
      return this.address ? true : false;
    },
    hasDetailAddress() {
      return this.detailAddress ? true : false;
    },
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
    },
    setType(value) {
      this.type = value;
    },
    setDetailAddress(value) {
      this.detailAddress = value;
    },
    setZipCode(value) {
      this.zipCode = value;
    },
    setAddress(value) {
      this.address = value;
    },
    setDetail(value) {
      this.detail = JSON.parse(value);
    },
    setDisabled(value) {
      this.disabled = JSON.parse(value);
    },
    setReadonly(value) {
      this.readonly = JSON.parse(value);
    },
    setRequired(value) {
      this.required = JSON.parse(value);
    }
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
