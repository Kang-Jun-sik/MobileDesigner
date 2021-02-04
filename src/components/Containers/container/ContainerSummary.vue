<template>
  <div :uid="uid" class="option-summary">
    <div class="summary-contents">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'container-summary',
  props: ['controlType'],
  data() {
    return {
      uid: '',

      /* check child */
      controlChild: 'container-summary',
    }
  },
  created() {
    this.uid = CreateService.createUid('container-summary')
  }
}
</script>
<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
// DFD용 scss 추가
.summary-contents {
  color: #0e4c9e;
  border-radius: 6px;
  background-color: #f4f9ff;
  font-size: 13px;
  line-height: 1.54;
}
</style>
