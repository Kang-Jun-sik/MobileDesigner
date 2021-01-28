<template>
  <div :uid="uid" id="datasourceArea" class="datasource-area dews-mobile-component" ref="area">
    <slot></slot>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'datasource-area',
  data() {
    return {
      uid: '',
    }
  },
  create() {
    this.uid = CreateService.createUid('datasource-area');
  },
  mounted() {
    const datasourceArea = {
      name: 'datasourceArea',
      control: document.querySelector('#datasourceArea')
    }
    this.$store.commit('setControlList', datasourceArea);
  },
}
</script>

<style lang="scss" scoped>
.datasource-area {
  height: 50px;
  margin-left: 150px;
  padding-left: 10px !important;
  background-color: #b3bfd1;
}
</style>
