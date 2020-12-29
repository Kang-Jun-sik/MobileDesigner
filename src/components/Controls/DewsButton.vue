<template>
  <button class="dews-mobile-button dews-button" :class="{ui, type, size, icon,
    disabled: disabled ? 'disabled' : '', group: group ? 'group' : ''}">
    <span class="button-icon"></span>
    <span class="button-text">{{ text }}</span>
  </button>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-button',
  data() {
    return {
      uid: '',
      text: '',
      TYPE_LIST: {
        text: 'text',
        icon: 'icon',
        iconText: 'iconText'
      },
      SIZE_LIST: {
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      ICON_LIST: {
        'default': '',
        'ico-set': 'ico-set',
        'ico-search': 'ico-search',
        'ico-add': 'ico-add',
        'ico-delete': 'ico-delete',
        'ico-save': 'ico-save',
        'ico-qr': 'ico-qr',
        'ico-barcode': 'ico-barcode',
        'ico-scan': 'ico-scan',
        'ico-download': 'ico-download',
        'ico-upload': 'ico-upload',
        'ico-up': 'ico-up',
        'ico-down': 'ico-down',
        'ico-left': 'ico-left',
        'ico-right': 'ico-right',
        'ico-excel': 'ico-excel',
        'ico-edit': 'ico-edit',
        'ico-file': 'ico-file',
        'ico-reset': 'ico-reset',
        'ico-language': 'ico-language',
        'ico-information': 'ico-information',
        'ico-subtraction': 'ico-subtraction'
      },
      UI_LIST: {
        solid: 'solid',
        emphasize: 'emphasize'
      },
      ui: this.UI_LIST.solid,
      type: this.TYPE_LIST.text,
      size: this.SIZE_LIST.medium,
      icon: this.ICON_LIST.default,
      link: '',
      disabled: false,
      group: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-button');
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
* {
  @include reset();
}
@include dews-button();
</style>
