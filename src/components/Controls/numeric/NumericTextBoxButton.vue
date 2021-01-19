<template>
  <span class="stepper">
    <button class="button-stepper minus" @click="stepperDecrement()"></button>
    <button class="button-stepper plus" @click="stepperIncrement()"></button>
  </span>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'numerictextbox-button',
  props: ['step', 'min', 'max'],
  data() {
    return {
      uid: '',
      controlChild: 'numerictextbox-button',
    }
  },
  created() {
    this.uid = CreateService.createUid('numerictextbox-button');
  },
  methods: {
    stepperDecrement() {

    },
    stepperIncrement() {

    },
  },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
.undefined {
  opacity: 0;
}
@include dews-numerictextbox();
</style>
