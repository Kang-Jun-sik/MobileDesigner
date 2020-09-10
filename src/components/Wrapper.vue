<template>
  <div class="mobile-wrapper">
    <main-designer-wrapper></main-designer-wrapper>
    <thumbnail-designer-wrapper></thumbnail-designer-wrapper>
    <control-list-wrapper></control-list-wrapper>
  </div>
</template>

<script>
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
    window.drake = dragula({
      revertOnSpill: true,
      copy: function (el, source) {
        return source.id === 'mobileContainer' || source.id === 'mobileComponent' || source.id === 'mobileEtc';
      },
      accepts: function (el, target) {
        if (target.closest('#main-designer')) {
          return true;
        }
        return false;
      }
    }).on('drop', function (el, target) {


      // *** 컨트롤 리사이즈 ***
      // (1) 리사이즈가 가능한 컨트롤인지 먼저 확인한다.
      // (2) uid를 부여한다
      // (3) resizeable 함수를 호출한다.

      //(1)
      el.classList.add(GlobalService.CREATEUID.uuidv4());//(2)
      GlobalService.RESIZE.canResize(el);//(3)
      console.log(el, target);
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
