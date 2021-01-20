<template>
  <div :uid="uid" class="dews-mobile-tab dews-mobile-component dews-layout-component content" :class="active"
    :data-uid="dataUid" data-type="area">
    <div :style="style"></div>
  </div>
</template>

<script>
import store from "@/store/index";
import CreateService from "@/service/CreateService";
import {mapGetters} from "vuex";

export default {
  name: 'dews-tab',
  props: ['active'],
  data() {
    return {
      uid: '',
      dataUid: '',
      style: {
        height: '',
        backgroundColor: '#ffffff'
      },
      parentUid: '',
      activeList: [],

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

    this.$nextTick(() => {
      store.commit('addItem', this);

      if (this.active) {
        this.parentUid = this.$el.closest('.dews-tabs-wrap').getAttribute('uid');
        store.commit('setTab', {
          tabsUid: this.parentUid,
          tab: this,
        });
      }
    });
  },
  mounted() {
    if (this.active) {
      if (this.active === 'active') {
        this.style.height = '300px';
      } else {
        this.style.height = '0px';
      }
    }
  },



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
