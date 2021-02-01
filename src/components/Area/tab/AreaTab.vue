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
        save: true,
        add: true,
        delete: true,
        search: true,
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

    this.$nextTick(() => {
      store.commit('addItem', this);
    });
  },
  mounted() {
    window.drake.containers.push(this.$refs.tab);

    if (this.controlChild) {
      this.active = 'active';
      this.parentUid = this.$el.closest('.dews-tabs-wrap').getAttribute('uid');
      store.commit('setTab', {
        tabsUid: this.parentUid,
        tabData: {
          tab: this
        },
      });
    }
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
    },
    setHide(value) {
      value = JSON.parse(value);

      const tab = this.$refs.tab;
      this.hide = value;
      tab.style.display = this.hide ? 'none' : 'block';
    },

    setUseAdd(value) {
      value = JSON.parse(value);
      value ? this.mainButtons.add = true : this.mainButtons.add = false;
    },

    setUseSearch(value) {
      value = JSON.parse(value);
      value ? this.mainButtons.search = true : this.mainButtons.search = false;
    },

    setUseDelete(value) {
      value = JSON.parse(value);
      value ? this.mainButtons.delete = true : this.mainButtons.delete = false;
    },

    setUseSave(value) {
      value = JSON.parse(value);
      value ? this.mainButtons.save = true : this.mainButtons.save = false;
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
  min-height: 40px;
}
</style>
