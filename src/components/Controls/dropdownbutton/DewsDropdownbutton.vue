<template>
  <li>
    <span :uid="uid" class="dews-mobile-dropdownButton dews-dropdown-button" :class="group ? 'group' : ''">
    <button @click="clickHandler($event)" class="dews-button dropdown"
            :class="[ui, size, disabled ? 'disabled' : '']">
      <span class="button-icon"></span>
      <span class="button-text">{{ text }}</span>
    </button>
    <span class="button-list" :class="selected ? 'selected' : ''">
      <dews-dropdown-childbutton></dews-dropdown-childbutton>
    </span>
  </span>
  </li>
</template>

<script>
import CreateService from "@/service/CreateService";
import DewsDropdownChildbutton from "@/components/Controls/dropdownbutton/Childbutton";

export default {
  name: 'dews-dropdownbutton',
  components: {DewsDropdownChildbutton},
  data() {
    return {
      uid: '',
      text: '',
      SIZE_LIST: {
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      UI_LIST: {
        solid: 'solid',
        emphasize: 'emphasize'
      },
      ui: 'solid',
      size: 'medium',
      disabled: false,
      group: false,
      selected: false,
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
* {
  @include reset();
}
@include dews-dropdownbutton();

</style>
