<template>
  <span :uid="uid" class="dews-mobile-checkbox dews-mobile-component dews-checkbox-wrap" :class="checkBoxClass" @click="clickHandler($event)">
    <span class="checkbox-control">
      <input type="checkbox" v-model="checked" :data-checked="checked" :disabled="disabled">
      <span class="checkbox-shape"></span>
    </span>
    <label class="checkbox-label">{{ title }}</label>
  </span>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-checkbox',
  data() {
    return {
      uid: '',
      checkBoxClass: '',
      title: '라벨',
      checked: false,
      disabled: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-checkbox');
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
    }
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
:host {
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 0;
}
.dews-checkbox-wrap {
  @include checkbox-wrap();
}
</style>
