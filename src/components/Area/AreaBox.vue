<template>
  <div :uid="uid" class="dews-mobile-box dews-mobile-component dews-box-wrap" ref="box">
    <div class="dews-box-title" @click="onToggleClick($event)" :collapsed="collapsed">
      <h2><button class="dews-box-title-button" type="button">{{ title }}</button></h2>
    </div>
    <div class="dews-box-content-wrap" :style="contentStyle" part="content">
      <div class="dews-box-content addable-area" :data-uid="dataUid" data-type="area" ref="boxContent">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import SelectService from "@/service/SelectService";
import store from "@/store/index";

export default {
  name: 'dews-box',
  data() {
    return {
      uid: '',
      dataUid: '',
      height: '',
      contentStyle: {
        display: 'block'
      },

      /* Properties */
      id: '',
      title: 'Box',
      collapsed: true,
      hide: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-box');
    this.dataUid = CreateService.createUid('box-content');

    store.commit('matchUid', {'uid': this.uid, 'dataUid': this.dataUid});
  },
  mounted() {
    window.drake.containers.push(this.$refs.boxContent);
  },
  methods: {
    // click 이벤트
    onToggleClick: function (e){
      e.stopPropagation();
      const box = this.$refs.box;

      if (this.collapsed) {
        this.collapsed = false;
        this.contentStyle.display = 'none';
        box.style.setProperty('height', '', 'important');
      } else {
        this.collapsed = true;
        this.contentStyle.display = 'block';
        box.style.setProperty('height', box.style.height);
      }

      setTimeout(SelectService.setPosition, 10, box);
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-area-box();


//--------------------------------------
// FD 추가 영역
//--------------------------------------
[part='content'] {
  overflow: inherit;
  height: auto;
}
.dews-box-wrap {
  //box design
  max-width: 1050px;
  min-height: 72px;
  padding: 10px;

  .dews-box-content {
    min-height: 40px;
    padding-top: 10px;
  }
}
</style>
