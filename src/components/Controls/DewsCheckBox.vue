<template>
  <span :uid="uid" class="dews-mobile-checkbox dews-mobile-component dews-checkbox-wrap" :class="bookmark ? 'bookmark' : ''">
    <span class="checkbox-control">
      <input type="checkbox" v-model="checked" :data-checked="checked" :disabled="disabled">
      <span class="checkbox-shape" @click="clickHandler($event)"></span>
    </span>
    <label v-if="showLabel" class="checkbox-label">{{ label }}</label>
  </span>
</template>

<script>
import CreateService from "@/service/CreateService";
import ChangeService from "@/service/ChangeService";

export default {
  name: 'dews-checkbox',
  props: ['val'],
  data() {
    return {
      uid: '',
      showLabel: true,

      /* Properties */
      id: '',
      label: '라벨',
      disabled: false,
      checked: false,
      bookmark: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-checkbox');

    this.showLabel = this.val !== "null";
    this.label = this.val ? this.val : this.label;
  },
  mounted() {
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setLabel(value) {
      this.label = value;
    },
    setDisabled(value) {
      this.disabled = JSON.parse(value);
    },
    setChecked(value) {
      this.checked = JSON.parse(value);
    },
    setBookmark(value) {
      this.bookmark = JSON.parse(value);
      this.showLabel = !this.bookmark;
    },
    clickHandler(e) {
      e.stopPropagation();

      if (this.disabled) return;
      this.checked = !this.checked
      ChangeService.sendChangeMessage('checked', this.checked, this.uid);
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-checkbox();
</style>
