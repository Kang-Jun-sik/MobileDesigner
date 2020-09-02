<template>
  <div class="mainArea">
    <main-Designer></main-Designer>
  </div>
</template>

<script>
import mainDesigner from "@/components/mainDesigner";

export default {
  name: "main-Area",
  components:{
    'mainDesigner':mainDesigner
  }

}
</script>

<style lang="scss">
  .mainArea{
    padding: 0;
  }
</style>
