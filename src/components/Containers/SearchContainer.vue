<template>
  <div :uid="uid" class="dews-mobile-searchContainer dews-mobile-component dews-container">
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
      col: 1,
      customButton: [],
      inputList: [],
      hasChildControl: true,
      containerType: 'search',

      /* Properties */
      id: '',
      title: 'Form Container',
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


.dews-search-field{
  @include form-field();
  padding: 0 17px 0;

  :host([col='2']) & {
    @include form-field(2);
  }
}

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
