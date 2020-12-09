<template>
  <div class="numeric-textbox-wrap" :class="{disabled: disabled ? 'disabled' : '', readonly: readonly ? 'readonly': ''}">

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
      round: 'round'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
