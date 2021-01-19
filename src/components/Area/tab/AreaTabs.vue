<template>
  <div :uid="uid" class="dews-mobile-tabs dews-mobile-component dews-tabs-wrap" :active="active">
    <div class="dews-tabs-title">
      <div class="title-list">
        <button class="title" :class="activeList[idx]" v-for="(title, idx) in titleList" :key="idx" @click="selectTab($event, idx)">{{ title }}</button>
      </div>
    </div>
    <div class="dews-tabs-content" :data-uid="dataUid" data-type="tabs" ref="tabsContent">
      <dews-tab :active="activeTab" ></dews-tab>
      <dews-tab ></dews-tab>
      <dews-tab ></dews-tab>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import DewsTab from "@/components/Area/tab/AreaTab";
import CreateService from "@/service/CreateService";
import {mapGetters} from "vuex";

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
    // this.titleList = store.state.tabTitles;
  },
  mounted() {
    // const titles = store.getters.getTabList;
    // this.titleList = titles[this.uid].title.map((title,index)=>{
    //   this.activeList.push(titles[this.uid].active[index]);
    //   return title;
    // });
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
    ...mapGetters({
      getTabList: "getTabList"
    }),
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
