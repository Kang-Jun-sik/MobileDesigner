<template>
  <div :uid="uid" class="dews-mobile-dropdownButton dews-mobile-component dews-dropdown-button" :class="group ? 'group' : ''" ref="dropdownButton" >
    <button @click="clickHandler($event)" class="dews-button dropdown"
            :class="[ui, size, disabled ? 'disabled' : '']">
      <span class="button-icon"></span>
      <span class="button-text">{{ title }}</span>
    </button>
    <span class="button-list" :class="selected ? 'selected' : ''">
      <dews-dropdown-childbutton :controlChild="childButton" ref="dropdownChildButton"></dews-dropdown-childbutton>
    </span>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DewsDropdownChildbutton from "@/components/Controls/dropdownbutton/ChildButton";

export default {
  name: 'dews-dropdownbutton',
  components: {DewsDropdownChildbutton},
  data() {
    return {
      uid: '',
      hasChildControl: true,
      childButton: 'dropdownbutton-childbutton',

      /* Properties */
      id: '',
      title: 'DropdownButton',
      disabled: false,
      group: false,
      ui: 'solid',
      size: 'medium',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-dropdownbutton');
  },
  methods: {
    clickHandler(e) {
      if (!this.disabled) {
        this.selected = false;
      } else {
        this.selected = e.target === this.$el;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-dropdownbutton();

</style>
