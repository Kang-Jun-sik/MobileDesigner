<template>
  <button class="dews-mobile-button" @click="buttonClick">Button</button>
</template>

<script>
  export default {
    name: 'button-component',
    methods: {
      buttonClick() {
        console.log('click!')
      }
    }
  }
</script>

<style lang="scss">
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
    cursor: default;
  }
</style>
