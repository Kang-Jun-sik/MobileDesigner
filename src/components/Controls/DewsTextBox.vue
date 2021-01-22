<template>
  <div :uid="uid" class="dews-mobile-textbox dews-mobile-component textbox-wrap outside">
    <label :for="id">{{ title }}</label>
    <input v-if="!multi" :id="id" @change="onChange($event)"
     type="text" :value="value" :placeholder="placeholder"
     :required="required" :disabled="disabled" :readonly="readonly" ref="textBox">

    <textarea v-else :id="id" @change="onChange($event)"
      type="text" :value="value" :placeholder="placeholder"
      :required="required" :disabled="disabled" :readonly="readonly" ref="textArea">
    </textarea>

  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-textbox',
  data() {
    return {
      uid: '',

      /* Properties */
      id: '',
      title: 'TextBox',
      value: '',
      placeholder: '',
      multi: false,
      disabled: false,
      readonly: false,
      required: false,
      multiHeight: 50,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-textbox');
  },
  mounted() {
  },
  methods: {
    onChange(e) {
      e.stopPropagation();
      this.value = e.target.value;
    },
    setRequired() {
      this.required = !this.required;
    },
    setDisabled() {
      this.disabled = !this.disabled;
    },
    setReadonly() {
      this.readonly = !this.readonly;
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-textbox();
</style>
