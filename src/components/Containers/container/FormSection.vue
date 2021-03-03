<template>
  <div :uid="uid" class="dews-mobile-formSection dews-mobile-component form-section">
    <h3 class="dews-form-section-title">{{ title }}</h3>
    <div class="dews-form-field">
      <ul class="form-container-field form-field" ref="formContainerField"
        :data-uid="dataUid" data-type="container">
      </ul>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import store from "@/store/index";

export default {
  name: 'form-section',
  props: ['controlChild'],
  data() {
    return {
      uid: '',
      dataUid: '',

      /* check child */
      controlType: 'common-control',

      /* Properties */
      id: '',
      title: 'form-section',
    }
  },
  created() {
    this.uid = CreateService.createUid('form-section');
    this.dataUid = CreateService.createUid('form-field');
    store.commit('MATCH_UID', { 'uid': this.uid, 'dataUid': this.dataUid });
  },
  mounted() {
    window.drake.containers.push(this.$refs.formContainerField);
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

@include dews-form-section();

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.dews-form-field {
  padding: 0 17px 6px;
}
.form-container-field {
  min-height: 40px;
}
</style>
