<template>
<!--  <div :uid="uid" class="dews-mobile-textbox textbox-wrap">-->
<!--    <label>{{ title }}</label>-->
<!--    <input @change="onChange($event)" type="text" :value="value" :required="required"-->
<!--           :disabled="disabled" :readonly="readonly" :placeholder="placeholder">-->
<!--  </div>-->

  <div class="dews-mobile-textbox textbox-wrap">
    <label>value</label>
    <input type="text" class="dews-input" placeholder="placeholder" value="value" id="">

    <label>placeholder</label>
    <input type="text" class="dews-input" placeholder="placeholder" value="value" id="">

    <label>readonly</label>
    <input type="text" class="dews-input" placeholder="placeholder" value="value" id="" readonly="readonly">

    <label>disabled</label>
    <input type="text" class="dews-input" placeholder="placeholder" value="value" id="" disabled="disabled">

    <label for="multi-textbox">multi-textbox value</label>
    <textarea class="dews-multi-input" id="multi-textbox">value </textarea>

    <label for="multi-textbox">multi-textbox placeholder</label>
    <textarea class="dews-multi-input" id="multi-textbox" placeholder="placeholder"></textarea>

    <label for="multi-textbox">multi-textbox readonly</label>
    <textarea class="dews-multi-input" id="multi-textbox" readonly="readonly">value</textarea>

    <label for="multi-textbox">multi-textbox disabled</label>
    <textarea class="dews-multi-input" id="multi-textbox" disabled="disabled">value</textarea>

  </div>
</template>

<script>
import ControlService from "@/service/ControlService";

export default {
  name: 'dews-text-box',
  data() {
    return {
      uid: '',
      title: '',
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
    this.uid = ControlService.createUid('dews-textbox')
  },
  mounted() {
  },
  methods: {
    onChange (e){
      e.stopPropagation();
      this.value = e.target.value;
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
