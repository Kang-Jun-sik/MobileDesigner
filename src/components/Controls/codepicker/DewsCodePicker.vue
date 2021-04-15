<template>
  <div :uid="uid" class="dews-mobile-codePicker dews-mobile-component">
    <div class="codepicker codepicker-wrap" @click="clickHandler">
      <label>{{ title }}</label>
      <span class="select-wrap">
        <span class="select-shape">
          <span class="select-input">
            {{ text }}
          </span>
        </span>
        <span class="select-icon code-picker-icon"></span>
      </span>
    </div>

    <drawer-layout ref="drawerLayout" :data-uid="dataUid"></drawer-layout>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DrawerLayout from "@/components/Controls/DewsDrawerlayout";

export default {
  name: 'dews-codepicker',
  components: {DrawerLayout},
  data() {
    return {
      uid: '',
      dataUid: '',
      parentUid: '',
      /* check child */
      controlType: 'codepicker',

      /* Properties */
      id: '',
      title: 'codepicker',
      text: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-codepicker');
    this.dataUid = CreateService.createUid('codepicker-datasource');
  },
  mounted() {

  },
  methods: {
    clickHandler() {},
    setTitle(value) {
      this.title = value;
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@import 'src/assets/scss/_mixins';
@include dews-codepicker();
//@include dews-drawer-codepicker();

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.codepicker-wrap {
  @include dews-designer-picker-style();
}
</style>
