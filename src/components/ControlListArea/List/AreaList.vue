<template>
  <div class="control-list-warpper dews-areaList-wrapper">
    <div class="control-header areaList-header" v-b-toggle.areaList role="tab">
      <div class="header-title areaList-header-title">Area</div>
      <div class="header-arrow areaList-header-arrow"></div>
    </div>
    <b-collapse id="areaList" class="control-content areaList-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in mobileArea" :key="idx"
           :class="'dews-mobile-' + key"
           class="dews-control-list areaList-content-box"
      >
        <div :class="'areaList-' + key" class="icon areaList-content-icon"></div>
        <div class="title areaList-content-title">{{ name }}</div>
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
      this.$store.commit('setControlList', areaList);
    }
  }
</script>

<style lang="scss" scoped>
</style>
