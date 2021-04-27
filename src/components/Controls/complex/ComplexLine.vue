<template>
  <li :uid="uid" class="complex-line dews-mobile-component" :data-type="type" ref="complex">
    <slot></slot>
  </li>
</template>

<script>
import CreateService from "@/service/CreateService";
import store from "@/store";

export default {
  name: "complex-line",
  data() {
    return {
      uid: '',
      parentUid: '',
      dataUid:'',
      type : 'complex',
      liClass: 'complex-line',
      componentClass: 'components',
      controlType : 'complex-control',
      commonClass: 'item',

      /* Properties */
      id: '',
      title: 'Complex',
    }
  },
  created() {
    this.uid = CreateService.createUid('complex-line');
    //this.dataUid = CreateService.createUid('complex');
  },
  mounted() {
    //store.commit('ADD_ITEM',this.$refs.complex);
    window.drake.containers.push(this.$refs.complex);
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

@include dews-complex();
.complex-line {
  float: inherit;
  min-height: 45px;
  padding-top: 0;
  border: 1px dotted #212121;
}
</style>
