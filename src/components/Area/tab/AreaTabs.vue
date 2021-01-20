<template>
  <div :uid="uid" class="dews-mobile-tabs dews-mobile-component dews-tabs-wrap">
    <div class="dews-tabs-title">
      <div class="title-list">
        <button class="title" :class="titleList[tab].active"  v-for="(tab, idx) in titleList" :key="idx">{{titleList[tab].title}}</button>
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
      titleList: new Map(),
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

    this.$nextTick(function () {
      this.titleList = store.getters.getTabList.get(this.uid);
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
    updateTab: function (){
      console.log(store.getters.getTabList.get(this.uid));
      return store.getters.getTabList.get(this.uid);
    }
    // ,
    // updateTitle() {
    //   return store.getters.getTabList[this.uid];
    // }
  },
  watch: {
    // updateTitle(state) {
    //   this.activeList = state;
    // }
    updateTab(state) {
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
