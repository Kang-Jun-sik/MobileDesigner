<template>
  <div class="thumbnailTopWrapper">
    <thumbnail-top></thumbnail-top>
  </div>
</template>

<script>
import ThumbnailTop from "@/components/thumbnailTop";
export default {
  name: "thumbnail-TopWrapper",
  components: {ThumbnailTop}
}
</script>

<style scoped>
.thumbnailTopWrapper {
  margin: 10px;
  border-style: dashed;
  padding: 0;
}
</style>
