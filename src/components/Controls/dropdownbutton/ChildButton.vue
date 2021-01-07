<template>
  <button :uid="uid" class="button-list-child" :disabled="disabled">
    <span>{{ text }}</span>
  </button>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-dropdown-childbutton',
  data() {
    return {
      uid: '',
      text: 'ChildButton',
      disabled: false
    }
  },
  created() {
    this.uid = CreateService.createUid('dropdownbutton-childbutton');
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-dropdownbutton();
</style>
