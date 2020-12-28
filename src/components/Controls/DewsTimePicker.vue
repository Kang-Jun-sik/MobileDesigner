<template>
  <div>
    <div class="time-picker-wrap" @click="clickHandler">
      <label>{{ title }}</label>
      <span class="select-wrap">
        <span class="select-shape">
          <span class="select-input">{{ inputValue }}</span>
        </span>
        <span class="select-icon time-picker-icon"></span>
      </span>
    </div>

<!--    <drawer-layout>-->
<!--      <div></div>-->
<!--    </drawer-layout>-->
  </div>
</template>

<script>
import DrawerLayout from "@/components/Controls/DewsDrawerlayout";

export default {
  name: 'dews-timepicker',
  // components: {DrawerLayout},
  data() {
    return {
      uid: '',
      title: '',
      inputValue: '',
      disabled: false,
      readonly: false,
      height: '',
      value: '',
      min: '',
      max: '',
      step: 1,
    }
  },
  created() {
  },
  methods: {
    clickHandler() {

    }
  },
}
</script>

<style lang="scss" scoped>

</style>