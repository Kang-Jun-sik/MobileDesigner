<template>
  <div class="thumbnail-top-wrapper">
    <div class="thumbnail-top"></div>
  </div>
</template>

<script>
  export default {
    name: 'thumbnail-top'
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 10px;
  }

  .thumbnail-top-wrapper {
    margin: 10px;
    border-style: dashed;

    .thumbnail-top {
      width: 200px;
      height: 380px;
      display: block;
      border: 40px solid #121212;
      border-width: 55px 7px;
      border-radius: 40px;
      margin: 25px auto;
      overflow: auto;
      transition: all 0.5s ease;
      animation: fadein 2s;
    }
  }
</style>
