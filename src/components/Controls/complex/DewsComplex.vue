<template>
  <div :uid="uid" class="dews-mobile-complex dews-mobile-component dews-complex">
    <label>{{ title }}</label>
    <ul class="complex-wrap">
          <complex-line ref="complexLine"></complex-line>
    </ul>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import ComplexLine from "@/components/Controls/complex/ComplexLine";
import store from "@/store";

export default {
  name: 'dews-complex',
  components: {ComplexLine},
  data() {
    return {
      uid: '',
      parentUid: '',
      dataUid: '',
      type: 'complex',
      liClass: 'complex-line',
      componentClass: 'components',
      controlType: 'complex-control',
      commonClass: 'item',

      /* Properties */
      id: '',
      title: 'Complex',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-complex');
    this.$nextTick(() => {
      store.commit('ADD_ITEM', this.$refs.complexLine);
    });
  },
  mounted() {
    // store.commit('ADD_ITEM', this.$refs.complexLine);
  },
  methods: {
    setTitle(value) {
      this.title = value;
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

@include dews-complex();
/*
.dews-mobile-complex {
  .complex-line {
    float: inherit;
    min-height: 45px;
    padding-top: 0;
    border: 1px dotted #212121;
  }
}
 */
</style>
