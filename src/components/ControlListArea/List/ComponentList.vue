<template>
  <div class="control-list-wrapper">
    <div class="control-header" v-b-toggle.componentList role="tab">
      <div class="header-title">Component</div>
      <div class="header-arrow"></div>
    </div>
    <b-collapse id="componentList" class="control-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in mobileComponent" :key="idx"
           :class="'dews-mobile-' + key"
           class="dews-control-list"
           data-type="component-list"
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
        checkbox: "Check Box",
        checkboxGroup: "Check Box Group",
        radiobutton: 'Radio Button',
        radioGroup: 'Radio Group',
        textbox: 'Text Box',
        numeric: 'Numeric Text Box',
        maskbox: 'Mask Text Box',
        dropdownList: 'Dropdown List',
        //complex: 'Complex Control',
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
    this.$store.commit('SET_CONTROL_LIST', componentList);
  }
}
</script>

<style lang="scss" scoped>
</style>
