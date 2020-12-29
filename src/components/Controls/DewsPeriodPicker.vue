<template>
  <li>
    <div class="dews-mobile-periodPicker period-picker-wrap focus">
      <label>{{ title }}</label>
      <span class="select-wrap">
      <span class="select-shape">
        <span class="select-input">
          {{ inputValue }}
        </span>
      </span>
      <span class="select-icon period-picker-icon"></span>
    </span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'dews-periodpicker',
  data() {
    return {
      uid: '',
      title: '',
      disabled: false,
      readonly: false,
      value: '',
      inputValue: '',
      visible: false,
      hdDisabled: false,
      min: '',
      max: '',
      end: '',
      start: '',
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
* {
  @include reset();
}
@include dews-period-picker();
</style>
