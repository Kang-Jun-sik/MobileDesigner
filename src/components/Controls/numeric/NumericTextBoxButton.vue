<template>
  <div :uid="uid" class="dews-mobile-component stepper">
    <button class="button-stepper minus" @click="stepperDecrement"></button>
    <button class="button-stepper plus" @click="stepperIncrement"></button>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import store from "@/store";

export default {
  name: 'numerictextbox-button',
  props: ['isShow'],
  data() {
    return {
      uid: '',
      parentUid: '',
      controlChild: 'numerictextbox-button',

      /* Numeric Button Properties */
      min: 0,
      max: 0,
      step: 1,
    }
  },
  created() {
    this.uid = CreateService.createUid('numerictextbox-button');

    this.$nextTick(() => {
      store.commit('ADD_ITEM', this);
    });
  },
  methods: {
    setMax(value) {
      this.max = parseInt(value);
    },
    setMin(value) {
      this.min = parseInt(value);
    },
    setStep(value) {
      this.step = parseInt(value);
    },
    stepperIncrement() {
      this.$emit('increase');
    },
    stepperDecrement() {
      this.$emit('decrease');
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
