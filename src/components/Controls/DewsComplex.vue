<template>
  <div :uid="uid" class="dews-mobile-complex dews-mobile-component dews-complex">
    <label>{{ title }}</label>
    <ul class="complex-wrap">
      <li class="complex-line" :data-type="type" :data-uid="dataUid" ref="complex">
<!--        <div :class="[componentClass, commonClass, widthType]">-->
<!--          <dews-dropdownlist></dews-dropdownlist>-->
<!--        </div>-->
<!--        <div :class="[componentClass, commonClass, widthType]">-->
<!--          <dews-button></dews-button>-->
<!--        </div>-->
      </li>
    </ul>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DewsDropdownlist from "@/components/Controls/dropdownlist/DewsDropdownlist";
import DewsButton from "@/components/Controls/DewsButton";
import store from "@/store";

export default {
  name: 'dews-complex',
  //components: {DewsButton, DewsDropdownlist},
  data() {
    return {
      uid: '',
      dataUid:'',
      type : 'complex',
      liClass: 'complex-line',
      componentClass: 'components',
      commonClass: 'item',
      WIDTH_TYPE: {
        variable: 'variable',
        fix: 'fix',
        autofix: 'autofix'
      },
      widthType: 'variable',

      /* Properties */
      id: '',
      title: 'Complex',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-complex');
    this.dataUid = CreateService.createUid('complex');
    store.commit('MATCH_UID', { 'uid': this.uid, 'dataUid': this.dataUid });
  },
  mounted() {
    window.drake.containers.push(this.$refs.complex);
  },
  methods:{
    setTitle(value) {
      this.title = value;
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-complex();

.dews-mobile-complex {
  .complex-line {
    float: inherit;
    min-height: 36px;
    padding-top: 0;
    border: 1px dotted #212121;
  }
}
</style>
