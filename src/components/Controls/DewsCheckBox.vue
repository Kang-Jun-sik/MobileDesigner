<template>
  <span :uid="uid" class="dews-mobile-checkbox" :class="checkBoxClass" @click="clickHandler($event)">
    <span class="checkbox-control">
      <input type="checkbox" :checked="checked" :disabled="disabled">
      <span class="checkbox-shape"></span>
    </span>
    <label class="checkbox-label">{{ title }}</label>
  </span>
</template>

<script>
import ControlService from "@/service/ControlService";

export default {
  name: 'dews-checkbox',
  data() {
    return {
      uid: '',
      checkBoxClass: '',
      title: '',
      checked: false,
      disabled: false,
    }
  },
  created() {
    this.uid = ControlService.createUid('dews-checkbox');
  },
  mounted() {
  },
  methods: {
    clickHandler (e){
      e.stopPropagation();
    },
  }
}
</script>

<style lang="scss" scoped>

</style>