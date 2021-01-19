<template>
  <div :uid="uid" class="dews-mobile-tab dews-mobile-component dews-layout-component content" :class="onActive"
    :data-uid="dataUid" data-type="area">
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
      dataUid: '',
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
    this.dataUid = CreateService.createUid('tab');

    this.mainButtonList = {
      uid: this.uid,
      mainButtons: this.mainButtons
    }
    store.commit('setMainButtonList', this.mainButtonList)
  },
  mounted() {
    const parentTabs = this.$el.closest('.dews-tabs-wrap');

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
