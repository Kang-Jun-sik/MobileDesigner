<template>
  <div :uid="uid" class="dews-mobile-containerContent dews-mobile-component">
    <slot></slot>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'container-content',
  props: ['containerType', 'dataUid'],
  data() {
    return {
      id: '',
      uid: '',
      containerChild: 'container-content',
    }
  },
  created() {
    this.uid = CreateService.createUid('container-content')
  }
}
</script>

<style lang="scss" scoped>

</style>
