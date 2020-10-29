<template>
  <div :uid="uid" class="dews-mobile-listContainer">
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
      <ul class="form-field"></ul>
    </div>
  </div>
</template>

<script>
import GlobalService from "@/service/GlobalService";

export default {
  name: 'dews-list-container',
  data() {
    return {
      uid: '',
      title: 'List Container',
      buttonList: [],
      summaryList: [],
    }
  },
  created() {
    this.uid = GlobalService.createUid('mobile-list');
  }
}
</script>

<style lang="scss" scoped>

</style>
