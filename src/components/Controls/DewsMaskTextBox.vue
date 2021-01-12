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
  name: 'dews-maskbox',
  data() {
    return {
      uid: '',
      title: 'MaskTextBox',
      placeholder: '',
      format: '',
      type: 'text',
      disabled: false,
      readonly: false,
      required: false,
      mask: '',
      prompt: '_',
      unmaskOnPost: true,
      value: '',
      raw: '',
      stateType: '',
      stateMessage: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-maskbox');
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-mask-textbox();

</style>
