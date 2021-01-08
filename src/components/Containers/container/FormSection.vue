<template>
  <div class="form-section">
    <h3 class="dews-form-section-title">{{ title }}</h3>
    <div class="dews-form-field">
      <ul class="form-container-field form-field" ref="formContainerField">
      </ul>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'form-section',
  data() {
    return {
      id: '',
      uid: '',
      title: 'form-section',
    }
  },
  created() {
    CreateService.createUid('form-section');
  },
  mounted() {
    window.drake.containers.push(this.$refs.formContainerField);
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

.dews-form-section-title {
  @include container-title-bar($base-color-bar); //디자인 수정 이슈 , 색상 코드 정의 필요
}
.dews-form-field {
  @include form-field();
  padding: 0 17px 6px;
}

// DFD용 scss 추가
.form-container-field {
  min-height: 40px;
}
</style>
