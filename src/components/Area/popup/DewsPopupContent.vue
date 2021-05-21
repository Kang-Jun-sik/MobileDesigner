<template>
  <div :uid="uid" ref="popupContent"></div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: "dews-popup-content",
  data() {
    return {
      uid: '',
      dataUid: '',
      controlType: 'popup-content',

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
     this.uid = CreateService.createUid('popup-content');
  },
  mounted() {
    window.drake.containers.push(this.$refs.popupContent);
  }
}
</script>

<style scoped>

</style>
