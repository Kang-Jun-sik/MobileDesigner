<template>
  <div class="thumbnail-bottom-wrapper">
    <div class="thumbnail-bottom"></div>
  </div>
</template>

<script>
  export default {
    name: 'thumbnail-bottom'
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 10px 15px;
  }

  .thumbnail-bottom-wrapper {
    margin-top: 35px;
    border-style: inset;

    .thumbnail-bottom {
      width: 210px;
      height: 370px;
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
