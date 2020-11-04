<template>
  <div :uid="uid" :class="designerLayout" class="main-designer dews-mobile-component">
    <slot></slot>
  </div>
</template>

<script>
  import GlobalService from "@/service/GlobalService";
  import ControlService from "@/service/ControlService";

  export default {
    name: 'main-designer',
    data() {
      return {
        designerLayout: this.$store.state.designerLayout,
        designerElement: '',
        id: '',
        uid: ''
      }
    },
    mounted() {
      this.uid = ControlService.createUid('mobile-page')
      GlobalService.selectService(); //메인 디자이너에 컨트롤 선택 이벤트 추가
    },
    computed: {
      designerSize: function() {
        return this.$store.getters.designerSizeCheck;
      }
    },
    watch: {
      designerSize: function(state) {
        this.designerLayout = state;
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 0;
  }
  .main-designer {
    position: relative;
    padding: 8px 5px 5px 7px;
    background-color: #efeff4;
    overflow-y: scroll;
  }

  .designer-smartPhone {
    height: 626px;
    //margin: 0 24px 0 21px;
    margin: 0 33px 0 21px;
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
