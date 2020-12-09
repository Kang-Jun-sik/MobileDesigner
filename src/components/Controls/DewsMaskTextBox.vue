<template>
  <div class="mask-textbox-wrap">
    <label>{{ title }}</label>
    <span @click="onClick()" class="view" :class="disabled ? 'disabled' : ''">
      <input type="text" @focus="onClick()"
             :disabled="disabled" :readonly="readonly"
             :value="value" :placeholder="placeholder">
    </span>
    <span class="mask" style="display: none;">
      <input type="text" @focus="onFocus()" @blur="onBlur()">
    </span>
    <span class="input-state" :class="stateType">{{ stateMessage }}</span>
  </div>
</template>

<script>
export default {
  name: 'dews-maskbox',
  data() {
    return {
      title: 'title',
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
  },
  methods: {
    onClick() {

    },
    onFocus() {

    },
    onChange() {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
