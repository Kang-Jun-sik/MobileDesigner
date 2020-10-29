<template>
  <div :uid="uid" class="dews-mobile-searchContainer">
    <div class="dews-container-option-control">
      <h3 class="option-sub-title" v-if="title">{{ title }}</h3>
      <div v-if="customButton.length" class="option-convenience-button">
        <ul>
          <li v-for="(custom, idx) in customButton" :key="idx" :class="custom.type">{{ custom.button }}</li>
        </ul>
      </div>
    </div>

    <div class="dews-search-field">
      <ul class="form-field">
        <slot v-if="this.inputList">
          <li v-for="(input, idx) in inputList" :key="idx"> {{ input }}</li>
        </slot>
        <slot v-else></slot>
      </ul>
    </div>
  </div>
</template>

<script>
  import GlobalService from "@/service/GlobalService";

  export default {
    name: 'dews-search-container',
    uid: '',
    data() {
      return {
        uid: '',
        title: 'Search Container',
        customButton: [],
        inputList: [],
      }
    },
    created() {
      this.uid = GlobalService.createUid('mobile-area');
    },
    mounted() {
      window.drake.containers.push(this.$refs.searchContainer);
    }
  }
</script>

<style lang="scss" scoped>

</style>
