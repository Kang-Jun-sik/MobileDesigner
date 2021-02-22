<template>
  <div :uid="uid" class="dews-mobile-codePicker dews-mobile-component">
    <div class="codepicker codepicker-wrap" @click="clickHandler">
      <label>{{ title }}</label>
      <span class="select-wrap">
      <span class="select-shape">
        <span class="select-input">
          {{ text }}
        </span>
      </span>
      <span class="select-icon code-picker-icon"></span>
    </span>
    </div>

    <drawer-layout class="drawer-layout">
      <div class="drawer-codepicker">
        <div class="titlebar">
          <div class="title">{{ helpTitle }}</div>
          <button class="confirm-button">적용</button>
          <button class="next-icon-button"><span>다음</span></button>
        </div>
      </div>

      <div class="control">
        <div class="layer-code-filter" :class="{filterActive: filterActive ? 'active' : ''}">
          <div class="code-filter">
            <div class="code-filter-search">
              <button class="filter-button" :class="{filterDisabled: filterDisabled ? 'filterDisabled' : ''}" @click="clickFilter">
                <span>filter</span>
              </button>
              <span class="code-filter-input">
                <input type="text">
                <button class="clear-button"><span>초기화</span></button>
                <button class="search-button"><span>검색</span></button>
              </span>
            </div>
            <div class="code-filter-field">
              <ul class="form-field">
                <codepicker-search>
                  <li>
                    <label>이름</label>
                    <dews-dropdownlist></dews-dropdownlist>
                  </li>
                  <li>
                    <label>나이</label>
                    <dews-dropdownlist></dews-dropdownlist>
                  </li>
                  <li>
                    <label>주소</label>
                    <dews-dropdownlist></dews-dropdownlist>
                  </li>
                </codepicker-search>
              </ul>
            </div>
          </div>

          <div class="dews-cardlist codepicker">
            <div class="cardlist-wrap">
              <dews-cardlist></dews-cardlist>
            </div>
          </div>

        </div>
      </div>
    </drawer-layout>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DrawerLayout from "@/components/Controls/DewsDrawerlayout";
import CodepickerSearch from "@/components/Controls/codepicker/CodePickerSearch";
import DewsCardlist from "@/components/Controls/cardlist/DewsCardList";
import DewsDropdownlist from "@/components/Controls/dropdownlist/DewsDropdownlist";

export default {
  name: 'dews-codepicker',
  components: {DewsDropdownlist, DewsCardlist, CodepickerSearch, DrawerLayout},
  data() {
    return {
      uid: '',
      title: 'codepicker',
      text: 'text',
      helpTitle: 'helpTitle',
      filterActive: false,
      filterDisabled: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-codepicker');
  },
  mounted() {
  },
  methods: {
    clickHandler() {

    },
    clickFilter() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@import 'src/assets/scss/_mixins';
@include dews-codepicker();
@include dews-drawer-codepicker();

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.codepicker-wrap {
  @include dews-designer-picker-style();
}
</style>
