<template>
  <div :uid="uid" class="dews-mobile-tabs dews-mobile-component dews-tabs-wrap">
    <div class="dews-tabs-title">
      <div class="title-list">
        <button class="title" :class="active" @click="selectTab($event, idx)"
                v-for="(active, idx) in titleList.active" :key="idx">{{ titleList.title[idx] }}</button>
      </div>
    </div>
    <div class="dews-tabs-content" :data-uid="dataUid" data-type="tabs" ref="tabsContent">
      <dews-tab :active="activeTab"></dews-tab>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import DewsTab from "@/components/Area/tab/AreaTab";
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-tabs',
  components: {DewsTab},
  data() {
    return {
      uid: '',
      dataUid: '',
      titleList: 'Tab',
      activeTab: 'active',
      activeList: [],

      /* Properties */
      id: '',
      title: '',
      selected: false,
      hide: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-tabs');
    this.dataUid = CreateService.createUid('tabs');

    this.$nextTick(function() {
      this.titleList = store.getters.getTabList[this.uid];
    });
  },
  mounted() {

  },
  methods: {
    selectTab: function (evt, idx){
      evt.target.classList.add('active');
      const $el = document.querySelector(`.dews-tabs-content :nth-child(${idx+1})`);
      $el.classList.add('active')
      // console.log(evt, idx);
    }
  },
  computed: {
    updateTitle() {
      return store.getters.getTabList[this.uid];
    }
  },
  watch: {
    updateTitle(state) {
      this.activeList = state;
    }
  }
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
