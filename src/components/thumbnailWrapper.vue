<template>
  <div class="thumbnailWrapper">
    <thumbnail-top-wrapper></thumbnail-top-wrapper>
    <thumbnail-bottom-wrapper></thumbnail-bottom-wrapper>
  </div>
</template>

<script>
import thumbnailTopWrapper from "@/components/thumbnailTopWrapper";
import thumbnailBottomWrapper from "@/components/thumbnailBottomWrapper";

export default {
  name: "thumbnail-Wrapper",
  components:{
    'thumbnailTopWrapper':thumbnailTopWrapper,
    'thumbnailBottomWrapper':thumbnailBottomWrapper
  }
}
</script>

<style scoped>
.thumbnailWrapper {
  display: grid;
  padding: 0;
}
</style>
