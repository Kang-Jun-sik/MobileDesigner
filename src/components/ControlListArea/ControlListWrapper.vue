<template>
  <div class="controlList-wrapper">
    <mobile-layout ref="mobileLayout"></mobile-layout>
    <control-list ref="controlList"></control-list>
  </div>
</template>

<script>
import MobileLayout from "@/components/ControlListArea/MobileLayout";
import ControlList from "@/components/ControlListArea/ControlLilst";

export default {
  name: 'controlList-wrapper',
  components: {ControlList, MobileLayout},
}
</script>

<style lang="scss" scoped>
  div {
    padding: 0;
  }

  .controlList-wrapper {
    width: 150px;
    min-height: 852px;
    color: #000000;
    background-color: #f3f6fa;
  }
</style>
