<template>
  <div :uid="uid" class="dews-mobile-checkboxGroup dews-mobile-component dews-checkbox-group-wrap">
    <span class="checkbox-group-label">{{ title }}</span>
    <div class="checkbox-group" :class="align"
      data-type="group" :data-uid="dataUid" ref="checkboxGroup">
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-checkbox-group',
  data() {
    return {
      uid: '',
      dataUid: '',
      controlType: 'group',

      /* Properties */
      id: '',
      title: 'CheckBoxGroup',
      align: 'horizontal',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-checkbox-group');
    this.dataUid = CreateService.createUid('checkbox-group');
    store.commit('matchUid', {'uid': this.uid, 'dataUid': this.dataUid});
  },
  mounted() {
    window.drake.containers.push(this.$refs.checkboxGroup);
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-checkbox-group
//======================================
.dews-checkbox-group-wrap {
  @include checkbox-group-wrap();
}

.dews-checkbox-group-wrap {
  .checkbox-group {
    border: 1px dotted #212121;
  }
}
</style>
