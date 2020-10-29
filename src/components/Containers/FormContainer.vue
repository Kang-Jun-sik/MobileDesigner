<template>
  <div :uid="uid" class="dews-mobile-formContainer">
    <div class="dews-container-option-control">
      <h3 class="option-sub-title" v-if="title">{{ title }}</h3>

      <div v-if="customButton.length" class="option-custom-button">
        <ul></ul>
      </div>

      <div class="option-convenience-button">
        <ul></ul>
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
    name: 'dews-form-container',
    data() {
      return {
        uid: '',
        title: 'Form Container',
        customButton: [],
      }
    },
    created() {
      this.uid = GlobalService.createUid('mobile-form');
    }
  }
</script>

<style lang="scss" scoped>

</style>
