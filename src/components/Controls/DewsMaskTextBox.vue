<template>
  <div :uid="uid" class="dews-mobile-maskbox dews-mobile-component mask-textbox-wrap">
    <label>{{ title }}</label>
    <span class="view" :class="disabled ? 'disabled' : ''">
      <input type="text"
       :disabled="disabled" :readonly="readonly"
       :value="value" :placeholder="placeholder">
    </span>
    <span class="mask" style="display: none;">
      <input type="text">
    </span>
    <span class="input-state" :class="stateType">{{ stateMessage }}</span>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-masktextbox',
  data() {
    return {
      uid: '',
      parentUid: '',
      raw: '',

      /* Properties */
      id: '',
      title: 'MaskTextBox',
      value: '',
      placeholder: '',
      format: '',
      type: 'text',
      disabled: false,
      readonly: false,
      required: false,
      mask: '',
      prompt: '_',
      unmaskOnPost: true,
      stateType: '',
      stateMessage: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-masktextbox');
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
    setPlaceholder(value) {
      this.placeholder = value;
    },
    setFormat(value) {
      this.format = value;
    },
    setType(value) {
      this.type = value;
    },
    setMask(value) {
      this.mask = value;
    },
    setUnmaskOnPost(value) {
      this.unmaskOnPost = JSON.parse(value);
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
  },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-masktextbox();
</style>
