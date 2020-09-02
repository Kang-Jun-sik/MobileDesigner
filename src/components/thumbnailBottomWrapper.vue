<template>
  <div class="thumbnailBottomWrapper">
    <thumbnail-Bottom></thumbnail-Bottom>
  </div>
</template>

<script>
import thumbnailBottom from "@/components/thumbnailBottom";

export default {
  name: "thumbnail-BottomWrapper",
  components:{
    'thumbnailBottom':thumbnailBottom
  }
}
</script>

<style scoped>
.thumbnailBottomWrapper {
  margin: 10px;
  border-style: dashed;
  padding: 0;
}
</style>
