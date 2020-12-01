<template>
<!--  <span :uid="uid" class="dews-mobile-radiobutton dews-radio-wrap" @click="clickHandler($event)">-->
<!--    <span class="radio-control">-->
<!--      <input type="radio" :checked="checked" :disabled="disabled">-->
<!--      <span class="radio-shape"></span>-->
<!--    </span>-->
<!--    <label class="radio-label">{{ title }}</label>-->
<!--  </span>-->

  <span :uid="uid" class="dews-mobile-radiobutton dews-radio-wrap">
    <span class="radio-control">
      <input type="radio">
      <span class="radio-shape"></span>
    </span>
    <label class="radio-label">라벨</label>

    <span class="radio-control">
      <input type="radio" checked="checked">
      <span class="radio-shape"></span>
    </span>
    <label class="radio-label">라벨</label>

    <span class="radio-control">
      <input type="radio" disabled="disabled">
      <span class="radio-shape"></span>
    </span>
    <label class="radio-label">라벨</label>

    <span class="radio-control">
      <input type="radio" disabled="disabled" checked="checked">
      <span class="radio-shape"></span>
    </span>
    <label class="radio-label">라벨</label>
  </span>
</template>

<script>
import ControlService from "@/service/ControlService";

export default {
  name: 'dews-radio-button',
  data() {
    return {
      uid: '',
      title: '',
      checked: false,
      disabled: false,
      readonly: false,
    }
  },
  created() {
    this.uid = ControlService.createUid('dews-radiobutton');
  },
  mounted() {
  },
  methods: {
    clickHandler (e){
      e.stopPropagation();
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-radio
//======================================
//--------------------------------------
// 레이아웃 영역
//--------------------------------------
* {
  @include reset();
}
:host {
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 0;
}
.dews-radio-wrap {
  @include radio-wrap();
}
</style>