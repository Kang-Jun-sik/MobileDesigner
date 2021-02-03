<template>
  <div :uid="uid" class="dews-mobile-card dews-mobile-component card">
    <div class="card-header">
      <div class="card-control">
        <ul>
          <li>
            <dews-checkbox class="bookmark" val="null"></dews-checkbox>
          </li>
          <li>
            <button class="editing"><span>편집</span></button>
          </li>
          <li>
            <dews-checkbox class="card-select-checkbox" val="null"></dews-checkbox>
          </li>
        </ul>
      </div>
      <div class="title">
        <h3>32</h3>
        <div class="sub">
          <span>이철수</span>
          <span>서울</span>
        </div>
      </div>
    </div>
    <ul class="list-field">
      <li>
        <p class="name">이름</p>
        <p class="item">이철수</p>
      </li>
      <li>
        <p class="name">나이</p>
        <p class="item">32</p>
      </li>
      <li>
        <p class="name">주소</p>
        <p class="item">서울</p>
      </li>
    </ul>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DewsCheckbox from "@/components/Controls/DewsCheckBox";

export default {
  name: 'cardlist-field',
  components: {DewsCheckbox},
  data() {
    return {
      uid: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('cardlist-field');
  }
}
</script>

<style scoped lang="scss">
@import '../../../../node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import '../../../../node_modules/@dews/dews-mobile-style/scss/mixins/mixins';
@include dews-cardlist();
</style>
