<template>
  <button :uid="uid" class="dews-mobile-datasource dews-mobile-component" @mousedown="onClick">{{ id }}</button>
</template>

<script>
import CreateService from "@/service/CreateService";
import SelectService from "@/service/SelectService";

export default {
  name: 'dews-datasource',
  data() {
    return {
      id: 'datasource',
      uid: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-datasource');
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    onClick(e) {
      SelectService.selectControl(e.target);
    },
  }
}
</script>

<style lang="scss" scoped>
.dews-mobile-datasource {
  display: inline-flex;
  align-items: center;
  height: 30px;
  margin: 10px;
  padding: 6px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  color: #000000;

}
</style>
