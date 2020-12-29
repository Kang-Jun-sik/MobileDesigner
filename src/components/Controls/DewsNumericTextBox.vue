<template>
  <div class="dews-mobile-numeric numeric-textbox-wrap" :class="{disabled: disabled ? 'disabled' : '', readonly: readonly ? 'readonly': ''}">
    <label v-if="title" for="numeric-box">{{ title }}</label>
    <label v-else class="undefined" for="numeric-box"></label>
    <div class="numeric-wrap">
      <span v-if="prefix">{{ prefix }}</span>
      <span class="numeric view" :class="disabled ? 'disabled' : ''" @click="focusIn()">
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
export default {
  name: 'dews-numerictextbox',
  data() {
    return {
      uid: '',
      title: 'title',
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

  },
  methods: {
    focusIn() {},
    stepperDecrement() {},
    stepperIncrement() {}
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
* {
  @include reset();
}
.undefined {
  opacity: 0;
}
@include numeric-textbox-wrap();

</style>
