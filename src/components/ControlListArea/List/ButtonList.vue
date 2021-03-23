<template>
  <div class="control-list-wrapper">
    <div class="control-header" v-b-toggle.buttonList role="tab">
      <div class="header-title">Button</div>
      <div class="header-arrow"></div>
    </div>
    <b-collapse id="buttonList" class="control-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in mobileButton" :key="idx"
           :class="'dews-mobile-' + key"
           class="dews-control-list"
           data-type="component-list"
      >
        <div :class="'buttonList-' + key" class="icon"></div>
        <div class="title">{{ name }}</div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'button-list',
  data() {
    return {
      mobileButton: {
        button: 'Button',
        buttonGroup: 'Button Group',
        // dropdownButton: 'Dropdown Button',
      }
    }
  },
  mounted() {
    const buttonList = {
      name: 'buttonList',
      control: document.querySelector('#buttonList')
    }
    this.$store.commit('SET_CONTROL_LIST', buttonList);
  }
}
</script>

<style lang="scss" scoped>
</style>
