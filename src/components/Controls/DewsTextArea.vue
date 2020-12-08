<template>
  <div :uid="uid" class="dews-mobile-textbox textbox-wrap">
    <label :for="id">{{ title }}</label>
    <textarea :id="id" @click="onClick($event)" @change="onChange($event)"
              type="text" :value="value" :placeholder="placeholder"
           :required="required" :disabled="disabled" :readonly="readonly" ref="textArea">
    </textarea>

<!--    <label for="multi-textbox">multi-textbox value</label>-->
<!--    <textarea class="dews-multi-input" id="multi-textbox">value </textarea>-->

<!--    <label for="multi-textbox">multi-textbox placeholder</label>-->
<!--    <textarea class="dews-multi-input" id="multi-textbox" placeholder="placeholder"></textarea>-->

<!--    <label for="multi-textbox">multi-textbox readonly</label>-->
<!--    <textarea class="dews-multi-input" id="multi-textbox" readonly="readonly">value</textarea>-->

<!--    <label for="multi-textbox">multi-textbox disabled</label>-->
<!--    <textarea class="dews-multi-input" id="multi-textbox" disabled="disabled">value</textarea>-->
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-textarea',
  data() {
    return {
      id: '',
      uid: '',
      title: 'multi-textbox',
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
    this.uid = CreateService.createUid('dews-textarea')
  },
  mounted() {
  },
  methods: {
    onClick(e) {
      this.$refs.textArea.focus();
    },
    onChange(e) {
      e.stopPropagation();
      this.value = e.target.value;
    },
    onFocus(e) {

    },
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
* {
  @include reset();
}
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
