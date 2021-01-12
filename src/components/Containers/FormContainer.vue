<template>
  <div :uid="uid" class="dews-mobile-formContainer dews-mobile-component">
    <div class="dews-container-option-control">
      <h3 class="option-sub-title" v-if="title">{{ title }}</h3>
      <container-button :containerType="containerType"></container-button>
    </div>

    <container-content :containerType="containerType">
      <form-section :containerChild="childFormSection"></form-section>
    </container-content>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import FormSection from "@/components/Containers/container/FormSection";
import ContainerContent from "@/components/Containers/container/ContainerContent";
import ContainerButton from "@/components/Containers/container/ContainerButton";

export default {
  name: 'dews-form-container',
  components: {ContainerButton, ContainerContent, FormSection},
  data() {
    return {
      uid: '',
      title: 'Form Container',
      isContainer: true,
      containerType: 'form',
      childFormSection: 'form-section',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-form-container');
  },
  mounted() {
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
//--------------------------------------
// dews-container-option-bar
//--------------------------------------
.dews-container-option-control {
  @include option-control();
}

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.dews-box-content-wrap {
  min-height: 40px;
}

//임시 button component 모양 잡기
//button {
//  border-radius: 4px;
//  border: solid 1px #d5d5d5;
//  background-color: #ffffff;
//
//  padding: 4px 10px;
//  font-size: 13px;
//  line-height: 1.54;
//  letter-spacing: normal;
//  text-align: center;
//  color: rgba(60, 60, 67, 0.8);
//}
////임시 input component 모양 잡기
//label {
//  display: block;
//  width: 100%;
//  margin-bottom: 2px;
//  font-size: 12px;
//  line-height: 1.5;
//  text-align: left;
//  color: rgba(60, 60, 67, 0.6);
//}
//input[type="text"] {
//  position: relative;
//  width: 100%;
//  height: 36px;
//  padding: 7px 10px;
//  color: rgb(17, 17, 17);
//  border: 1px solid rgba(60, 60, 67, 0.08);
//  border-radius: 4px;
//  background-color: rgb(255, 255, 255);
//  font-size: 15px;
//  line-height: 1.47;
//  text-align: left;
//}

</style>
