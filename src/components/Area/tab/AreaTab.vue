<template>
  <div :uid="uid" class="content dews-mobile-component dews-layout-component" :class="onActive">
    <div :style="style"></div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import store from "@/store/index";

export default {
  name: 'dews-tab',
  props: ['active'],
  data() {
    return {
      uid: '',
      onActive: this.active,
      style: {
        height: '',
        backgroundColor: '#ffffff'
      },

      /* Properties */
      id: '',
      title: 'Tab',
      hide: false,

      mainButtons: {
        save: false,
        add: false,
        delete: false,
        search: false,
      }
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-tab');

    this.mainButtonList = {
      uid: this.uid,
      mainButtons: this.mainButtons
    }
    store.commit('setMainButtonList', this.mainButtonList)
  },
  mounted() {
    const parentTabs = this.$el.closest('.dews-tabs-wrap');
    store.commit('addTabTitle', [parentTabs.getAttribute('uid'), this.title]);

    if (this.onActive === 'active') {
      this.style.height = '300px';
    } else {
      this.style.height = '0px';
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-area-tab-content
//======================================
* {
  @include reset();
}
@include dews-area-tabs-content();
</style>
