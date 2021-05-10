<template>
  <li :uid="uid" :id="id" class="complex-line dews-mobile-component" :data-type="type" ref="complex">
    <slot></slot>
  </li>
</template>

<script>
import CreateService from "@/service/CreateService";
import store from "@/store";

export default {
  name: "complex-line",
  data() {
    return {
      uid: '',
      parentUid: '',
      dataUid:'',
      type : 'complex',
      liClass: 'complex-line',
      componentClass: 'components',
      controlType : 'complex-control',
      commonClass: 'item',

      /* Properties */
      id: '',
      title: 'Complex',
    }
  },
  created() {
    this.uid = CreateService.createUid('complex-line');
    //this.dataUid = CreateService.createUid('complex');
  },
  mounted() {
    //store.commit('ADD_ITEM',this.$refs.complex);
    window.drake.containers.push(this.$refs.complex);
  },
  methods: {
    destroyComponent() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },
  }
}
</script>

<style lang="scss" scoped>
.complex-line {
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 45px;
  margin: 0 0 12px 0;
  padding: 0;
  border: 1px dotted #212121;
}
</style>
