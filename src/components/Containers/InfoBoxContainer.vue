<template>
  <div :uid="uid" class="dews-mobile-infoContainer dews-container-infobox">
    <p class="info-text">
      <!-- Test를 위해 value값에 TestValue 바인딩 -->
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
      value: 'TestValue',
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