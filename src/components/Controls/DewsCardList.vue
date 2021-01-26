<template>
  <div class="cardlist">
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
      <div class="cardlist" style="height: auto">
        <div class="card">
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
      </div>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DewsCheckbox from "@/components/Controls/DewsCheckBox";
export default {
  name: 'dews-cardlist',
  components: {DewsCheckbox},
  data() {
    return {
      uid: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-cardlist');
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-cardlist();
</style>
