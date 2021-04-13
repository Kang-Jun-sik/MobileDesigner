<template>
  <div :uid="uid" class="dews-mobile-customContainer dews-mobile-component">
    <container-content :control-type="controlType">

    </container-content>
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

.dews-mobile-customContainer{
  min-height: 100px;
  background: red;
}

</style>
