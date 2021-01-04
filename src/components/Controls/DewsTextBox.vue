<template>
  <div :uid="uid" class="dews-mobile-textbox dews-mobile-component textbox-wrap">
    <label :for="id">{{ title }}</label>
    <input :id="id" @click="onClick($event)" @change="onChange($event)"
     type="text" :value="value" :placeholder="placeholder"
     :required="required" :disabled="disabled" :readonly="readonly" ref="textBox">
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-textbox',
  data() {
    return {
      id: '',
      uid: '',
      title: 'TextBox',
      value: '',
      placeholder: '',
      required: false,
      disabled: false,
      readonly: false,
      multi: false,
      multiHeight: 50,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-textbox')
  },
  mounted() {
  },
  methods: {
    onClick(e) {
      this.$refs.textBox.focus();
    },
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

//======================================
// dews-textbox
//======================================
//--------------------------------------
// 레이아웃 영역
//--------------------------------------
.textbox-wrap {
  label {
    @include label-wrap();
  }
  input[type='text'] {
    @include input-wrap();
  }

  textarea {
    @include input-wrap();
    resize: none;
    height: 64px;
  }
}
</style>
