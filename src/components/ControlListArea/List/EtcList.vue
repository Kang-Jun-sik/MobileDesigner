<template>
  <div class="control-list-wrapper dews-etcList-wrapper">
    <div class="control-header etcList-header" v-b-toggle.etcList role="tab">
      <div class="header-title etcList-header-title">Datasource</div>
      <div class="header-arrow etcList-header-arrow"></div>
    </div>
    <b-collapse id="etcList" class="control-content etcList-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in etcControl" :key="idx"
           :class="'dews-mobile-' + key"
           class="dews-control-list etcList-content-box"
      >
        <div :class="'etcList-' + key" class="icon etcList-content-icon"></div>
        <div class="title etcList-content-title">{{ name }}</div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  export default {
    name: 'etc-list',
    data() {
      return {
        etcControl: {
          cardlist: 'CardList',
          card: 'Card',
          datasource: 'Datasource',
          // messageBox: 'Message box',
          // snackBar: 'Snack Bar',
          // tooltipBox: 'Tooltip',
          // loadingBox: 'Loading',
          // progressBar: 'Progress Bar',
          // slider: 'Slider'
        }
      }
    },
    mounted() {
      const etcList = {
        name: 'etcList',
        control: document.querySelector('#etcList')
      }
      this.$store.commit('SET_CONTROL_LIST', etcList);
    }
  }
</script>

<style lang="scss" scoped>
</style>
