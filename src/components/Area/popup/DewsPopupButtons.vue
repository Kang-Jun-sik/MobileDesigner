<template>
  <div :uid="uid" :id="id" class="dews-popup-buttons popup-buttons dews-mobile-component" ref="popupButton">
    <dews-button-group ref="buttonGroup"></dews-button-group>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DewsButtonGroup from "../../Controls/DewsButtonGroup";
import store from "@/store/index";

export default {
  name: "dews-popup-buttons",
  components: {DewsButtonGroup},
  data() {
    return {
      uid: '',
      dataUid: '',
      controlType: 'popup-buttons',

      /* Properties */
      id: '',
    }
  },
  methods: {
    setID(value) {
      this.id = value;
    },
  },
  created() {
    this.uid = CreateService.createUid('popup-buttons');
  },
  mounted() {
    this.$nextTick(() => {
      store.commit('ADD_ITEM', this.$refs.buttonGroup);
    });
    window.drake.containers.push(this.$refs.popupButton);
  }
}
</script>

<style scoped>

</style>
