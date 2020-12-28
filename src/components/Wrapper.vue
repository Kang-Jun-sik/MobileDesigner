<template>
  <div class="mobile-wrapper">
    <control-list-wrapper ref="controlListWrapper"></control-list-wrapper>
    <main-designer-wrapper ref="designerWrapper"></main-designer-wrapper>
  </div>
</template>

<script>
import dragula from "dragula";
import MainDesignerWrapper from "@/components/MainDesignerArea/MainDesignerWrapper";
import ControlListWrapper from "@/components/ControlListArea/ControlListWrapper";

import componentAcceptsCheck from "@/service/AcceptsCheckService";
import CreateService from "@/service/CreateService";
import ContextMenuService from "@/service/ContextMenuService";
import ResizeService from "@/service/ResizeService";

export default {
  name: 'mobile-wrapper',
  components: {
    MainDesignerWrapper,
    ControlListWrapper,
  },
  mounted() {
    const _this = this;
    const _designer = this.$store.state.designer;

    window.drake = dragula({
      revertOnSpill: true,
      copy: function (el, source) {
        return ['areaList', 'containerList', 'componentList', 'etcList'].includes(source.id);
      },
      accepts: function (el, target, source) {
        return componentAcceptsCheck(el, target);
      }
    }).on('drop', function (el, target) {
      _this.drop(el, target);
      if (window.selectedItem) {
        ResizeService.setPosition(window.selectedItem);
      }
    })

    window.drake.containers.push(_designer.mainDesigner.$el, _designer.areaList, _designer.containerList,
        _designer.componentList, _designer.etcList);
  },
  methods: {
    /*
    * 드롭할 때, 컴포넌트 호출 및 $el로 replace 처리
    **/
    drop(el, target) {
      if (!el.classList.contains('dews-control-list')) return

      const componentName = el.textContent.replace(/\s+/g, '');
      const component = CreateService.addComponent(componentName);
      this.$store.commit('addItem', component);
      el.replaceWith(component.$el);

      ContextMenuService.getContextMenu(component.$el);
      CreateService.sendCreateMessage(component.$el);
    },

    /*
    * 드래그해서 컨트롤 생성시 체크
    **/
    acceptCheck(el, target, source) {
      const controlList = ['areaList', 'containerList', 'componentList', 'etcList'];
      if (controlList.includes(source.id)) {
        // 컨트롤 리스트에서 메인 디자이너로 Drag&Drop 할 경우
        if (target.closest('.main-designer') && !el.classList.contains('ui-resizable-resizing')) {
          /*
          * 메인디자이너에 컨트롤 생성시 컨트롤별 조건 체크
          **/
          // Button
          if (el.classList.contains('dews-mobile-button')) {
            if (target.classList.contains('search-container-content'))
              return true;
          }
          // Area Box
          else if (el.classList.contains('dews-mobile-box')) {
            if (target.classList.contains('main-designer')) {
              return true;
            } else if (target.classList.contains('dews-mobile-item')) {
              return true;
            }
          }
          // Search Container
          else if (el.classList.contains('dews-mobile-searchContainer')) {
            if (target.classList.contains('dews-box-content')) {
              return true;
            }
          }
          // Form Container
          else if (el.classList.contains('dews-mobile-formContainer')) {
            if (target.classList.contains('dews-box-content')) {
              return true;
            }
          }
          // List Container
          else if (el.classList.contains('dews-mobile-listContainer')) {
            if (target.classList.contains('main-designer')) {
              return true;
            }
          }
          return false;
        }
      } else {
        // 메인 디자이너에서 기존 생성된 컨트롤을 재배치할 경우
        if (el.closest('.dews-mobile-component') && el.classList.contains('selected') && !el.classList.contains('ui-resizable-resizing')) {
          //◎ Button
          if (el.classList.contains('dews-mobile-button')) {
            if (target.classList.contains('search-container-content')) {
              return true;
            }
          }
          //◎ Search Container
          else if (el.classList.contains('dews-mobile-searchContainer')) {
            if (target.classList.contains('dews-box-content')) {
              return true;
            }
          }
          //@ Area Box
          else if (el.classList.contains('dews-mobile-box')) {
            if (target.classList.contains('dews-mobile-item')) {
              return true;
            } else if (target.classList.contains('main-designer')) {
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
