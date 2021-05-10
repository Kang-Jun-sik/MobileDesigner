<template>
  <button :uid="uid" :id="id" class="dews-mobile-button dews-mobile-component dews-button" :class="[ui, size, type,
    disabled ? 'disabled' : '', group ? 'group' : '']" :style="buttonStyle">
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
      parentUid: '',
      TYPE_LIST: {
        text: 'text',
        icon: 'icon',
        iconText: 'iconText'
      },
      SIZE_LIST: {
        small: 'small', //IDE로부터 컨트롤 변경 메세지 처리
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
      buttonStyle: {},

      /* Properties */
      id: '',
      text: 'Button',
      type: 'text',
      ui: 'solid',
      size: 'medium',
      icon: '',
      link: '',
      disabled: false,
      group: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-button');
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setText(value) {
      this.text = value;
    },
    setUI(value) {
      this.ui = value;
    },
    setSize(value) {
      this.size = value;
    },
    setIcon(value) {
      this.icon = value;
    },
    setLink(value) {
      this.link = value;
    },
    setType(value) {
      this.type = value;
    },
    setDisabled(value) {
      this.disabled = JSON.parse(value);
    },
    setGroup(value) {
      this.group = JSON.parse(value);
    },
    destroyComponent() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
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
