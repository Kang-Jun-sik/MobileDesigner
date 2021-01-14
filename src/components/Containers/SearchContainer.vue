<template>
  <div :uid="uid" class="dews-mobile-searchContainer dews-mobile-component dews-container" :col="col">
    <div class="dews-container-option-control">
      <h3 class="option-sub-title" v-if="title">{{ title }}</h3>
      <container-button :containerType="containerType" ref="containerButton"></container-button>
    </div>

    <container-content :containerType="containerType" :dataUid="dataUid" ref="containerContent">
      <div class="dews-search-field">
        <ul class="search-container-field form-field" :data-uid="dataUid" ref="searchContainerField">
        </ul>
      </div>
    </container-content>
  </div>
</template>

<script>
import store from "@/store/index";
import CreateService from "@/service/CreateService";
import ContainerContent from "@/components/Containers/container/ContainerContent";
import ContainerButton from "@/components/Containers/container/ContainerButton";

export default {
  name: 'dews-search-container',
  components: {ContainerButton, ContainerContent},
  uid: '',
  data() {
    return {
      uid: '',
      dataUid: '',
      containerType: 'search',
      hasChildControl: true,

      /* Properties */
      id: '',
      col: 1,
      title: 'Search Container',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-search-container');
    this.dataUid = CreateService.createUid('search-field');
    store.commit('matchUid', {'uid': this.uid, 'dataUid': this.dataUid});
  },
  mounted() {
    window.drake.containers.push(this.$refs.searchContainerField);
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-search-container
//======================================
//--------------------------------------
// 레이아웃 영역
//--------------------------------------
//--------------------------------------
// dews-container-option-bar
//--------------------------------------
.dews-container-option-control {
  @include option-control();
}

//.dews-search-field(form field) 관련 main.scss에서 처리

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.dews-box-content-wrap {
  min-height: 40px;
}

// DFD용 scss 추가
.form-field {
  min-height: 20px;
  padding-bottom: 6px;
}
</style>
