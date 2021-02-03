<template>
  <div :uid="uid" :class="designerLayout" class="main-designer dews-mobile-component">
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GlobalService from "@/service/GlobalService";
import SelectService from "@/service/SelectService";
import CreateService from "@/service/CreateService";

export default {
  name: 'main-designer',
  data() {
    return {
      designerElement: '',
      id: '',
      uid: ''
    }
  },
  mounted() {
    this.uid = CreateService.createUid('main-designer');
    GlobalService.keyBinding();
    SelectService.selectControlEvent(); //메인 디자이너에 컨트롤 선택 이벤트 추가
  },
  computed: {
    ...mapGetters({
      designerLayout: "getDesignerSize"
    })
  },
}
</script>

<style lang="scss" scoped>
  .main-designer {
    position: relative;
    padding: 12px 6px 5px 9px;
    background-color: #efeff4;
    overflow-y: scroll;
  }

  .designer-smartPhone {
    height: 626px;
    //margin: 0 24px 0 21px;
    margin: 0 26px 0 24px;
  }

  .designer-tabletM {
    height: 892px;
    //margin: 0 23px 0 20px;
    margin: 0 33px 0 20px;
  }

  .designer-tabletL {
    height: 629px;
    margin: 0 22px 0 21px;
  }
</style>
