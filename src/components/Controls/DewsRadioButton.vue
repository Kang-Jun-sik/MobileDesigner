<template>
  <span :uid="uid" class="dews-mobile-radiobutton dews-radio-wrap" @click="clickHandler($event)">
    <span class="radio-control">
      <input type="radio" :checked="checked" :disabled="disabled">
      <span class="radio-shape"></span>
    </span>
    <label class="radio-label">{{ title }}</label>
  </span>
</template>

<script>
import ControlService from "@/service/ControlService";

export default {
  name: 'dews-radio-button',
  data() {
    return {
      uid: '',
      title: '',
      checked: false,
      disabled: false,
      readonly: false,
    }
  },
  created() {
    this.uid = ControlService.createUid('dews-radiobutton');
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