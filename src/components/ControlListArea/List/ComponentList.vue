<template>
  <div class="control-list-wrapper">
    <div class="control-header" v-b-toggle.componentList role="tab">
      <div class="header-title">Component</div>
      <div class="header-arrow"></div>
    </div>
    <b-collapse id="componentList" class="control-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in mobileComponent" :key="idx"
           :class="'dews-mobile-' + key"
           class="dews-control-list component-box"
      >
        <div :class="'componentList-' + key" class="icon"></div>
        <div class="title">{{ name }}</div>
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
          buttonGroup: 'Button Group',
          radiobutton: 'Radio Button',
          radioGroup: 'Radio Group',
          checkbox: "Check Box",
          checkboxGroup: "Check Box Group",
          textbox: 'Text Box',
          maskbox: 'Mask Text Box',
          numeric: 'Numeric Text Box',
          dropdownList: 'Dropdown List',
          dropdownButton: 'Dropdown Button',
          datePicker: 'Date Picker',
          monthPicker: 'Month Picker',
          timePicker: 'Time Picker',
          periodPicker: 'Period Picker',
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
