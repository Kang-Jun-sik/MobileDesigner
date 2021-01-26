<template>
  <div :uid="uid" class="dews-mobile-listContainer dews-mobile-component dews-container">
    <div class="dews-container-option-control">
      <h3 class="option-sub-title" v-if="title">{{ title }}</h3>
      <container-button :controlType="controlType"></container-button>
    </div>

    <container-summary>
      <span>{{ summary }}</span>
    </container-summary>

    <container-content :controlType="controlType" :dataUid="dataUid">
      <div class="dews-list-field">
        <ul class="list-container-field list-field" ref="listContainerField"
          :data-uid="dataUid" data-type="container">
          <dews-cardlist></dews-cardlist>
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
import DewsCardlist from "@/components/Controls/DewsCardList";
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-list-container',
  components: {DewsCardlist, ContainerButton, ContainerSummary, ContainerContent},
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
    store.commit('matchUid', {'uid': this.uid, 'dataUid': this.dataUid});
  },
  mounted() {
    window.drake.containers.push(this.$refs.listContainerField);
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-container-list();
</style>
