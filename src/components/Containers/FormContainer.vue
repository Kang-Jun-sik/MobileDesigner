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
</style>
