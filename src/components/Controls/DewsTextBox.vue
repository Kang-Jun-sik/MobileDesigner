<template>
  <div :uid="uid" class="dews-mobile-textbox textbox-wrap">
    <label>{{ title }}</label>
    <input @change="onChange($event)" type="text" :value="value" :required="required"
           :disabled="disabled" :readonly="readonly" :placeholder="placeholder">
  </div>
</template>

<script>
import ControlService from "@/service/ControlService";

export default {
  name: 'dews-text-box',
  data() {
    return {
      uid: '',
      title: '',
      value: '',
      placeholder: '',
      required: false,
      disabled: false,
      readonly: false,
      multi: false,
      multiHeight: 50,
    }
  },
  created() {
    this.uid = ControlService.createUid('dews-textbox')
  },
  mounted() {
  },
  methods: {
    onChange (e){
      e.stopPropagation();
      this.value = e.target.value;
    }
  }
}
</script>
