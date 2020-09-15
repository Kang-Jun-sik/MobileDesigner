<template>
  <div class="button-tab-bar dews-mobile-component"></div>
</template>

<script>
  export default {
    name: 'button-tab-bar'
  }
</script>

<style lang="scss">
  div {
    padding: 0;
  }
  .button-tab-bar {
    position: absolute;
    width: 100%;
    height: 45px;
    background-color: #2280ff;
    bottom: 0;
  }

  .ui-selected{
    border: 3px dotted;
  }
</style>
