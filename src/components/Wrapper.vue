<template>
  <div class="mobile-wrapper">
    <control-list-wrapper ref="controlListWrapper"></control-list-wrapper>
    <main-designer-wrapper ref="designerWrapper"></main-designer-wrapper>
  </div>
</template>

<script>
import dragula from "dragula";
import axios from 'axios'

import MainDesignerWrapper from "@/components/MainDesignerArea/MainDesignerWrapper";
import ControlListWrapper from "@/components/ControlListArea/ControlListWrapper";
import componentAcceptsCheck from "@/service/AcceptsCheckService";
import CreateService from "@/service/CreateService";
import ContextMenuService from "@/service/ContextMenuService";
import SelectService from "@/service/SelectService";

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
        if (target.classList.contains('dews-box-content') && target.querySelector('.dews-container')) {
          return;
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
        _designer.componentList, _designer.etcList);
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
    * 드롭할 때, 컴포넌트 호출 및 $el로 replace 처리
    * */
    drop(element, target) {
      if (!element.classList.contains('dews-control-list')) return

      const componentName = element.textContent.replace(/\s+/g, '');
      const component = CreateService.addComponent(componentName);

      if (element.classList.contains('component-box') && target.classList.contains('form-field')) {
        const li = document.createElement('li');
        li.appendChild(component.$el);
        element.replaceWith(li);
      } else {
        element.replaceWith(component.$el);
      }
      this.$store.commit('addItem', component);

      ContextMenuService.getContextMenu(component.$el);
      CreateService.sendCreateMessage(component.$el);
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
