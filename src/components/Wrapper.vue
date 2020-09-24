<template>
  <div class="mobile-wrapper">
    <main-designer-wrapper ref="designerWrapper"></main-designer-wrapper>
    <thumbnail-designer-wrapper ref="thumbnailWrapper"></thumbnail-designer-wrapper>
    <control-list-wrapper ref="controlListWrapper"></control-list-wrapper>
  </div>
</template>

<script>
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";
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
      _this.drop(el, target);
    })
    window.drake.containers.push(this.$store.state.mainDesigner.$el);
    window.drake.containers.push(this.$store.state.containerElement);
    window.drake.containers.push(this.$store.state.componentElement);
    window.drake.containers.push(this.$store.state.etcElement);
  },
  methods: {
    drop(el, target) {
      if (el.classList.contains('controlName')) {
        //sample Code
        let idTemp = el.textContent.replace(/\s+/g, '');
        if (idTemp == 'Button')
          idTemp = 'mButton';
        else if (idTemp == 'SearchContainer')
          idTemp = 'mLayout';

        const uid = GlobalService.createUid(idTemp);
        const instance = GlobalService.addComponent(el.textContent);
        instance.uid = uid;
        window.Vue.$store.commit('addItem', instance);
        instance.$el.setAttribute('uid', uid);
        el.replaceWith(instance.$el);
        let parentNode = instance.$el.parentElement.closest('.dews-mobile-component');
        let parentUid = parentNode.getAttribute('uid');
        //mobileDesignerToIDE("create", instance.$el, parentUid);
      }
    },
    acceptCheck(el, target, source) {
      //드래그해서 컨트롤 생성시 체크
      if (['mobileContainer', 'mobileComponent', 'mobileEtc'].includes(source.id)) {
        if (target.closest('.main-designer') && !el.classList.contains('ui-resizable-resizing')) {
          // 메인디자이너에 컨트롤 생성시 컨트롤별 조건 체크

          //◎ Button
          if (el.classList.contains('dews-mobile-button')) {
            if (target.classList.contains('search-container-content'))
              return true;
          }
          //◎ Search Container
          else if (el.classList.contains('dews-mobile-searchContainer')) {
            if (target.classList.contains('main-designer')) {
              return true;
            }
          }
          return false;
        }
      }
      //기존 생성된 컨트롤 재배치시 체크
      else {
        if (el.closest('.dews-mobile-component') && el.classList.contains('ui-selected') && !el.classList.contains('ui-resizable-resizing')) {

          //◎ Button
          if (el.classList.contains('dews-mobile-button')) {
            if (target.classList.contains('search-container-content')) {
              return true;
            }
          }
          //◎ Search Container
          else if (el.classList.contains('dews-mobile-searchContainer')) {
            if (target.classList.contains('main-designer')) {
              return true;
            }
          }
        }
      }
      return false;
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
