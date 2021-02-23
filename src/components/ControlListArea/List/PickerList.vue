<template>
  <div class="control-list-wrapper">
    <div class="control-header" v-b-toggle.pickerList role="tab">
      <div class="header-title">Picker</div>
      <div class="header-arrow"></div>
    </div>
    <b-collapse id="pickerList" class="control-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in mobilePicker" :key="idx"
           :class="'dews-mobile-' + key"
           class="dews-control-list"
           data-type="component-list"
      >
        <div :class="'pickerList-' + key" class="icon"></div>
        <div class="title">{{ name }}</div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'picker-list',
  data() {
    return {
      mobilePicker: {
        datePicker: 'Date Picker',
        monthPicker: 'Month Picker',
        timePicker: 'Time Picker',
        periodPicker: 'Period Picker',
        zipcodePicker: 'Zip code Picker',
        codePicker: 'Code Picker',
        yearPicker: 'Year Picker'
      }
    }
  },
  mounted() {
    const pickerList = {
      name: 'pickerList',
      control: document.querySelector('#pickerList')
    }
    this.$store.commit('SET_CONTROL_LIST', pickerList);
  }
}
</script>

<style lang="scss" scoped>
</style>
