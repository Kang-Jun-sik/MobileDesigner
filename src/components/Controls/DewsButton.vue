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
  div{
    padding: 0;
  }
  .dews-mobile-button {
    width: 68px;
    height: 28px;
    min-width: 61px;
    min-height: 24px;
    border-radius: 4px;
    border: 1px solid #a6a6a6;
    background: linear-gradient(#fff, #f0f0f0);
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.8;
    display: inline-block;
    position: relative;
    text-align: center;
    vertical-align: top;
    letter-spacing: -0.5px;
    margin: 5px 7px;
    cursor: pointer;

    .ui-resizable-handle {
      padding: 0;
    }
  }
</style>
