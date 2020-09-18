<template>
  <div class="mobile-wrapper">
    <main-designer-wrapper ref="designerWrapper"></main-designer-wrapper>
    <thumbnail-designer-wrapper ref="thumbnailWrapper"></thumbnail-designer-wrapper>
    <control-list-wrapper ref="controlListWrapper"></control-list-wrapper>
  </div>
</template>

<script>
import Vue from 'vue'
import MainDesignerWrapper from "@/components/MainDesignerArea/MainDesignerWrapper";
import ThumbnailDesignerWrapper from "@/components/ThumbnailArea/ThumbnailDesigner";
import ControlListWrapper from "@/components/ControlList";
import dragula from "dragula";
import GlobalService from "@/service/GlobalService";

export default {
  name: 'mobile-wrapper',
  components: {
    MainDesignerWrapper,
    ThumbnailDesignerWrapper,
    ControlListWrapper,
  },
  mounted() {
    const _this = this;
    window.drake = dragula({
      revertOnSpill: true,
      copy: function (el, source) {
        return source.id === 'mobileContainer' || source.id === 'mobileComponent' || source.id === 'mobileEtc';
      },
      accepts: function (el, target, source) {
        return _this.acceptCheck(el, target, source);
      }
    }).on('drop', function (el, target) {
      if (el.classList.contains('controlName')) {
        const uid = GlobalService.createUid(el.textContent);
        const instance = GlobalService.addComponent(el.textContent);
        instance.uid = uid;
        _this.$store.commit('addItem', instance);
        instance.$el.setAttribute('uid',uid);
        el.replaceWith(instance.$el);
      } else {
        console.log('test');
      }
    })
    window.drake.containers.push(this.$store.state.mainDesigner.$el);
    window.drake.containers.push(this.$store.state.containerElement);
    window.drake.containers.push(this.$store.state.componentElement);
    window.drake.containers.push(this.$store.state.etcElement);
    console.log(window.drake);
  },
  methods: {
    acceptCheck(el, target, source) {
      if (['mobileContainer', 'mobileComponent', 'mobileEtc'].includes(source.id)) {
        if (target.closest('.main-designer') && !el.classList.contains('ui-resizable-resizing')) {
          return true
        }
      } else {
        console.log(el, Boolean(el.closest('.dews-mobile-component')), target, source)
        if (el.closest('.dews-mobile-component') && el.classList.contains('ui-selected') && !el.classList.contains('ui-resizable-resizing')) {
          console.log('?????')
          return true
        }
      }
      return false
    }
  },
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
