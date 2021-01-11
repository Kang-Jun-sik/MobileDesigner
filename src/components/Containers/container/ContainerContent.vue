<template>
  <div :uid="uid" class="dews-mobile-containerContent">
    <slot></slot>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'container-content',
  data() {
    return {
      uid: ''
    }
  },
  created() {
    this.uid = CreateService.createUid('container-content')
  }
}
</script>

<style lang="scss" scoped>

</style>
