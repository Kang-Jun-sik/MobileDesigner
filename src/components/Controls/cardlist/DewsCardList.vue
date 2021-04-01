<template>
  <div :uid="uid" class="dews-mobile-cardlist dews-mobile-component">
    <div class="dews-container-option-control">
      <h3 class="option-sub-title"></h3>
    </div>
    <div class="cardlist-option-control">
      <div class="option-control">
        <span id="sorting-set" class="sorting-wrap">
          <span class="sorting-order"></span>
          <span class="sorting-input"></span>
          <span class="sorting-icon"></span>
        </span>
        <button class="column-set">
          <span>Column Set</span>
        </button>
      </div>
    </div>
    <div class="cardlist-all-select">
      <div class="card-total">
        <span>총<strong>0</strong>건</span>
      </div>
      <div class="all-select">
        <dews-checkbox val="전체선택" class="cardlist-all-select-checkbox reverse"></dews-checkbox>
      </div>
    </div>
    <div class="cardlist-wrap">
      <div class="cardlist" :data-uid="dataUid" style="height: auto" data-type="cardlist" ref="cardListField">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import CreateService from "@/service/CreateService";
import DewsCheckbox from "@/components/Controls/DewsCheckBox";

export default {
  name: 'dews-cardlist',
  components: {DewsCheckbox},
  data() {
    return {
      uid: '',
      dataUid: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-cardlist');
    this.dataUid = CreateService.createUid('cardlist');
    store.commit('MATCH_UID', { 'uid': this.uid, 'dataUid': this.dataUid });
  },
  mounted() {
    window.drake.containers.push(this.$refs.cardListField);
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import '../../../../node_modules/@dews/dews-mobile-style/scss/mixins/mixins';
@include dews-cardlist();

// DFD용 scss 추가
.cardlist {
  padding: 8px;
}
</style>
