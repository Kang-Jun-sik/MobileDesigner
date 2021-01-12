<template>
  <div class="control-list">
    <area-list ref="areaList"></area-list>
    <container-list ref="containerList"></container-list>
    <component-list ref="componentList"></component-list>
    <button-list ref="buttonList"></button-list>
    <picker-list ref="pickerList"></picker-list>
    <etc-list ref="etcList"></etc-list>
  </div>
</template>

<script>
  import ContainerList from "@/components/ControlListArea/List/ContainerList";
  import ComponentList from "@/components/ControlListArea/List/ComponentList";
  import EtcList from "@/components/ControlListArea/List/EtcList";
  import AreaList from "@/components/ControlListArea/List/AreaList";
  import PickerList from "@/components/ControlListArea/List/PickerList";
  import ButtonList from "@/components/ControlListArea/List/ButtonList";
  export default {
    name: 'control-list',
    components: {ButtonList, PickerList, AreaList, EtcList, ComponentList, ContainerList},
  }
</script>

<style lang="scss" scoped>
</style>
