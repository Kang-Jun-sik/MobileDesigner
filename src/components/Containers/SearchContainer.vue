<template>
  <div :uid="uid" class="dews-mobile-searchContainer dews-mobile-component">
    <div class="dews-container-option-control">
      <h3 class="option-sub-title" v-if="title">{{ title }}</h3>
<!--      <div v-if="customButton.length" class="option-convenience-button">-->
      <div class="option-convenience-button">
        <ul>
<!--          <li v-for="(custom, idx) in customButton" :key="idx" :class="custom.type">{{ custom.button }}</li>-->
          <li class="data-capture"><button class="capture"><span> Data Capture</span></button></li>
          <li class="data-set"><button class="set"><span>Data Set</span></button></li>
          <li class="data-reset"><button class="reset"><span>Data Reset</span></button></li>
        </ul>
      </div>
    </div>

    <div :muid="muid" class="dews-search-field" ref="searchContainer">
      <ul class="form-field">
<!--        <slot v-if="this.inputList">-->
<!--          <li v-for="(input, idx) in inputList" :key="idx"> {{ input }}</li>-->
<!--        </slot>-->
<!--        <slot v-else></slot>-->
        <li>
          <dews-text-box></dews-text-box>
        </li>
        <li>
          <dews-checkbox></dews-checkbox>
        </li>
        <li>
          <dews-radio-button></dews-radio-button>
        </li>
        <li>
          <div class="dews-textbox">
            <label>항목명</label>
            <input type="text" class="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import CreateService from "@/service/CreateService";
import DewsTextBox from "@/components/Controls/DewsTextBox";
import DewsCheckbox from "@/components/Controls/DewsCheckBox";
import DewsRadioButton from "@/components/Controls/DewsRadioButton";

export default {
  name: 'dews-search-container',
  components: {DewsRadioButton, DewsCheckbox, DewsTextBox},
  uid: '',
  data() {
    return {
      uid: '',
      muid: '',
      title: 'Search Container',
      customButton: [],
      inputList: [],
    }
  },
  created() {
    this.uid = CreateService.createUid('mobile-area');
    this.muid = CreateService.createUid('designer-search');
    store.commit('matchUid', {'uid': this.uid, 'muid': this.muid});
  },
  mounted() {
    window.drake.containers.push(this.$refs.searchContainer);
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
* {
  @include reset();
}

//--------------------------------------
// dews-container-option-bar
//--------------------------------------
.dews-container-option-control {
  @include option-control();
}


.dews-search-field{
  @include form-field();

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

</style>
