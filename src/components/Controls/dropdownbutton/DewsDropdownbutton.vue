<template>
  <div :uid="uid" class="dews-mobile-dropdownButton dews-mobile-component dews-dropdown-button"
       :class="group ? 'group' : ''" ref="dropdownButton">
    <button @click="clickHandler($event)" class="dews-button dropdown"
            :class="[ui, size, disabled ? 'disabled' : '']">
      <span class="button-icon"></span>
      <span class="button-text">{{ title }}</span>
    </button>
    <span class="button-list dropdown-button-list" display="block" ref="dropdownButtonList">
<!--    <span class="button-list dropdown-button-list" :class="selected ? 'selected' : ''" display="block" ref="dropdownButtonList">-->
      <!--        <dews-dropdown-childbutton :controlChild="childButton" ref="dropdownChildButton"></dews-dropdown-childbutton>-->
    </span>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DewsDropdownChildbutton from "@/components/Controls/dropdownbutton/ChildButton";
import SelectService from "@/service/SelectService";

export default {
  name: 'dews-dropdownbutton',
  // components: {DewsDropdownChildbutton},
  data() {
    return {
      uid: '',
      controlType: 'dropdownbutton',
      /* check child */
      hasChildControl: true,
      checkChild: true,
      childButton: 'dropdownbutton-childbutton',
      collapsed: true,
      /* Properties */
      id: '',
      title: 'DropdownButton',
      ui: 'solid',
      size: 'medium',
      disabled: false,
      group: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-dropdownbutton');
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
    },
    setUI(value) {
      this.ui = value;
    },
    setSize(value) {
      this.size = value;
    },
    setGroup(value) {
      this.group = JSON.parse(value);
    },
    setDisabled(value) {
      this.disabled = JSON.parse(value);
    },
    setShowDropdownBtnList() {
      const $dropdownButtonList = this.$refs.dropdownButtonList;
      $dropdownButtonList.style.display = 'block';
    },
    setHideDropdownBtnList() {
      const $dropdownButtonList = this.$refs.dropdownButtonList;
      $dropdownButtonList.style.display = 'none';
    },
    clickHandler(e) {
      const $dropdownButtonList = this.$refs.dropdownButtonList;
      if ($dropdownButtonList.style.display === 'none')
        $dropdownButtonList.style.display = 'block'
      else
        $dropdownButtonList.style.display = 'none';
      setTimeout(SelectService.setPosition, 10, this.$refs.dropdownButton);
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

@include dews-dropdownbutton();
</style>
