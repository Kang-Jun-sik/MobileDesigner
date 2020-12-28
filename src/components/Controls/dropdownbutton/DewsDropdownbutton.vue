<template>
  <span :uid="uid" class="dews-mobile-dropdownButton dews-dropdown-button" :class="{ group: group ? 'group' : '' }">
    <button @click="clickHandler($event)" class="dews-button dropdown" :class="{ui, size, disabled: disabled ? 'disabled' : ''}">
      <span class="button-icon"></span>
      <span class="button-text">{{ text }}</span>
    </button>
    <span class="button-list" :class="{ selected: selected ? 'selected' : '' }">
      {{ childButtons }}
    </span>
  </span>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-dropdownbutton',
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
      ui: '',
      size: '',
      disabled: false,
      group: false,
      selected: false,
      childButtons: [],
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

</style>
