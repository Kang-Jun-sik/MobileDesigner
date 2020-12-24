<template>
  <div>
    <div class="dropdown-list-wrap" @click="clickHandler">
      <label>{{ title }}</label>
      <span class="select-wrap">
      <span class="select-shape">
        <span class="select-input">
          {{ selectItem[0] }}
        </span>
        <span v-if="multi && selectItem.length > 1" class="select-multi">
          외 <strong>{{ selectItem[selectItem.length - 1] }}</strong>
        </span>
      </span>
      <span class="select-icon dropdown-icon"></span>
    </span>
    </div>

<!--    <drawer-layout>-->
<!--      <div v-if="multi" class="drawer-dropdown-multi"></div>-->
<!--      <div v-else class="drawer-dropdown-single"></div>-->
<!--    </drawer-layout>-->
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DrawerLayout from "@/components/Controls/DewsDrawerlayout";

export default {
  name: 'dews-dropdownlist',
  // components: {DrawerLayout},
  data() {
    return {
      uid: '',
      title: '',
      multi: false,
      disable: false,
      readonly: false,
      active: false,
      height: '',
      selectItem: [],
      itemList: [],
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-dropdownlist');
  },
  methods: {
    clickHandler() {

    },
  }
}
</script>

<style lang="scss" scoped>

</style>