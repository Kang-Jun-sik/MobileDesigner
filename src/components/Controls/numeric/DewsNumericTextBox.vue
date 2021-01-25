<template>
  <div :uid="uid" class="dews-mobile-numeric dews-mobile-component numeric-textbox-wrap outside" :class="{disabled: disabled ? 'disabled' : '', readonly: readonly ? 'readonly': ''}">
    <label v-if="title" for="numeric-box">{{ title }}</label>
    <label v-else class="undefined" for="numeric-box"></label>
    <div class="numeric-wrap">
      <span class="prefix" v-if="prefix">{{ prefix }}</span>
      <span class="numeric view" :class="disabled ? 'disabled' : ''">
        <input id="numeric-box" class="numeric-box" type="text" :value="value"
         :disabled="disabled" :readonly="readonly" :placeholder="placeholder">
      </span>
      <span class="numeric mask" style="display: none;">
        <input type="text" :value="value">
      </span>
      <span class="suffix" v-if="suffix">{{ suffix }}</span>

      <numerictextbox-button v-if="showNumericButton"
        :step="step" :min="min" :max="max" ref="numericChildButton"></numerictextbox-button>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import NumerictextboxButton from "@/components/Controls/numeric/NumericTextBoxButton";

export default {
  name: 'dews-numerictextbox',
  components: {NumerictextboxButton},
  data() {
    return {
      uid: '',
      value: '',

      /* check child */
      hasChildControl: true,
      showNumericButton: true,

      /* Properties */
      id: '',
      title: 'NumericTextBox',
      placeholder: '',
      disabled: false,
      readonly: false,
      required: false,
      prefix: '$',
      suffix: '백만',
      format: '#,##0.00',
      decimals: 0,
      restrict: false,
      maxLength: '',
      round: 'round',

      step: 1,
      min: 0,
      max: 0,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-numerictextbox');
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../../../node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import '../../../../node_modules/@dews/dews-mobile-style/scss/mixins/mixins';
.undefined {
  opacity: 0;
}
@include dews-numerictextbox();
</style>
