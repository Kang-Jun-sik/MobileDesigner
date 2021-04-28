<template>
  <div :uid="uid" class="dews-mobile-radioGroup dews-mobile-component dews-radio-group-wrap">
    <span class="radio-group-label">{{ title }}</span>
    <div class="radio-group" :class="align"
      data-type="group" :data-uid="dataUid" ref="radioButtonGroup">
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-radiobutton-group',
  data() {
    return {
      uid: '',
      parentUid: '',
      dataUid: '',
      controlType: 'group',

      /* Properties */
      id: '',
      title: 'RadioButtonGroup',
      align: 'horizontal',
      disabled: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-radiobutton-group');
    this.dataUid = CreateService.createUid('radiobutton-group');
    store.commit('MATCH_UID', { 'uid': this.uid, 'dataUid': this.dataUid });
  },
  mounted() {
    window.drake.containers.push(this.$refs.radioButtonGroup);
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
    },
    setAlign(value) {
      this.align = value;
    },
    setDisabled(value) {
      this.disabled = JSON.parse(value);
    },
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
@include dews-radio-group();


//--------------------------------------
// FD 추가 영역
//--------------------------------------
.dews-radio-group-wrap {
  .radio-group {
    border: 1px dotted #212121;
  }
}
</style>
