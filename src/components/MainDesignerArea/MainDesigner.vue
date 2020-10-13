<template>
  <div :class="designerLayout" class="main-designer dews-mobile-component">
    <slot></slot>
  </div>
</template>

<script>
  import GlobalService from "@/service/GlobalService";

  export default {
    name: 'main-designer',
    data() {
      return {
        designerLayout: this.$store.state.designerLayout,
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
    },
    computed: {
      designerSize: function() {
        return this.$store.getters.designerSizeCheck
      }
    },
    watch: {
      designerSize: function(state) {
        this.designerLayout = state;
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 0;
  }
  .main-designer {
    position: relative;
    padding: 10px 0;
    background-color: #efeff4;
    overflow: auto;
  }

  .designer-smartPhone {
    height: 625px;
    margin: 0 24px 0 21px;
  }

  .designer-tabletM {
    height: 892px;
    margin: 0 23px 0 20px;
  }

  .designer-tabletL {
    height: 628px;
    margin: 0 22px 0 21px;
  }
</style>
