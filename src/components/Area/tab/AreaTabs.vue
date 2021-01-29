<template>
  <div :uid="uid" class="dews-mobile-tabs dews-mobile-component dews-tabs-wrap" ref="tabs">
    <div class="dews-tabs-title">
      <div class="title-list">
        <button class="title" :class="titleList.tab.active" v-for="(titleList, idx) in titlesList" :key="idx"
          :data-tab="titleList.tab.uid" @click="selectTab(titleList.tab)">{{ titleList.tab.title }}</button>
      </div>
    </div>
    <div class="dews-tabs-content" :data-uid="dataUid" data-type="tabs" ref="tabsContent">
      <dews-tab controlChild="dews-tab"></dews-tab>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import DewsTab from "@/components/Area/tab/AreaTab";
import CreateService from "@/service/CreateService";
import ChangeService from "@/service/ChangeService";
import SelectService from "@/service/SelectService";

export default {
  name: 'dews-tabs',
  components: {DewsTab},
  data() {
    return {
      uid: '',
      dataUid: '',
      titlesList: [],

      /* check child */
      hasChildControl: true,
      checkChild: true,
      controlType: 'tabs',

      /* Properties */
      id: '',
      selected: 0,
      hide: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-tabs');
    this.dataUid = CreateService.createUid('tabs');

    this.$nextTick(function () {
      this.titlesList = store.getters.getTabList[this.uid];
      this.setSelectedIndex();
    });
  },
  mounted() {},
  methods: {
    setID(value) {
      this.id = value;
    },
    setSelectedIndex() {
      this.titlesList.forEach((title, idx) => {
        if (idx === this.selected) {
          title.tab.active = 'active';
        } else {
          title.tab.active = false;
        }
      });
    },
    setSelected(value) {
      value = parseInt(value);

      if (!this.titlesList[value]) {
        ChangeService.sendChangeMessage('selected', 0, this.uid);
      } else {
        this.selected = value;
        this.setSelectedIndex();
      }
    },
    setHide(value) {
      value = JSON.parse(value);

      const tabs = this.$refs.tabs;
      this.hide = value;
      tabs.style.display = this.hide ? 'none' : 'block';
    },
    selectTab(tab) {
      const activeTab = this.titlesList.find(title => {
        return title.tab.active === 'active';
      });
      activeTab.tab.active = false;
      tab.active = 'active';

      setTimeout(SelectService.setPosition, 10, this.$refs.tabs);
    },
  },
  computed: {
    updateTitles() {
      return store.getters.getTabList[this.uid];
    }
  },
  watch: {
    updateTitles(newValue) {
      this.titlesList = newValue;
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
//======================================
// dews-area-tabs
//======================================
* {
  @include reset();
}
@include dews-area-tabs();
</style>
