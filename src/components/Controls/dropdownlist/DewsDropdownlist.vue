<template>
  <div :uid="uid" class="dews-mobile-dropdownList dropdown-list-wrap" ref="dropdownList">
    <label>{{ title }}</label>
    <span class="select-wrap">
      <span class="select-shape">
        <span class="select-input">
          {{ selectItem[0] }}
        </span>
        <span v-if="multi && selectItem.length > 1" class="select-multi">
          외 <strong>{{ selectItem[selectItem.length - 1] }}</strong>
        </span>
      </span>
      <span class="select-icon dropdown-icon"></span>
    </span>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import GlobalService from "@/service/GlobalService";

export default {
  name: 'dews-dropdownlist',
  data() {
    return {
      uid: '',
      title: 'DropdownList',
      multi: false,
      disable: false,
      readonly: false,
      active: false,
      height: '',
      selectItem: [],
      itemList: [],
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-dropdownlist');
  },
  mounted() {
    this.title = GlobalService.checkComplex(this.$refs.dropdownList) ? '' : this.title;
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-dropdown-list
//======================================
//--------------------------------------
// 레이아웃 영역
//--------------------------------------
* {
  @include reset();
}
.dropdown-list-wrap {
  @include dropdown-list-wrap();
}
</style>
