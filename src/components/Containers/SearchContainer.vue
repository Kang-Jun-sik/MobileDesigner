<template>
  <div :uid="uid" class="dews-mobile-searchContainer dews-mobile-component" :col="col">
    <div class="dews-container-option-control">
      <h3 class="option-sub-title" v-if="title">{{ title }}</h3>
      <container-button containerType="search"></container-button>
    </div>

    <container-content containerType="search" :dataUid="dataUid">
      <div class="dews-search-field">
        <ul class="search-container-field form-field" ref="searchContainerField"
          :data-uid="dataUid" data-type="container">
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
  data() {
    return {
      uid: '',
      dataUid: '',

      /* check child */
      hasChildControl: true,
      controlType: 'search',

      /* Properties */
      id: '',
      col: 1,
      title: 'Search Container',
      convenienceButton: {
        'data-set': true,
        'data-reset': true,
        'data-capture': true
      },
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-search-container');
    this.dataUid = CreateService.createUid('search-field');
    store.commit('MATCH_UID', { 'uid': this.uid, 'dataUid': this.dataUid });
  },
  mounted() {
    window.drake.containers.push(this.$refs.searchContainerField);
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
    },
    setConvenienceButton(name, value) {
      this.convenienceButton[name] = JSON.parse(value);
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-container-search();
//--------------------------------------
// FD 추가 영역
//--------------------------------------
//.dews-search-field(form field) 관련 main.scss에서 처리
.dews-box-content-wrap {
  min-height: 40px;
}
.dews-search-field{
  padding: 0 17px 6px;
}

// DFD용 scss 추가
.dews-search-field {
  padding: 0 17px 6px;
}
.form-field {
  min-height: 20px;
}
</style>
