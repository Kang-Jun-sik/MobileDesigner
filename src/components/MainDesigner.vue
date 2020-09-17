<template>
  <div id="mainDesignerWrapper" class="main-designer-wrapper">
    <div id="mainDesigner" class="main-designer dews-mobile-component" ref="designerElement">
      <slot></slot>
    </div>
    <button-tab-bar></button-tab-bar>
  </div>
</template>

<script>
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";
import ButtonTabBar from "@/components/ButtonTabBar";
import NavigationBar from "@/components/NavigationBar";
import GlobalService from "@/service/GlobalService";

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

    const uid = GlobalService.uuidv4();
    this.mainDesigner.id = uid;
    GlobalService.selectService();
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
    padding-bottom: 45px !important;
    margin: 10px 0;
    transition: all 0.5s ease;
    animation: fadein 2s;

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

    .ui-selected{
      border: 3px dotted;
    }
  }
</style>
