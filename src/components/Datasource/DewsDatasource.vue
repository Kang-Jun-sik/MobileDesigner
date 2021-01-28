<template>
  <button :uid="uid" class="dews-mobile-datasource dews-mobile-component" @mousedown="onClick">datasource</button>
</template>

<script>
import CreateService from "@/service/CreateService";
import SelectService from "@/service/SelectService";

export default {
  name: 'dews-datasource',
  data() {
    return {
      uid: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-datasource');
  },
  methods: {
    onClick(e) {
      SelectService.selectControl(e.target);
    }
  }
}
</script>

<style lang="scss" scoped>
.dews-mobile-datasource {
  margin: 10px;
  padding: 0 5px;
}
</style>
