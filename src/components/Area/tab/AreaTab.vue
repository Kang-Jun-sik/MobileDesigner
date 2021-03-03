<template>
  <div :uid="uid" class="dews-mobile-tab dews-mobile-component dews-layout-component content"
       :class="active" data-type="area" :style="style" ref="tab">
  </div>
</template>

<script>
import store from "@/store/index";
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-tab',
  props: ['controlChild'],
  data() {
    return {
      uid: '',
      dataUid: '',
      style: {
        height: '',
      },
      parentUid: '',
      active: false,

      /* Properties */
      id: '',
      title: 'Tab',
      hide: false,
      mainButtons: {
        'btn-save': true,
        'btn-add': true,
        'btn-delete': true,
        'btn-search': true,
      },
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-tab');

    store.commit('SET_NAVIGATION_BAR_TITLE_LIST', {
      uid: this.uid,
      title: this.title
    });

    store.commit('SET_MAIN_BUTTON_LIST', {
      uid: this.uid,
      mainButtons: this.mainButtons
    });

    this.$nextTick(() => {
      store.commit('ADD_ITEM', this);
    });
  },
  mounted() {
    window.drake.containers.push(this.$refs.tab);

    if (this.controlChild) {
      this.active = 'active';
      this.parentUid = this.$el.closest('.dews-tabs-wrap').getAttribute('uid');
      store.commit('SET_TAB', {
        tabsUid: this.parentUid,
        tabData: { tab: this },
      });
    }
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
      store.commit('SET_NAVIGATION_BAR_TITLE_LIST', {
        uid: this.uid,
        title: value
      });
      store.state.designer.navigationBar.title = store.getters.getNavigationBarTitleList(this.uid);
    },
    setHide(value) {
      value = JSON.parse(value);

      const tab = this.$refs.tab;
      this.hide = value;
      tab.style.display = this.hide ? 'none' : 'block';
    },
    setBtnAdd(value) {
      this.mainButtons['btn-add'] = JSON.parse(value);
    },
    setBtnSearch(value) {
      this.mainButtons['btn-search'] = JSON.parse(value);
    },
    setBtnDelete(value) {
      this.mainButtons['btn-delete'] = JSON.parse(value);
    },
    setBtnSave(value) {
      this.mainButtons['btn-save'] = JSON.parse(value);
    },
  },
  watch: {
    active(state) {
      this.style.height = state === 'active' ? 'auto' : '0px';
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

.dews-mobile-tab {
  padding: 8px;
  min-height: 40px;
}
</style>
