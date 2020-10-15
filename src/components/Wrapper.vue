<template>
  <div class="mobile-wrapper">
    <control-list-wrapper ref="controlListWrapper"></control-list-wrapper>
    <main-designer-wrapper ref="designerWrapper"></main-designer-wrapper>
  </div>
</template>

<script>
import MainDesignerWrapper from "@/components/MainDesignerArea/MainDesignerWrapper";
import ControlListWrapper from "@/components/ControlListArea/ControlListWrapper";
import dragula from "dragula";
import GlobalService from "@/service/GlobalService";
import ContextMenuService from "@/service/ContextMenuService";
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";

export default {
  name: 'mobile-wrapper',
  components: {
    MainDesignerWrapper,
    ControlListWrapper,
  },
  mounted() {
    const _this = this;
    window.drake = dragula({
      revertOnSpill: true,
      copy: function (el, source) {
        return source.id === 'containerList' || source.id === 'componentList' || source.id === 'etcList';
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
      if (el.classList.contains('dewsControl')) {
        let componentName = el.textContent.replace(/\s+/g, '');
        if (componentName === 'Button')
          componentName = 'mobile-button';
        else if (componentName === 'SearchContainer')
          componentName = 'mobile-area';

        // 컴포넌트 추가 후, $el로 replace
        const component = GlobalService.addComponent(el.textContent);
        this.$store.commit('addItem', component);
        el.replaceWith(component.$el);

        // 부모 노드 찾기
        let parentNode = component.$el.parentElement.closest('.dews-mobile-component');
        let parentUid = parentNode.getAttribute('uid');
        ContextMenuService.getContextMenu(component.$el);

        mobileDesignerToIDE("create", component.$el, parentUid);
      }
    },

    acceptCheck(el, target, source) {
      //드래그해서 컨트롤 생성시 체크
      if (['containerList', 'componentList', 'etcList'].includes(source.id)) {
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
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 150px 1fr;
    color: #444;
  }
</style>
