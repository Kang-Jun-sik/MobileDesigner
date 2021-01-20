<template>
  <div :uid="uid" :class="designerLayout" class="main-designer dews-mobile-component">
    <div class="main-designer-bg" ref="mainDesigner">
      <slot></slot>
    </div>
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
    this.$store.commit('setDesigner', this.$refs.mainDesigner);
    GlobalService.keyBinding();
    SelectService.selectControlEvent(); //메인 디자이너에 컨트롤 선택 이벤트 추가
  },
  computed: {
    ...mapGetters({
      designerLayout: "designerSize"
    })
  },
}
</script>

<style lang="scss" scoped>
  .main-designer {
    position: relative;
    background-color: #efeff4;
  }
  .main-designer-bg {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    padding: 12px 5px 5px 9px;
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

  .designer-style {
    .main-designer {
      overflow: visible;
      padding: 0;
    }
    .main-designer-bg {
      overflow-y: scroll;
      height: 100%;
      padding: 12px 10px 5px 10px;
    }

    .designer-smartPhone {
      position: relative;
      height: calc(100vh - 20px - 76px - 56px - 20px - 2px - 20px);
      margin: 0;
    }
    .designer-tabletM {
      position: relative;
      height: calc(100vh - 20px - 76px - 56px - 20px - 2px - 20px);
      margin: 0;
    }
    .designer-tabletL {
      position: relative;
      height: calc(100vh - 20px - 76px - 56px - 20px - 2px - 20px);
      margin: 0;
    }
  }
</style>
