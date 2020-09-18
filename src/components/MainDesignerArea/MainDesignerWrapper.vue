<template>
  <div id="mainDesignerWrapper" class="main-designer-wrapper">
    <main-designer ref="mainDesigner"></main-designer>
    <button-tab-bar ref="buttonTabBar"></button-tab-bar>
  </div>
</template>

<script>
import ButtonTabBar from "@/components/MainDesignerArea/ButtonTabBar";
import NavigationBar from "@/components/MainDesignerArea/NavigationBar";
import GlobalService from "@/service/GlobalService";
import MainDesigner from "@/components/MainDesignerArea/MainDesigner";

export default {
  name: 'main-designer-wrapper',
  components: {MainDesigner, ButtonTabBar},
  data() {
    return {

    }
  },
  created() {
  },
  mounted() {
    this.$store.commit('findDesigner', this.$refs.mainDesigner);
    this.$store.commit('addItem', this.$refs.mainDesigner);
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
    width: 760px;
    height: 950px;
    border: 40px solid #121212;
    border-width: 55px 7px;
    border-radius: 40px;
    padding-bottom: 45px !important;
    margin: 10px 0;
    transition: all 0.5s ease;
    animation: fadein 2s;

    .ui-selected{
      border: 3px dotted;
    }
  }
</style>
