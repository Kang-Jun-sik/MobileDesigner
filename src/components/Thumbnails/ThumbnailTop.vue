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
    padding: 10px 20px;
  }

  .thumbnail-top-wrapper {
    margin-top: 20px;
    border-style: inset;

    .thumbnail-top {
      width: 180px;
      height: 330px;
      display: block;
      border: 40px solid #121212;
      border-width: 40px 7px;
      border-radius: 40px;
      margin: 15px auto;
      overflow: auto;
      transition: all 0.5s ease;
      animation: fadein 2s;
    }
  }
</style>
