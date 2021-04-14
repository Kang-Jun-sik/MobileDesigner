<template>
  <div class="control-list-wrapper">
    <div class="control-header" v-b-toggle.areaList role="tab">
      <div class="header-title">Area</div>
      <div class="header-arrow"></div>
    </div>
    <b-collapse id="areaList" class="control-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in mobileArea" :key="idx"
           :class="'dews-mobile-' + key"
           class="dews-control-list"
      >
        <div :class="'areaList-' + key" class="icon"></div>
        <div class="title">{{ name }}</div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  export default {
    name: 'area-list',
    data() {
      return {
        mobileArea: {
          box: 'Area Box',
          tabs: 'Area Tabs',
        }
      }
    },
    mounted() {
      const areaList = {
        name: 'areaList',
        control: document.querySelector('#areaList')
      }
      this.$store.commit('SET_CONTROL_LIST', areaList);
    }
  }
</script>

<style lang="scss" scoped>
</style>

