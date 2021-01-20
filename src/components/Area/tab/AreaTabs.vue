<template>
  <div :uid="uid" class="dews-mobile-tabs dews-mobile-component dews-tabs-wrap">
    <div class="dews-tabs-title">
      <div class="title-list">
        <button class="title" :class="tab.active" v-for="(tab, idx) in titlesList" :key="idx" :data-tab="tab.uid">{{ tab.title }}</button>
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
      titlesList: [],
      activeTab: 'active',

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

    this.$nextTick(function () {
      this.titlesList = store.getters.getTabList[this.uid];
      console.log(this.titlesList)
    });
  },
  mounted() {
    // this.titleList =  store.getters.getTabList[this.uid];
  },
  methods: {
    // selectTab: function (evt, idx) {
    //   const $TabTitleList = evt.currentTarget.parentElement.children;
    //   store.commit('setTabActiveChange', {
    //     uid : this.uid,
    //     idx : idx
    //   });
    //   for (let i = 0; i < $TabTitleList.length; i++) {
    //    if(i === idx){
    //      $TabTitleList[i].classList.add('active');
    //    }else{
    //      $TabTitleList[i].classList.remove('active');
    //    }
    //   }
    // }
  },
  computed: {
    updateTitles() {
      return store.getters.getTabList[this.uid];
    }
  },
  watch: {
    updateTitles(state) {
      this.titlesList = state;
      console.log('titleList', this.titlesList)
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
