<template>
  <div :uid="uid" class="dews-mobile-dropdownList dews-mobile-component dropdown-list-wrap" ref="dropdownList">
    <label>{{ title }}</label>
    <span class="select-wrap">
      <span class="select-shape">
        <span class="select-input">
          {{ selectItem[0] }}
        </span>
        <span v-if="multi && selectItem.length > 1" class="select-multi">
          외 <strong>{{ selectItem.length - 1 }}건</strong>
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
      selectItem: [],
      active: false,

      /* Properties */
      id: '',
      title: 'DropdownList',
      disable: false,
      readonly: false,
      multi: false,

    }
  },
  created() {
    this.uid = CreateService.createUid('dews-dropdownlist');
  },
  mounted() {
    this.title = GlobalService.checkComplex(this.$refs.dropdownList) ? '' : this.title;
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
    },
    setMulti(value) {
      this.multi = JSON.parse(value);
    },
    setDisabled(value) {
      this.disabled = JSON.parse(value);
    },
    setReadonly(value) {
      this.readonly = JSON.parse(value);
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-dropdownlist();
</style>
