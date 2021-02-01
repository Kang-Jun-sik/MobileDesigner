<template>
  <button :uid="uid" class="button-list-child" :disabled="disabled">
    <span>{{ text }}</span>
  </button>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-dropdown-childbutton',
  props: ['controlChild'],
  data() {
    return {
      uid: '',

      /* Properties */
      id: '',
      text: 'ChildButton',
      disabled: false
    }
  },
  created() {
    this.uid = CreateService.createUid('dropdownbutton-childbutton');
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setText(value) {
      this.text = value;
    },
    setDisabled(value) {
      this.disabled = JSON.parse(value);
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-dropdownbutton();
</style>
