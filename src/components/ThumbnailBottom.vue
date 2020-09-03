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
    padding: 10px;
  }

  .thumbnail-bottom-wrapper {
    margin: 10px;
    border-style: dashed;

    .thumbnail-bottom {
      width: 310px;
      height: 490px;
      display: block;
      border: 40px solid #121212;
      border-width: 55px 7px;
      border-radius: 40px;
      margin: 23px auto;
      overflow: auto;
      transition: all 0.5s ease;
      animation: fadein 2s;
    }
  }
</style>
