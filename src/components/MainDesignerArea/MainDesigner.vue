<!--<template>-->
<!--  <div :uid="uid" :class="designerLayout" class="main-designer dews-mobile-component">-->
<!--    <div class="main-designer-bg" ref="mainDesigner">-->
<!--      <slot></slot>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div :uid="uid" :class="designerLayout" class="main-designer dews-mobile-component" ref="mainDesigner">
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
  created() {
    this.uid = CreateService.createUid('main-designer');
  },
  mounted() {
    this.$store.commit('SET_DESIGNER', this.$refs.mainDesigner);
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
  overflow-y: scroll;
  padding: 12px 6px 5px 9px;
  background-color: #efeff4;

  //.main-designer-bg {
  //  overflow-y: scroll;
  //  width: 100%;
  //  height: 100%;
  //  padding: 12px 5px 5px 9px;
  //}

  &.designer-smartPhone {
    height: 628px;
    //margin: 0 24px 0 21px;
    margin: 0 26px 0 24px;
  }
  &.designer-tabletM {
    height: 895px;
    //margin: 0 23px 0 20px;
    margin: 0 33px 0 20px;
  }
  &.designer-tabletL {
    height: 632px;
    margin: 0 22px 0 21px;
  }
}

//확장모드
.designer-style {
  .main-designer {
    overflow: visible;
    height: auto;
    padding: 12px 10px 5px 10px;
    box-shadow: 0px -10px 10px 0 rgba(0, 0, 0, 0.06);

    &.designer-smartPhone,
    &.designer-tabletM,
    &.designer-tabletL {
      position: relative;
      margin: 0;
    }

    &.designer-smartPhone {
      min-height: 508px;
    }
    &.designer-tabletM {
      min-height: 892px;
    }
    &.designer-tabletL {
      min-height: 636px;
    }
  }
}
</style>
