<template>
  <div :uid="uid" class="dews-mobile-listContainer dews-mobile-component dews-container">
    <div class="dews-container-option-control">
      <h3 class="option-sub-title" v-if="title">{{ title }}</h3>
      <container-button containerType="list"></container-button>
      <container-summary containerType="list">
        <span>{{ summary }}</span>
      </container-summary>
    </div>

    <container-content containerType="list" :dataUid="dataUid">
      <div class="dews-list-field">
        <ul class="list-container-field list-field" ref="listContainerField"
          :data-uid="dataUid" data-type="container">
        </ul>
      </div>
    </container-content>
  </div>
</template>

<script>
import store from "@/store/index";
import ContainerButton from "@/components/Containers/container/ContainerButton";
import ContainerSummary from "@/components/Containers/container/ContainerSummary";
import ContainerContent from "@/components/Containers/container/ContainerContent";
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-list-container',
  components: {ContainerButton, ContainerSummary, ContainerContent},
  data() {
    return {
      uid: '',
      dataUid: '',

      /* check child */
      hasChildControl: true,
      controlType: 'list',

      /* Properties */
      id: '',
      title: 'List Container',
      summary: '요약 내용영역',
   }
  },
  created() {
    this.uid = CreateService.createUid('dews-list-container');
    this.dataUid = CreateService.createUid('list-field');
    store.commit('MATCH_UID', { 'uid': this.uid, 'dataUid': this.dataUid });
  },
  mounted() {
    window.drake.containers.push(this.$refs.listContainerField);
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-container-list();

// DFD용 scss 추가
.dews-list-field {
  padding: 0 17px 6px;
}
.list-container-field {
  min-height: 20px;
}
</style>
