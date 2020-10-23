<template>
  <div :uid="uid" class="content">
    <div></div>
  </div>
</template>

<script>
  import GlobalService from "@/service/GlobalService";
  import { store } from '@/store';

  export default {
    name: 'dews-tab',
    data() {
      return {
        uid: '',
        title: 'Tab',
      }
    },
    created() {
      this.uid = GlobalService.createUid('mobile-tab');
    },
    mounted() {
      const parentTabs = this.$el.closest('.dews-tabs-wrap');
      store.commit('addTabTitle', [parentTabs.getAttribute('uid'), this.title]);
    }
  }
</script>

<style>

</style>
