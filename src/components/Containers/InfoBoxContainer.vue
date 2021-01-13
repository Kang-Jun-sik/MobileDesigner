<template>
  <div :uid="uid" class="dews-mobile-infoContainer dews-container-infobox dews-container">
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
      hasChildControl: true,

      /* Properties */
      id: '',
      type: 'basic',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-info-container');
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-info
//======================================
@include dews-info();

</style>
