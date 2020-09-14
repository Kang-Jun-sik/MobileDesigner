<template>
  <div class="main-designer-wrapper">
    <div id="main-designer" ref="designerElement">
      <slot></slot>
      <button-tab-bar></button-tab-bar>
    </div>
  </div>
</template>

<script>
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";
import ButtonTabBar from "@/components/ButtonTabBar";
import NavigationBar from "@/components/NavigationBar";

export default {
  name: 'mainDesigner-wrapper',
  components: {ButtonTabBar},
  data() {
    return {
      mainDesigner: ''
    }
  },
  created() {
    // mobileDesignerToIDE("create","button create test");
  },
  mounted() {
    this.mainDesigner = this.$refs.designerElement;
    this.$store.commit('findDesigner', this.mainDesigner);
  },
  computed: {}
}
</script>

<style lang="scss">
  div {
    padding: 0;
  }

  .main-designer-wrapper {
    display: inline-block;
    position: relative;
    width: 700px;
    height: 950px;
    border: 40px solid #121212;
    border-width: 55px 7px;
    border-radius: 40px;
    margin: 10px 0;
    overflow: auto;
    transition: all 0.5s ease;
    animation: fadein 2s;

    #main-designer {
      position: relative;
      padding: 10px 0;
      height: 100%;
      background-color: #efefef;

      .ui-selected{
        border: 3px dotted;
      }
    }
  }
</style>
