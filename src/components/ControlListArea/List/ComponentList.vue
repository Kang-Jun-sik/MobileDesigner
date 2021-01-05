<template>
  <div class="control-list-warpper dews-componentList-wrapper">
    <div class="control-header componentList-header" v-b-toggle.componentList role="tab">
      <div class="header-title componentList-header-title">Component</div>
      <div class="header-arrow componentList-header-arrow"></div>
    </div>
    <b-collapse id="componentList" class="control-content componentList-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in mobileComponent" :key="idx"
           :class="'dews-mobile-' + key"
           class="dews-control-list componentList-content-box"
      >
        <div :class="'componentList-' + key" class="icon componentList-content-icon"></div>
        <div class="title componentList-content-title">{{ name }}</div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  export default {
    name: 'component-list',
    data() {
      return {
        mobileComponent: {
          button: 'Button',
          textbox: 'Text Box',
          checkbox: "Check Box",
          radiobutton: 'Radio Button',
          numeric: 'Numeric Text Box',
          maskbox: 'Mask Text Box',
          dropdownButton: 'Dropdown Button',
          dropdownList: 'Dropdown List',
          datePicker: 'Date Picker',
          periodPicker: 'Period Picker',
          timePicker: "Time Picker",
          zipcodePicker: 'Zip code Picker',
          complex: 'Complex Control',
          calendar: 'Calendar',
          editor: 'Editor',
          file: 'File/Multi File',
          chart: 'Chart',
          map: 'Map'
        },
      }
    },
    mounted() {
      const componentList = {
        name: 'componentList',
        control: document.querySelector('#componentList')
      }
      this.$store.commit('setControlList', componentList);
    }
  }
</script>

<style lang="scss" scoped>
</style>
