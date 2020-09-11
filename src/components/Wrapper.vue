<template>
  <div class="mobile-wrapper">
    <main-designer-wrapper></main-designer-wrapper>
    <thumbnail-designer-wrapper></thumbnail-designer-wrapper>
    <control-list-wrapper></control-list-wrapper>
  </div>
</template>

<script>
  import Vue from 'vue';
  import MainDesignerWrapper from "@/components/MainDesigner";
  import ThumbnailDesignerWrapper from "@/components/ThumbnailDesigner";
  import ControlListWrapper from "@/components/ControlList";
  import dragula from "dragula";
  import ButtonComponent from "@/components/Controls/ButtonComponent";

  export default {
    name: 'mobile-wrapper',
    data () {
      return {
        buttonComponent: ButtonComponent,
        wrapperCount: 1
      }
    },
    components: {
      MainDesignerWrapper,
      ThumbnailDesignerWrapper,
      ControlListWrapper,
    },
    mounted() {
      const button = Vue.extend(ButtonComponent);
      const buttonControl = new button();
      buttonControl.$mount();

      const buttonEl = buttonControl.$el;

      let drake = dragula({
        revertOnSpill: true,
        copy: function(el, source) {
          return source.id === 'mobileContainer' || source.id === 'mobileComponent' || source.id === 'mobileEtc'
        },
        accepts: function (el, target){
          if (target.closest('#main-designer')) {
            return true
          }
          return false
        }
      })
      .on('drag', function(el, target) {
      })
      .on('drop', function(el, target) {
        if (el.classList.contains('component-button')){
          el = buttonEl;
        }
        console.log(el, buttonEl)
      })
      drake.containers.push(this.$store.state.mainDesigner, this.$store.state.containerElement,
          this.$store.state.componentElement, this.$store.state.etcElement);

      window.drake = drake;
      console.log(drake);
    }
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 0;
  }

  .mobile-wrapper {
    padding: 0;
    margin: 10px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 2fr 1fr 1fr;
    background-color: #fff;
    color: #444;
  }
</style>
