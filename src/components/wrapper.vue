<template>
  <div class="wrapper">
    <designer-wrapper></designer-wrapper>
    <controlList-Wrapper></controlList-Wrapper>
  </div>
</template>

<script>

import designerWrapper from "@/components/designerWrapper";
import controlListWrapper from "@/components/controlListWrapper";

export default {
  name: 'wrapper',
  components: {
    designerWrapper,
    controlListWrapper,
  }
}
</script>

<style lang="scss">
.wrapper {
  padding: 0;
  min-width: 1500px;
  margin: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: minmax(200px, 1fr) 340px;
  background-color: #fff;
  color: #444;
}
</style>
