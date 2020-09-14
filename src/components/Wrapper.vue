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
        if (target.closest('.main-designer') && !el.classList.contains('ui-resizable-resizing')) {
          return true;
        }
        return false;
      }
    }).on('drop', function (el, target) {
      if (el.classList.contains('controlName')) {
        // (1) el 정보얻고
        // (2) 이 정보로 동적으로 컴포넌트 생성
        // (3) 메인디자이너에 추가
        const uid = GlobalService.uuidv4();
        const instance = GlobalService.addComponent(el.textContent);
        instance.classList.add(uid);
        el.replaceWith(instance);

        GlobalService.canResize(uid);
        GlobalService.selectService(uid);
      } else {
        console.log('test');
      }
    })

    // *** 컨트롤 리사이즈 ***
    // (1) 리사이즈가 가능한 컨트롤인지 먼저 확인한다. (특정 class Name으로 구분하여 표현)
    // (2) uid를 부여한다
    // (3) resizeable 함수를 호출한다.
    /*
    el.classList.add(GlobalService.CREATEUID.uuidv4());
    GlobalService.RESIZE.canResize(el);
    console.log(el, target);
     */

    window.drake.containers.push(this.$store.state.mainDesigner);
    window.drake.containers.push(this.$store.state.containerElement);
    window.drake.containers.push(this.$store.state.componentElement);
    window.drake.containers.push(this.$store.state.etcElement);
    console.log(window.drake);

  },
  methods: {}
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
