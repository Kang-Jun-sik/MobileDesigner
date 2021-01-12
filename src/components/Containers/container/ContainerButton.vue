<template>
  <div :uid="uid" class="dews-mobile-containerButton dews-mobile-component" :data-uid="'test'">
    <div v-if="containerType === 'form'" class="option-custom-button">
      <ul>
      </ul>
    </div>
    <div class="option-convenience-button">
      <ul>
        <li class="data-capture"><button class="capture"><span> Data Capture</span></button></li>
        <li class="data-set"><button class="set"><span>Data Set</span></button></li>
        <li class="data-reset"><button class="reset"><span>Data Reset</span></button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'container-button',
  props: ['containerType'],
  data() {
    return {
      id: '',
      uid: '',
      containerChild: 'container-button'
    }
  },
  created() {
    this.uid = CreateService.createUid('container-button');
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

.dews-container-option-control {
  @include option-control();
}

</style>
