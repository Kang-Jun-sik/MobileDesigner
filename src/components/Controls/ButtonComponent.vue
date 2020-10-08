<template>
  <div
      class="dews-mobile-button dews-mobile-component"
      ref="mobileButton"
      :style="buttonStyle"
  >{{ title }}</div>
</template>

<script>
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
    min-width: 60px;
    min-height: 32px;
    border-radius: 2px;
    border: 1px solid #a6a6a6;
    background: linear-gradient(#fff, #f0f0f0);
    color: #000;
    font-weight: 400;
    display: inline-block;
    position: relative;
    text-align: center;
    vertical-align: top;
    letter-spacing: -0.5px;
    padding: 5px 9px;
    margin: 5px 7px;
    cursor: pointer;

    .ui-resizable-handle {
      padding: 0;
    }
  }
</style>
