<template>
  <div :uid="uid" class="dews-radio-group-wrap">
    <span class="radio-group-label">{{ title }}</span>
    <div class="radio-group" :class="align">
      <span class="group-item">
        <dews-radiobutton></dews-radiobutton>
      </span>
      <span class="group-item">
        <dews-radiobutton></dews-radiobutton>
      </span>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DewsRadiobutton from "@/components/Controls/DewsRadioButton";

export default {
  name: 'dews-radiobutton-group',
  components: {DewsRadiobutton},
  data() {
    return {
      uid: '',
      title: 'RadioButtonGroup',
      disabled: false,
      align: 'horizontal',
      groupItemClass: 'group-item',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-radiobutton-group');
  }
}
</script>

<style lang="scss" scoped>

</style>