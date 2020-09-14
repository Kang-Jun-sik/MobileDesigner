<template>
  <div class="mobile-wrapper">
    <main-designer-wrapper></main-designer-wrapper>
    <thumbnail-designer-wrapper></thumbnail-designer-wrapper>
    <control-list-wrapper></control-list-wrapper>
  </div>
</template>

<script>
import Vue from 'vue'
import MainDesignerWrapper from "@/components/MainDesigner";
import ThumbnailDesignerWrapper from "@/components/ThumbnailDesigner";
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
    const designer = this.$store.state.mainDesigner;
    window.drake = dragula({
      revertOnSpill: true,
      copy: function (el, source) {
        return source.id === 'mobileContainer' || source.id === 'mobileComponent' || source.id === 'mobileEtc';
      },
      accepts: function (el, target) {
        //if (target.closest('#main-designer') && !el.classList.contains('ui-resizable-resizing')) {
        if (target.closest('#main-designer') && !el.classList.contains('ui-resizable-resizing')) {
          return true;
        }
        return true;
      }
    }).on('drop', function (el, target) {

      if (el.classList.contains('controlName')) {
        // (1) el 정보얻고
        // (2) 이 정보로 동적으로 컴포넌트 생성
        // (3) 메인디자이너에 추가
        const uid = GlobalService.CREATEUID.uuidv4();
        var instance = GlobalService.MAKECOMPONENT.mobileComponent(el.textContent);
        instance.classList.add(uid);
        el.replaceWith(instance);
        GlobalService.RESIZE.canResize(uid);
        GlobalService.SELECTION2.selectService(uid);

      } else {
          console.log('test');
      }
    })

    window.drake.containers.push(this.$store.state.mainDesigner);
    window.drake.containers.push(this.$store.state.containerElement);
    window.drake.containers.push(this.$store.state.componentElement);
    window.drake.containers.push(this.$store.state.etcElement);
    console.log(window.drake);
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
