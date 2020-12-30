<template>
  <div :uid="uid" class="dews-container-infobox">
    <p class="info-text">
      {{ value }}
    </p>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-info-container',
  data() {
    return {
      uid: '',
      value: '',
      type: 'basic',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-info-container');
  }
}
</script>

<style lang="scss" scoped>

</style>