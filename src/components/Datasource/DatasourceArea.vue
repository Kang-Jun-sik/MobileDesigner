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
    this.$store.commit('SET_CONTROL_LIST', datasourceArea);
  },
}
</script>

<style lang="scss" scoped>
.datasource-area {
  height: 50px;
  margin-left: 150px;
  background-color: #b3bfd1;
}
.designer-style {
  .datasource-area {
    position: absolute !important;
    z-index: 10;
    top: 0;
    left: 167px;
    width: 100%;
    max-width: 1190px;
    margin-left: 0;
  }
}

</style>
