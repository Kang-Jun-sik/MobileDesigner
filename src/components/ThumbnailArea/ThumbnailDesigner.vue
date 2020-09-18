<template>
  <div class="thumbnail-designer-wrapper">
    <thumbnail-top></thumbnail-top>
    <thumbnail-bottom></thumbnail-bottom>
  </div>
</template>

<script>
  import ThumbnailTop from "@/components/ThumbnailArea/ThumbnailTop";
  import ThumbnailBottom from "@/components/ThumbnailArea/ThumbnailBottom";

  export default {
    name: 'thumbnailDesigner-wrapper',
    components: {
      ThumbnailTop,
      ThumbnailBottom
    },
  }
</script>

<style lang="scss" scoped>
</style>
