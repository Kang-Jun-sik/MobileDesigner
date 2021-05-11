<template>
  <div :uid="uid" :id="id" class="dews-mobile-popup dews-mobile-component popup">
    <div class="overlay"></div>
    <!-- size: full/large/medium/small-->
    <div class="layer layer-popup">

      <div class="layer-header">
        <div class="titlebar">
          <div class="title">{{this.title}}</div>
        </div>
        <button class="close-button" @click="clickClose($event)"></button>
      </div>

      <div class="layer-content">
        <!-- 클래스명 -->
        <div class="">
          <div class="control">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: "dews-popup",
  data() {
    return {
      /* Properties */
      size: '',
      page_id: '',
      title: 'Sample Layout popup',
      active: '',
    }
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    clickClose() {
      console.log('close');
    }
  },
  created() {
    this.uid = CreateService.createUid('drawer-layout');
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.dews-mobile-popup {
  min-height: 300px;
  background: red;
}
</style>
