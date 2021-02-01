<template>
  <span :uid="uid" class="dews-mobile-radiobutton dews-mobile-component dews-radio-wrap">
    <span class="radio-control">
      <input type="radio" :checked="checked" :data-checked="checked" :disabled="disabled">
      <span class="radio-shape" @click="clickHandler($event)"></span>
    </span>
    <label class="radio-label">{{ title }}</label>
  </span>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-radiobutton',
  data() {
    return {
      uid: '',

      /* Properties */
      id: '',
      title: '라벨',
      disabled: false,
      readonly: false,
      checked: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-radiobutton');
  },
  mounted() {
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
    },
    setDisabled(value) {
      this.disabled = JSON.parse(value);
    },
    setReadonly(value) {
      this.readonly = JSON.parse(value);
    },
    setChecked(value) {
      this.checked = JSON.parse(value);
    },
    clickHandler(e) {
      if (this.disabled) return;

      this.checked = !this.checked;
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-radio();
</style>
