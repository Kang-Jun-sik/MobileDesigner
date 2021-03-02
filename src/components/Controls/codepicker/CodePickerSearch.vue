<template>
  <ul :uid="uid" class="codepicker-search-field form-field dews-mobile-component"
      ref="codepickerSearchField" data-type="container">
  </ul>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'codepicker-search',
  data() {
    return {
      uid: '',

      /* check child */
      controlType: 'common-control'
    }
  },
  created() {
    this.uid = CreateService.createUid('codepicker-search');
  },
  mounted() {
    window.drake.containers.push(this.$refs.codepickerSearchField);
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include layer-drawer();

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.code-filter-field {
  padding: 0 17px;
}
.form-field {
  min-height: 30px;
}
</style>
