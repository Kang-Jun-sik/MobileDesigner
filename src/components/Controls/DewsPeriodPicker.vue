<template>
  <div class="period-picker-wrap focus">
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

</style>
