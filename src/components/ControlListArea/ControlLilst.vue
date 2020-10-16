<template>
  <div class="control-list">
    <area-list ref="areaList"></area-list>
    <container-list ref="containerList"></container-list>
    <component-list ref="componentList"></component-list>
    <etc-list ref="etcList"></etc-list>
  </div>
</template>

<script>
  import ContainerList from "@/components/ControlListArea/List/ContainerList";
  import ComponentList from "@/components/ControlListArea/List/ComponentList";
  import EtcList from "@/components/ControlListArea/List/EtcList";
  import AreaList from "@/components/ControlListArea/List/AreaList";
  export default {
    name: 'control-list',
    components: {AreaList, EtcList, ComponentList, ContainerList},
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 0
  }
</style>
