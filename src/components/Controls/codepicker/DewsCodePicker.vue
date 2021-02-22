<template>
  <div :uid="uid" class="dews-mobile-codePicker dews-mobile-component">
    <div class="codepicker codepicker-wrap" @click="clickHandler">
      <label>{{ title }}</label>
      <span class="select-wrap">
      <span class="select-shape">
        <span class="select-input">
          {{ text }}
        </span>
      </span>
      <span class="select-icon code-picker-icon"></span>
    </span>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-codepicker',
  data() {
    return {
      uid: '',
      title: 'codepicker',
      text: 'text',

    }
  },
  created() {
    this.uid = CreateService.createUid('dews-codepicker');
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@import 'src/assets/scss/_mixins';
@include dews-codepicker();
//@include dews-drawer-codepicker();

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.codepicker-wrap {
  @include dews-designer-picker-style();
}
</style>
