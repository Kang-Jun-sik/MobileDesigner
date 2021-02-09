<template>
  <div class="mobile-wrapper">
    <control-list-wrapper ref="controlListWrapper"></control-list-wrapper>
    <datasource-area></datasource-area>
    <main-designer-wrapper ref="designerWrapper"></main-designer-wrapper>
  </div>
</template>

<script>
import store from "@/store/index";
import dragula from "dragula";
import axios from 'axios'

import MainDesignerWrapper from "@/components/MainDesignerArea/MainDesignerWrapper";
import ControlListWrapper from "@/components/ControlListArea/ControlListWrapper";
import componentAcceptsCheck from "@/service/AcceptsCheckService";
import CreateService from "@/service/CreateService";
import ContextMenuService from "@/service/ContextMenuService";
import ChangePositionService from "@/service/ChangePositionService";
import SelectService from "@/service/SelectService";
import DatasourceArea from "@/components/Datasource/DatasourceArea";
import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";

export default {
  name: 'mobile-wrapper',
  components: {
    DatasourceArea,
    MainDesignerWrapper,
    ControlListWrapper,
  },
  mounted() {
    const _this = this;
    const _designer = store.state.designer;

    window.drake = dragula({
      revertOnSpill: true,
      copy: function (el, source) {
        return ['areaList', 'containerList', 'buttonList',
          'componentList', 'pickerList', 'etcList', 'datasourceArea'].includes(source.id);
      },
      accepts: function (el, target) {
        if (componentAcceptsCheck(el, target) && target.dataset.type === 'area') {
          const containers = target.querySelectorAll(`[data-type='container']`);
          if (containers.length > 1) return false;
        }

        return componentAcceptsCheck(el, target);
      }
    })
    .on('drop', function (el, target) {
      _this.drop(el, target);
      if (window.selectedItem) {
        SelectService.setPosition(window.selectedItem);
      }
    })

    window.drake.containers.push(_designer.mainDesigner, _designer.areaList, _designer.containerList,
        _designer.buttonList, _designer.componentList, _designer.pickerList, _designer.etcList, _designer.datasourceArea);

    // axios Sample code ==> 기타 API 서버의 연동을 위한 테스트 코드 (vue.config.js Proxy Table 참조할 것)
    /*
    axios.get("/api/getList")
        .then((res) => {
          console.log('proxyRequest res', res)
        })
        .catch((error) => {
          console.log('proxyRequest error', error)
        })
    */
  },
  methods: {
    /*
    * Container Drop 후, container-button, container-content Create Message
    * */
    setControlChild(component) {
      Array.from(component.$children).forEach(child => {
        store.commit('ADD_ITEM', child);
        if (child.$children) {
          this.setControlChild(child);
        }
      });
    },

    /*
    * Datasource Drop 후, Create Message 전송
    * */
    setDatasource(component) {
      const mainDesignerArea = store.state.designer.mainDesigner;
      const dataSourceArea = store.state.designer.datasourceArea;
      const datasourceList = dataSourceArea.querySelectorAll('.dews-mobile-datasource');
      const index = Array.from(datasourceList).findIndex(control => control.getAttribute('uid') === component.uid);

      mobileDesignerToIDE({
        commandType: 'create',
        elm: component.$el,
        parentUID: mainDesignerArea.getAttribute('uid'),
        index: index
      });
    },

    /*
    * Control Drop 실행시, Control 생성 및 $el(element)로 replace 처리
    * */
    drop(element, target) {
      if (element.classList.contains('dews-control-list')) {
        const componentName = element.textContent.replace(/\s+/g, '');
        const component = CreateService.addComponent(componentName);
        let createElement;

        if (element.dataset.type === 'component-list') {
          switch (target.dataset.type) {
            case "container":
              createElement = document.createElement('li');
              createElement.appendChild(component.$el);
              element.replaceWith(createElement);
              break;
            case 'group':
              createElement = document.createElement('span');
              createElement.className = 'group-item';
              createElement.appendChild(component.$el);
              element.replaceWith(createElement);
              break;
            case 'button-group':
              component.group = true;
              element.replaceWith(component.$el);
              break;
            default:
              element.replaceWith(component.$el);
              break;
          }
        } else {
          element.replaceWith(component.$el);
        }
        store.commit('ADD_ITEM', component);
        if (component.hasChildControl) {
          this.setControlChild(component);
        }

        component.$el.classList.contains('dews-mobile-datasource') ? this.setDatasource(component)
            : CreateService.sendCreateMessage(component.$el);
        ContextMenuService.getContextMenu(component.$el);
      } else {
        element = element.classList.contains('dews-mobile-component') ? element : element.querySelector('.dews-mobile-component');
        ChangePositionService.sendChangePositionMessage(element, target);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.mobile-wrapper {
  color: #444;
}

// 확장모드
.designer-style {
  .mobile-wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    height: 100vh;
  }
}
</style>
