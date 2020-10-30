<template>
  <div :uid="uid" class="dews-mobile-add dews-mobile-component"></div>
</template>

<script>
  import ControlService from "@/service/ControlService";

  export default {
    name: 'add-button',
    data() {
      return {
        buttonAttr: false,
        uid: '',
      }
    },
    created() {
      this.uid = ControlService.createUid('mAddButton');
    }
  }
</script>

<style lang="scss" scoped>
  .dews-mobile-add {
    display: inline-block;
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-height: 24px;
    width: 24px;
    height: 24px;
    margin-right: 24px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADB/VeXAAAAzElEQVRIDc2VAQ6DMAhF3eKBvOF6hN1s7gTdbrCdoANHCdWEkhaNTRop4vvwNXEYjloppTvsCLt3RQDcir4hgXDvFVgEyB+iT5xsDIAzESsyghKJE52B5F07WdXHzyUAo8+wH9W21wXSs/U9eW6pO5dFchprrE5Anmdn+DPmxD9Q34kqYOzyUq3LHdUKW+o8JlD72l1gVOW3N5/blCFj9daAWkokb3eLDhP44mwwmssPh6x803UBh+yb4zWwAAYARpGXgwAySnih5Hz4AbMR4GjBDl8UAAAAAElFTkSuQmCC');
  }
</style>
