<template>
  <div :uid="uid" :id="id" class="dews-popup-buttons popup-buttons dews-mobile-component" ref="popupButton">
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: "dews-popup-buttons",
  data(){
    return {
      uid: '',
      dataUid: '',
      controlType : 'popup-buttons',

      /* Properties */
      id: '',
    }
  },
  methods:{
    setID(value) {
      this.id = value;
    },
  },
  created() {
    this.uid = CreateService.createUid('popup-buttons');
  },
  mounted() {
    window.drake.containers.push(this.$refs.popupButton);
  }
}
</script>

<style scoped>

</style>
