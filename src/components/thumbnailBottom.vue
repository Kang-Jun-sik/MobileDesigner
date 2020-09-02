<template>
  <div class="thumbnailBottom"></div>
</template>

<script>
export default {
  name: "thumbnail-Bottom"
}
</script>

<style lang="scss">
.thumbnailBottom{
  padding: 0;
  width: 310px;
  height: 500px;
  display: block;
  border: 40px solid #121212;
  border-width: 55px 7px;
  border-radius: 40px;
  margin: 30px auto 20px;
  overflow: auto;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-animation: fadein 2s;
  -moz-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -o-animation: fadein 2s; /* Internet Explorer */
  animation: fadein 2s; /* Opera < 12.1 */
}
</style>
