<template>
  <span :uid="uid" class="dews-mobile-radiobutton dews-radio-wrap" @click="clickHandler($event)">
    <span class="radio-control">
      <input type="radio" :checked="checked" :data-checked="checked" :disabled="disabled">
      <span class="radio-shape"></span>
    </span>
    <label class="radio-label">{{ title }}</label>

<!--    <span class="radio-control">-->
<!--      <input type="radio" checked="checked">-->
<!--      <span class="radio-shape"></span>-->
<!--    </span>-->
<!--    <label class="radio-label">라벨</label>-->

<!--    <span class="radio-control">-->
<!--      <input type="radio" disabled="disabled">-->
<!--      <span class="radio-shape"></span>-->
<!--    </span>-->
<!--    <label class="radio-label">라벨</label>-->

<!--    <span class="radio-control">-->
<!--      <input type="radio" disabled="disabled" checked="checked">-->
<!--      <span class="radio-shape"></span>-->
<!--    </span>-->
<!--    <label class="radio-label">라벨</label>-->
  </span>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-radio-button',
  data() {
    return {
      uid: '',
      title: '라벨',
      checked: false,
      disabled: false,
      readonly: false,
      picked: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-radiobutton');
  },
  mounted() {
  },
  methods: {
    clickHandler(e) {
      if (this.disabled) return

      this.checked = !this.checked;
    },
    setDisabled() {
      this.disabled = !this.disabled;
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
