<template>
  <div class="main-designer-wrapper">
    <div class="main-designer"></div>
  </div>
</template>

<script>
  export default {
    name: 'mainDesigner-wrapper'
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 10px;
  }
  .main-designer[data-v-1efb09f4] {
    display: inline-flex;
    width: 1025px;
    height: 1024px;
    border: 40px solid #121212;
    border-width: 55px 7px;
    border-radius: 40px;
    margin: 10px 10px 10px 10px;
    overflow: auto;
    transition: all 0.5s ease;
    animation: fadein 2s;
  }
</style>
