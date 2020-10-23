<template>
  <div :uid="uid" class="dews-tabs-wrap" :active="active">
    <div class="dews-tabs-title">
      <div class="title-list">
<!--        <button class="title" v-for="(title, idx) in titleList" :key="idx" @click="selectTab($event, idx)">{{ title }}</button>-->
        <button class="title active">Tab#1</button>
        <button class="title">Tab#2</button>
      </div>
    </div>
    <div class="dews-tabs-content">
      <dews-tab :active="active"></dews-tab>
      <dews-tab></dews-tab>
    </div>
  </div>
</template>

<script>
  import DewsTab from "@/components/Area/tab/AreaTab";
  import GlobalService from "@/service/GlobalService";
  import { store } from '@/store';

  export default {
    name: 'dews-tabs',
    components: {DewsTab},
    data() {
      return {
        uid: '',
        titleList: 'Tab',
        active: ''
      }
    },
    created() {
      this.uid = GlobalService.createUid('mobile-tabs');
      this.titleList = store.state.tabTitles;
    },
    mounted() {
      const titles = store.getters.tabTitleList;
      this.titleList = titles[this.uid];
    },
    methods: {
      // selectTab: function (evt, idx){
      //   console.log(document.querySelector(".dews-tabs-content :nth-child(1)"))
      //   console.log(evt, idx);
      // }
    }
  }
</script>

<style>

</style>
