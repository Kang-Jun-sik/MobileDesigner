<template>
  <div :uid="uid" class="dews-mobile-containerSummry option-summary dews-mobile-component">
    <div class="summary-contents">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'container-summary',
  props: ['containerType'],
  data() {
    return {
      uid: '',
      parentUid: '',
      /* check child */
      controlChild: 'container-summary',
    }
  },
  created() {
    this.uid = CreateService.createUid('container-summary')
  },
  methods:{
    destroyComponent() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

.summary-contents {
  color: #0e4c9e;
  border-radius: 6px;
  background-color: #f4f9ff;
  font-size: 13px;
  line-height: 1.54;
}
</style>
