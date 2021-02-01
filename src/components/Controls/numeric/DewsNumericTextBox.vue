<template>
  <div :uid="uid" class="dews-mobile-numeric dews-mobile-component numeric-textbox-wrap" :class="{disabled: disabled ? 'disabled' : '', readonly: readonly ? 'readonly': ''}">
    <label v-if="title" for="numeric-box">{{ title }}</label>
    <label v-else class="undefined" for="numeric-box"></label>
    <div class="numeric-wrap" :data-uid="dataUid">
      <span class="prefix" v-if="prefix">{{ prefix }}</span>
      <span class="numeric view" :class="disabled ? 'disabled' : ''">
        <input id="numeric-box" class="numeric-box" type="text" :value="value"
         :disabled="disabled" :readonly="readonly" :placeholder="placeholder">
      </span>
      <span class="numeric mask" style="display: none;">
        <input type="text" :value="value">
      </span>
      <span class="suffix" v-if="suffix">{{ suffix }}</span>

      <numerictextbox-button v-show="showNumericButton" :isShow="showNumericButton"
        @increase="increaseNumeric" @decrease="decreaseNumeric" ref="numericChildButton"></numerictextbox-button>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DeleteService from "@/service/DeleteService";
import NumerictextboxButton from "@/components/Controls/numeric/NumericTextBoxButton";

export default {
  name: 'dews-numerictextbox',
  components: {NumerictextboxButton},
  data() {
    return {
      uid: '',
      dataUid: '',

      /* check child */
      hasChildControl: true,
      showNumericButton: true,

      /* Properties */
      id: '',
      title: 'NumericTextBox',
      value: 0,
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
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-numerictextbox');
    this.dataUid = CreateService.createUid('numerictextbox-childbutton');
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
    setPrefix(value) {
      this.prefix = value;
    },
    setSuffix(value) {
      this.suffix = value;
    },
    setFormat(value) {
      this.format = value;
    },
    setDecimals(value) {
      this.decimals = parseInt(value);
    },
    setMax(value) {
      this.max = parseInt(value);
    },
    setMin(value) {
      this.min = parseInt(value);
    },
    setStep(value) {
      this.step = parseInt(value);
    },
    setRestrict(value) {
      this.restrict = JSON.parse(value);
    },
    setMaxLength(value) {
      this.maxLength = value;
    },
    setRound(value) {
      this.round = value;
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

    setNumericButton(value) {
      this.showNumericButton = JSON.parse(value);
      this.showNumericButton ? CreateService.sendCreateMessage(this.$refs.numericChildButton.$el)
          : DeleteService.sendDeleteMessage(this.$refs.numericChildButton.$el);
    },
    increaseNumeric() {
      console.log('increase');
    },
    decreaseNumeric() {
      console.log('decrease');
    },
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

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.numeric-textbox-wrap .stepper {
  flex: 0 0 76px;
  margin-left: 8px;
  padding-left: 0;
}
</style>
