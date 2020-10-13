<template>
  <div class="dews-mobile-searchContainer dews-mobile-component">
    <div class="search-container-header">
      {{ title }}
    </div>
    <div class="search-container-content" ref="searchContainer">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-container-wrapper',
    uid: '',
    data() {
      return {
        title: '조회 조건',
      }
    },
    mounted() {
      window.drake.containers.push(this.$refs.searchContainer);
    }
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 0;
  }

  .dews-mobile-searchContainer{
    min-width: 349px;
    min-height: 106px;
    margin: 0 7px 5px;
    background-color: #fbfbfb;
    cursor: pointer;

    .search-container-header {
      padding: 10px;
      width: 100%;
      height: 45px;
      border-bottom: 1px solid black;
      border-radius: 7px 7px 0 0;
      background-color: #ffffff;
      color: #007bff;
    }

    .search-container-content {
      min-height: 55px;
      background-color: #fbfbfb;
    }
  }
</style>
