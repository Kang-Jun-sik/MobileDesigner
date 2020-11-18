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
import ControlService from "@/service/ControlService";
import ContextMenuService from "@/service/ContextMenuService";
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";
import UndoRedoService from "@/service/UndoRedoService";

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
        return source.id === 'areaList' || source.id === 'containerList' || source.id === 'componentList' || source.id === 'etcList';
      },
      accepts: function (el, target, source) {
        return _this.acceptCheck(el, target, source);
      }
    }).on('drop', function (el, target) {
      _this.drop(el, target);
    })
    window.drake.containers.push(this.$store.state.mainDesigner.$el);
    window.drake.containers.push(this.$store.state.areaElement);
    window.drake.containers.push(this.$store.state.containerElement);
    window.drake.containers.push(this.$store.state.componentElement);
    window.drake.containers.push(this.$store.state.etcElement);
  },
  methods: {
    /*
    * 드롭할 때, 컴포넌트 호출 및 $el로 replace 처리
    * */
    drop(el, target) {
      if (el.classList.contains('dewsControl')) {
        // 컴포넌트 추가 후, $el로 replace
        const componentName = el.textContent.replace(/\s+/g, '');
        const component = ControlService.addComponent(componentName);
        this.$store.commit('addItem', component);
        el.replaceWith(component.$el);


        // 부모 노드 찾기
        let parentNode = component.$el.parentElement.closest('.dews-mobile-component');
        let parentUid = parentNode.getAttribute('uid');
        ContextMenuService.getContextMenu(component.$el);

        // IDE로 create 전송
        mobileDesignerToIDE("create", component.$el, parentUid);
      }
    },

    /*
    * 드래그해서 컨트롤 생성시 체크
    * */
    acceptCheck(el, target, source) {
      const controlList = ['areaList', 'containerList', 'componentList', 'etcList'];
      if (controlList.includes(source.id)) {
        // 컨트롤 리스트에서 메인 디자이너로 Drag&Drop 할 경우
        if (target.closest('.main-designer') && !el.classList.contains('ui-resizable-resizing')) {
          /*
          * 메인디자이너에 컨트롤 생성시 컨트롤별 조건 체크
          * */
          // Button
          if (el.classList.contains('dews-mobile-button')) {
            if (target.classList.contains('search-container-content'))
              return true;
          }
              // Area Panel
              /*
              else if (el.classList.contains('dews-mobile-areaPanel')) {
                if (target.classList.contains('main-designer')) {
                  return true;
                }
              }
              */
          // Area Box
          else if (el.classList.contains('dews-mobile-areaBox')) {
            if (target.classList.contains('main-designer')) {
              return true;
            } else if (target.classList.contains('dews-mobile-areaItem')) {
              return true;
            }
          }
          // Search Container
          else if (el.classList.contains('dews-mobile-searchContainer')) {
            if (target.classList.contains('dews-box-content-wrap')) {
              return true;
            }
          }
          // Form Container
          else if (el.classList.contains('dews-mobile-formContainer')) {
            if (target.classList.contains('main-designer')) {
              return true;
            } else if (target.classList.contains('dews-box-content-wrap')) {
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
          //@ Area Box
          else if (el.classList.contains('dews-mobile-areaBox')) {
            if (target.classList.contains('dews-mobile-areaItem')) {
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
