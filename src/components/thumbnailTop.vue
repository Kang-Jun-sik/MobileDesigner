<template>
  <div class="thumbnailTop"></div>
</template>

<script>
export default {
  name: "thumbnail-Top"
}
</script>

<style lang="scss">
.thumbnailTop {
  padding: 0;
  width: 200px;
  height: 380px;
  display: block;
  border: 40px solid #121212;
  border-width: 55px 7px;
  border-radius: 40px;
  margin: 30px auto 20px;
  overflow: auto;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-animation: fadein 2s;
  -moz-animation: fadein 2s;
  -o-animation: fadein 2s;
  animation: fadein 2s;
}
</style>
