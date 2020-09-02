<template>
  <div class="mainDesigner"></div>
</template>

<script>
export default {
  name: "main-Designer"
}
</script>

<style lang="scss">
.mainDesigner {
  display: inline-flex;
  width: 1025px;
  height: 1024px;
  border: 40px solid #121212;
  border-width: 55px 7px;
  border-radius: 40px;
  margin: 10px 10px 10px 10px;
  overflow: auto;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-animation: fadein 2s;
  -moz-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -ms-animation: fadein 2s; /* Firefox < 16 */
  -o-animation: fadein 2s; /* Internet Explorer */
  animation: fadein 2s; /* Opera < 12.1 */
}
</style>
