<template>
  <div :uid="uid" class="dews-tabs-wrap dews-mobile-component" :active="active">
    <div class="dews-tabs-title">
      <div class="title-list">
<!--        <button class="title" v-for="(title, idx) in titleList" :key="idx" @click="selectTab($event, idx)">{{ title }}</button>-->
        <button class="title active"><span>Tab#1 Tab#1 Tab#1 Tab#1</span></button>
        <button class="title"><span>Tab#2</span></button>

      </div>
    </div>
    <div class="dews-tabs-content">
      <dews-tab :active="active"></dews-tab>
      <dews-tab></dews-tab>
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
      titleList: 'Tab',
      active: 'active'
    }
  },
  created() {
    this.uid = CreateService.createUid('mobile-tabs');
    // this.titleList = store.state.tabTitles;
  },
  mounted() {
    // const titles = store.getters.tabTitleList;
    // this.titleList = titles[this.uid];
  },
  methods: {
    // selectTab: function (evt, idx){
    //   console.log(document.querySelector(".dews-tabs-content :nth-child(1)"))
    //   console.log(evt, idx);
    // }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-area-tabs
//======================================

//--------------------------------------
// 레이아웃 영역
//--------------------------------------
* {
  @include reset();
}
.dews-tabs-wrap {
  @include area-tabs-title();
}
</style>
