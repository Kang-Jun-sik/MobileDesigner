<template>
  <div :uid="uid" class="dews-mobile-customContainer dews-mobile-component">
    <div class="dews-container-custom">
      <container-content :control-type="controlType">
        <div class="form-field"></div>
      </container-content>
    </div>
  </div>
</template>

<script>

import CreateService from "@/service/CreateService";
import ContainerContent from "@/components/Containers/container/ContainerContent";

export default {
  name: "dews-custom-container",
  components: {ContainerContent},
  data() {
    return {
      uid: '',
      parentUid: '',
      title: 'Custom Container',
      controlType: 'common-control'
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-custom-container');
  },
}
</script>


<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-container-custom();

.dews-container-custom {
  .form-field {
    min-height: 20px;
    border: 1px dotted #193a75;
  }
}
</style>
