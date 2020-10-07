<template>
  <div class="main-designer dews-mobile-component">
    <slot></slot>
  </div>
</template>

<script>
  import GlobalService from "@/service/GlobalService";

  export default {
    name: 'main-designer',
    data() {
      return {
        designerElement: '',
        id: '',
        uid: ''
      }
    },
    mounted() {
      /*
      const uid = GlobalService.createUid('canvas');
      this.designerElement = document.querySelector('.main-designer');
      this.designerElement.setAttribute('uid', uid);
      this.uid = uid;
       */
      GlobalService.selectService();
    }
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 0;
  }

  .main-designer {
    position: relative;
    height: 645px;
    margin: 0 22px 0 21px;
    padding: 10px 0;
    background-color: #efeff4;
    overflow: auto;
  }
</style>
