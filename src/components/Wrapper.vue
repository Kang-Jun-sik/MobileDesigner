<template>
  <div class="mobile-wrapper">
    <control-list-wrapper ref="controlListWrapper"></control-list-wrapper>
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

export default {
  name: 'mobile-wrapper',
  components: {
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
          'componentList', 'pickerList', 'etcList'].includes(source.id);
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

    window.drake.containers.push(_designer.mainDesigner.$el, _designer.areaList, _designer.containerList,
        _designer.buttonList, _designer.componentList, _designer.pickerList, _designer.etcList);

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
        store.commit('addItem', component);

        CreateService.sendCreateMessage(component.$el);
        if (component.hasChildControl) {
          this.setControlChild(component);
        }
        ContextMenuService.getContextMenu(component.$el);
      } else {
        element = element.classList.contains('dews-mobile-component') ? element : element.querySelector('.dews-mobile-component');
        ChangePositionService.sendChangePositionMessage(element, target);
      }
    },
    /*
    * Container Drop 후, container-button, container-content Create Message
    * */
    setControlChild(component) {
      Array.from(component.$children).forEach(child => {
        store.commit('addItem', child);
        if (child.$children) {
          this.setControlChild(child);
        }
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.mobile-wrapper {
  //padding: 0;
  //display: grid;
  //grid-gap: 10px;
  //grid-template-columns: 150px 1fr;
  color: #444;
}
</style>
