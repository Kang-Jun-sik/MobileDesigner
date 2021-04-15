<template>
  <div :uid="uid" class="dews-mobile-containerContent dews-mobile-component">
    <slot></slot>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'container-content',
  props: ['controlType', 'dataUid'],
  data() {
    return {
      uid: '',
      parentUid: '',
      /* check child */
      checkChild: true,
      controlChild: 'container-content',

      /* Properties */
      id: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('container-content');
  }
}
</script>

<style lang="scss" scoped>

</style>
