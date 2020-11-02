<template>
  <div :uid="uid" class="dews-mobile-searchContainer">
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

    <div class="dews-search-field">
      <ul class="form-field">
<!--        <slot v-if="this.inputList">-->
<!--          <li v-for="(input, idx) in inputList" :key="idx"> {{ input }}</li>-->
<!--        </slot>-->
<!--        <slot v-else></slot>-->
        <li>
          <div class="dews-textbox">
            <label for="">항목명</label>
            <input type="text" id="textbox" class="">
          </div>
        </li>
        <li>
          <div class="dews-textbox">
            <label for="">항목명</label>
            <input type="text" id="textbox" class="">
          </div>
        </li>
        <li>
          <div class="dews-textbox">
            <label for="">항목명</label>
            <input type="text" id="textbox" class="">
          </div>
        </li>
        <li>
          <div class="dews-textbox">
            <label for="">항목명</label>
            <input type="text" id="textbox" class="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import GlobalService from "@/service/GlobalService";

  export default {
    name: 'dews-search-container',
    uid: '',
    data() {
      return {
        uid: '',
        title: 'Search Container',
        customButton: [],
        inputList: [],
      }
    },
    created() {
      this.uid = GlobalService.createUid('mobile-area');
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
