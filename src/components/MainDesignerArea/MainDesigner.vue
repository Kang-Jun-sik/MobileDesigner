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
      this.designerElement = document.querySelector('.main-designer');
      const uid = GlobalService.uuidv4();
      this.uid = uid
      GlobalService.selectService();
    }
  }
</script>

<style lang="scss" scoped>
  .main-designer {
    position: relative;
    padding: 10px 0 0;
    height: 100%;
    background-color: #efeff4;
    overflow: auto;

    .ui-selected{
      border: 3px dotted;
    }
  }
</style>
