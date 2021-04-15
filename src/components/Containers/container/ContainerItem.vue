<template>
  <div :uid="uid">
    <slot></slot>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: "container-item",
  data(){
    return{
      uid: '',
      parentUid: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-custom-container');
  },
}
</script>

<style scoped>

</style>
