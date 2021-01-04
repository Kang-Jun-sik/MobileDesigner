<template>
  <div :uid="uid" class="dews-mobile-searchContainer dews-mobile-component">
    <div class="dews-container-option-control">
      <h3 class="option-sub-title" v-if="title">{{ title }}</h3>
      <div class="option-convenience-button">
        <ul>
          <li class="data-capture"><button class="capture"><span> Data Capture</span></button></li>
          <li class="data-set"><button class="set"><span>Data Set</span></button></li>
          <li class="data-reset"><button class="reset"><span>Data Reset</span></button></li>
        </ul>
      </div>
    </div>

    <div class="dews-search-field">
      <ul :muid="muid" class="search-container-field form-field" ref="searchContainerField">
        <li><dews-monthpicker></dews-monthpicker></li>
        <li><dews-checkbox-group></dews-checkbox-group></li>
        <li><dews-radiobutton-group></dews-radiobutton-group></li>
        <li><dews-button-group></dews-button-group></li>
        <li><dews-complex></dews-complex></li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import CreateService from "@/service/CreateService";
import DewsMonthpicker from "@/components/Controls/DewsMonthPicker";
import DewsCheckboxGroup from "@/components/Controls/DewsCheckBoxGroup";
import DewsRadiobuttonGroup from "@/components/Controls/DewsRadioButtonGroup";
import DewsButtonGroup from "@/components/Controls/DewsButtonGroup";
import DewsComplex from "@/components/Controls/DewsComplex";

export default {
  name: 'dews-search-container',
  components: {DewsComplex, DewsButtonGroup, DewsRadiobuttonGroup, DewsCheckboxGroup, DewsMonthpicker},
  uid: '',
  data() {
    return {
      uid: '',
      muid: '',
      title: 'Search Container',
      col: 1,
      customButton: [],
      inputList: [],
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-search-container');
    this.muid = CreateService.createUid('search-field');
    store.commit('matchUid', {'uid': this.uid, 'muid': this.muid});
  },
  mounted() {
    window.drake.containers.push(this.$refs.searchContainerField);
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-search-container
//======================================
//--------------------------------------
// 레이아웃 영역
//--------------------------------------
//--------------------------------------
// dews-container-option-bar
//--------------------------------------
.dews-container-option-control {
  @include option-control();
}


.dews-search-field{
  @include form-field();
  padding: 0 17px 0;

  :host([col='2']) & {
    @include form-field(2);
  }
}

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.dews-box-content-wrap {
  min-height: 40px;
}


//임시 input component 모양 잡기
label {
  display: block;
  width: 100%;
  margin-bottom: 2px;
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
  color: rgba(60, 60, 67, 0.6);
}
input[type="text"] {
  position: relative;
  width: 100%;
  height: 36px;
  padding: 7px 10px;
  color: rgb(17, 17, 17);
  border: 1px solid rgba(60, 60, 67, 0.08);
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  font-size: 15px;
  line-height: 1.47;
  text-align: left;
}

// DFD용 scss 추가
.form-field {
  min-height: 20px;
}

</style>
