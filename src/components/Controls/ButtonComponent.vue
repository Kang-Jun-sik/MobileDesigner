<template>
  <div
      :uid="uid"
      class="dews-mobile-button dews-mobile-component"
      ref="mobileButton"
      :style="buttonStyle"
  >{{ title }}</div>
</template>

<script>
  import ControlService from "@/service/ControlService";

  export default {
    data() {
      return {
        uid: '',
        title: 'Button',
        buttonStyle: {
          width: '',
          height: ''
        }
      }
    },
    created() {
      this.uid = ControlService.createUid('mobile-button');
    },
    methods: {
      setWidth(width) {
        this.buttonStyle.width = width + 'px';
      },
      setHeight(height) {
        this.buttonStyle.height = height + 'px';
      },
    }
  }
</script>

<style lang="scss" scoped>
  div{
    padding: 0;
  }
  .dews-mobile-button {
    width: 68px;
    height: 28px;
    min-width: 61px;
    min-height: 24px;
    border-radius: 4px;
    border: 1px solid #a6a6a6;
    background: linear-gradient(#fff, #f0f0f0);
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.8;
    display: inline-block;
    position: relative;
    text-align: center;
    vertical-align: top;
    letter-spacing: -0.5px;
    margin: 5px 7px;
    cursor: pointer;

    .ui-resizable-handle {
      padding: 0;
    }
  }
</style>
