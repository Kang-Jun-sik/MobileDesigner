<template>
  <div :uid="uid" class="dews-mobile-formContainer">
    <div class="dews-container-option-control">
      <h3 class="option-sub-title" v-if="title">{{ title }}</h3>

<!--      <div v-if="customButton.length" class="option-custom-button">-->
      <div class="option-custom-button">
        <ul>
          <li><button><span>확정</span></button></li>
          <li><button><span>확정 취소</span></button></li>
          <li><button><span>종결</span></button></li>
          <li><button><span>종결 취소</span></button></li>
          <li><button><span>확정</span></button></li>
          <li><button><span>확정 취소</span></button></li>
          <li><button><span>종결</span></button></li>
        </ul>
      </div>

      <div class="option-convenience-button">
        <ul>
          <li class="data-capture"><button class="capture"><span> Data Capture</span></button></li>
          <li class="data-set"><button class="set"><span>Data Set</span></button></li>
          <li class="data-reset"><button class="reset"><span>Data Reset</span></button></li>
        </ul>
      </div>
    </div>

    <div class="form-section">
      <h3 class="dews-form-section-title">기본정보</h3>
      <div class="dews-form-field">
        <ul class="form-field">
          <li>
            <div class="dews-textbox">
              <label>항목명</label>
              <input type="text" class="">
            </div>
          </li>
          <li>
            <div class="dews-textbox">
              <label>항목명</label>
              <input type="text" class="">
            </div>
          </li>
          <li>
            <div class="dews-textbox">
              <label>항목명</label>
              <input type="text" class="">
            </div>
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

    <div class="form-section">
      <h3 class="dews-form-section-title">추가정보</h3>
      <div class="dews-form-field">
        <ul class="form-field">
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


  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-form-container',
  data() {
    return {
      uid: '',
      title: 'Form Container',
      customButton: [],
    }
  },
  created() {
    this.uid = CreateService.createUid('mobile-form');
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-form-container
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

.dews-form-section-title {
  @include container-title-bar($base-color-bar); //디자인 수정 이슈 , 색상 코드 정의 필요
}
.dews-form-field {
  @include form-field();
}

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.dews-box-content-wrap {
  min-height: 40px;
}


//임시 button component 모양 잡기
button {
  border-radius: 4px;
  border: solid 1px #d5d5d5;
  background-color: #ffffff;

  padding: 4px 10px;
  font-size: 13px;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: center;
  color: rgba(60, 60, 67, 0.8);
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
