<template>
  <div class="search-container-wrapper dews-mobile-component">
    <div class="search-container-header">
      {{ title }}
    </div>
    <div class="search-container-content" ref="searchContainer">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-container-wrapper',
    data() {
      return {
        title: '조회 조건',
      }
    },
    mounted() {
      console.log(window.drake)

      window.drake.containers.push(this.$refs.searchContainer)
    }
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 0;
  }

  .search-container-wrapper{
    min-height: 120px;
    margin: 0 10px 5px;
    background-color: #f8f9fa;

    .search-container-header {
      padding: 10px;
      width: 100%;
      height: 45px;
      border-bottom: 1px solid black;
      border-radius: 7px 7px 0 0;
      background-color: white;
      color: #007bff;
    }

    .search-container-content {
      min-height: 70px;
      height: auto;
      background-color: #f8f9fa;
    }
  }
</style>
