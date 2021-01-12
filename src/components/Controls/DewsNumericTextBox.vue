<template>
  <div :uid="uid" class="dews-mobile-numeric dews-mobile-component numeric-textbox-wrap" :class="{disabled: disabled ? 'disabled' : '', readonly: readonly ? 'readonly': ''}">
    <label v-if="title" for="numeric-box">{{ title }}</label>
    <label v-else class="undefined" for="numeric-box"></label>
    <div class="numeric-wrap">
      <span v-if="prefix">{{ prefix }}</span>
      <span class="numeric view" :class="disabled ? 'disabled' : ''">
        <input id="numeric-box" class="numeric-box" type="text" :value="value"
         :disabled="disabled" :readonly="readonly" :placeholder="placeholder">
      </span>
      <span class="numeric mask" style="display: none;">
        <input type="text" :value="value" :step="step" :min="min" :max="max">
      </span>
      <span v-if="suffix">{{ suffix }}</span>
      <span class="stepper">
        <button class="button-stepper minus" @click="stepperDecrement()"></button>
        <button class="button-stepper plus" @click="stepperIncrement()"></button>
      </span>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-numerictextbox',
  data() {
    return {
      uid: '',
      title: 'NumericTextBox',
      placeholder: '',
      disabled: false,
      readonly: false,
      required: false,
      value: '',
      prefix: '',
      suffix: '',
      format: '#,##0.00',
      decimals: null,
      max: null,
      min: null,
      restrict: false,
      maxLength: null,
      round: 'round',
      step: 1,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-numerictextbox');
  },
  methods: {
    stepperDecrement() {},
    stepperIncrement() {}
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
.undefined {
  opacity: 0;
}
@include numeric-textbox-wrap();

</style>
