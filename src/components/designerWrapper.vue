<template>
  <div class="designerWrapper">
    <main-area></main-area>
    <thumbnail-wrapper></thumbnail-wrapper>
  </div>
</template>

<script>
import mainArea from "@/components/mainArea";
import thumbnailWrapper from "@/components/thumbnailWrapper";

export default {
  name: "designer-wrapper",
  components: {
    'mainArea': mainArea,
    'thumbnailWrapper': thumbnailWrapper
  }
}
</script>

<style lang="scss">
.designerWrapper {
  padding: 0;
  min-width: 1500px;
  border-style: dashed;
  grid-template-columns: minmax(200px, 1fr) 440px;
  display: grid;
  grid-gap: 10px;
}
</style>
