<template>
  <div class="mobile-wrapper">
    <main-designer-wrapper></main-designer-wrapper>
    <thumbnail-designer-wrapper></thumbnail-designer-wrapper>
    <control-list-wrapper></control-list-wrapper>
  </div>
</template>

<script>
  import MainDesignerWrapper from "@/components/MainDesigner";
  import ThumbnailDesignerWrapper from "@/components/ThumbnailDesigner";
  import ControlListWrapper from "@/components/ControlList";

  export default {
    name: 'mobile-wrapper',
    components: {
      MainDesignerWrapper,
      ThumbnailDesignerWrapper,
      ControlListWrapper,
    }
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 0;
  }

  .mobile-wrapper {
    padding: 0;
    margin: 10px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 2fr 1fr 1fr;
    background-color: #fff;
    color: #444;
  }
</style>
