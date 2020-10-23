<template>
  <div :uid="uid" class="content" :class="onActive">
    <div :style="style"></div>
  </div>
</template>

<script>
  import GlobalService from "@/service/GlobalService";
  import { store } from '@/store';

  export default {
    name: 'dews-tab',
    props: ['active'],
    data() {
      return {
        uid: '',
        title: 'Tab',
        onActive: this.active,
        style: {
          height: '',
          backgroundColor: '#ffffff'
        }
      }
    },
    created() {
      this.uid = GlobalService.createUid('mobile-tab');
    },
    mounted() {
      const parentTabs = this.$el.closest('.dews-tabs-wrap');
      store.commit('addTabTitle', [parentTabs.getAttribute('uid'), this.title]);

      if (this.onActive === 'active') {
        this.style.height = '300px';
      } else {
        this.style.height = '0px';
      }
    }
  }
</script>

<style>

</style>
