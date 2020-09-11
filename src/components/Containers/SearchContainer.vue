<template>
  <div class="search-container-wrapper">
    <div class="search-container-header">
      {{ title }}
    </div>
    <div class="search-container-content">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-container-wrapper',
    data() {
      return {
        title: '수주등록',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-container-wrapper{
    min-height: 200px;
    padding: 0;

    .search-container-header {
      width: 100%;
      height: 50px;
      background-color: #e9ecef;
    }

    .search-container-content {
      height: 150px;
      background-color: #e0e0e0;
    }
  }
</style>
