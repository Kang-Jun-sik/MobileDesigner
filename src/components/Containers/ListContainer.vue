<template>
  <div :uid="uid" class="dews-mobile-listContainer dews-mobile-component dews-container">
    <div class="dews-container-option-control">
      <h3 class="option-sub-title" v-if="title">{{ title }}</h3>

      <div class="option-custom-button">
        <ul></ul>
      </div>

      <div class="option-summary">
        <div class="summary-contents">
        </div>
      </div>
    </div>

    <div class="dews-search-field">
      <ul class="form-field" data-type="container"></ul>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-list-container',
  data() {
    return {
      uid: '',
      buttonList: [],
      summaryList: [],
      hasChildControl: true,

      /* Properties */
      id: '',
      title: 'Form Container',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-list-container');
  }
}
</script>

<style lang="scss" scoped>

</style>
