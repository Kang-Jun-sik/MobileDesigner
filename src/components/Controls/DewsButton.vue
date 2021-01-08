<template>
  <button :uid="uid" class="dews-mobile-button dews-mobile-component dews-button" :class="[ui, size, type,
    disabled ? 'disabled' : '', group ? 'group' : '']" :style="buttonStyle">
    <span class="button-icon"></span>
    <span class="button-text">{{ text }}</span>
  </button>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-button',
  props: ['isGroup'],
  data() {
    return {
      uid: '',
      text: 'Button',
      TYPE_LIST: {
        text: 'text',
        icon: 'icon',
        iconText: 'iconText'
      },
      SIZE_LIST: {
        small: 'small',//IDE로부터 컨트롤 변경 메세지 처리
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
      ui: 'solid',
      type: 'text',
      size: 'medium',
      icon: '',
      link: '',
      disabled: false,
      group: false,
      buttonStyle: {},
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-button');
    this.group = this.isGroup ? this.isGroup : false;
  },
  methods: {
    setText(data) {
      this.text = data.toString();
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-button();

.group{
  flex: 1 1 auto;
  margin-right: 8px;
  .dews-button:not(.icon) {
    height: 100%;
  }

  &:last-child {
    margin-right: 0;
  }
  &.icon {
    flex: 0 0 0;
  }
}
</style>
