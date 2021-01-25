<template>
  <div class="control-list-wrapper">
    <div class="control-header" v-b-toggle.containerList role="tab">
      <div class="header-title">Container</div>
      <div class="header-arrow"></div>
    </div>
    <b-collapse id="containerList" class="control-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in mobileContainer" :key="idx"
           :class="'dews-mobile-' + key"
           class="dews-control-list"
           data-type="container"
      >
        <div :class="'containerList-' + key" class="icon"></div>
        <div class="title">{{ name }}</div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  export default {
    name: 'container-list',
    data() {
      return {
        mobileContainer: {
          searchContainer: 'Search Container',
          listContainer: 'List Container',
          formContainer: 'Form Container',
          infoContainer: 'InfoBox Container'
        },
      }
    },
    mounted() {
      const containerList = {
        name: 'containerList',
        control: document.querySelector('#containerList')
      }
      this.$store.commit('setControlList', containerList);
    }
  }
</script>

<style lang="scss" scoped>
</style>
