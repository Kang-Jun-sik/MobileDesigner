<template>
<!--  <span :uid="uid" class="dews-checkbox-wrap" :class="checkBoxClass" @click="clickHandler($event)">-->
<!--    <span class="checkbox-control">-->
<!--      <input type="checkbox" :checked="checked" :disabled="disabled">-->
<!--      <span class="checkbox-shape"></span>-->
<!--    </span>-->
<!--    <label class="checkbox-label">{{ title }}</label>-->
<!--  </span>-->

  <span :uid="uid" class="dews-checkbox-wrap" :class="checkBoxClass" @click="clickHandler($event)">
    <span class="checkbox-control">
      <input type="checkbox">
      <span class="checkbox-shape"></span>
    </span>
    <label class="checkbox-label">라벨</label>

    <span class="checkbox-control">
      <input type="checkbox" checked="checked">
      <span class="checkbox-shape"></span>
    </span>
    <label class="checkbox-label">라벨</label>

    <span class="checkbox-control">
      <input type="checkbox" disabled="disabled">
      <span class="checkbox-shape"></span>
    </span>
    <label class="checkbox-label">라벨</label>

    <span class="checkbox-control">
      <input type="checkbox" checked="checked" disabled="disabled">
      <span class="checkbox-shape"></span>
    </span>
    <label class="checkbox-label">라벨</label>
  </span>
</template>

<script>
import ControlService from "@/service/ControlService";

export default {
  name: 'dews-checkbox',
  data() {
    return {
      uid: '',
      checkBoxClass: '',
      title: '',
      checked: false,
      disabled: false,
    }
  },
  created() {
    this.uid = ControlService.createUid('dews-checkbox');
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
// dews-checkbox
//======================================
//--------------------------------------
// 레이아웃 영역
//--------------------------------------
* {
  @include reset();
}
:host {
  display: inline-block;
  margin: 0px;
  padding: 0px;
  font-size: 0;
}
.dews-checkbox-wrap {
  @include checkbox-wrap();
}
</style>