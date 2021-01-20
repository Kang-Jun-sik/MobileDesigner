<template>
  <div class="controlList-wrapper">
    <div class="controlList-wrapper-scroll">
      <div class="designer-change-option">
      <span class="toggle-control">
        <span class="toggle-text">작업모드</span>
          <label for="toggleButton">
              <input type="checkbox" id="toggleButton">
              <span class="toggle-shape"></span>
          </label>
        </span>
      </div>
      <mobile-layout ref="mobileLayout"></mobile-layout>
      <control-list ref="controlList"></control-list>
    </div>
  </div>
</template>

<script>
import MobileLayout from "@/components/ControlListArea/MobileLayout";
import ControlList from "@/components/ControlListArea/ControlList";

export default {
  name: 'controlList-wrapper',
  components: {ControlList, MobileLayout},
}
</script>

<style lang="scss" scoped>
</style>
