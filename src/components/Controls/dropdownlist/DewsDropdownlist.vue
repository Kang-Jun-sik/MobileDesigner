<template>
  <div class="dropdown-list-wrap">
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
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-dropdownlist',
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
  }
}
</script>

<style lang="scss" scoped>

</style>
