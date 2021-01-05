<template>
  <div :uid="uid" class="dews-mobile-box dews-mobile-component dews-box-wrap dews-area" ref="box">
    <div class="dews-box-title" @click="onToggleClick($event)" :collapsed="collapsed">
      <h2><button class="dews-box-title-button" type="button">{{ title }}</button></h2>
    </div>
    <div class="dews-box-content-wrap" :style="contentStyle" part="content">
      <div :muid="muid" class="dews-box-content addable-area" ref="boxContent">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import ResizeService from "@/service/ResizeService";
import CreateService from "@/service/CreateService";
import store from "@/store/index";

export default {
  name: 'dews-box',
  data() {
    return {
      uid: '',
      muid: '',
      title: 'Box',
      collapsed: true,
      height: '',
      contentStyle: {
        display: 'block'
      }
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-box');
    this.muid = CreateService.createUid('box-content');

    store.commit('matchUid', {'uid': this.uid, 'muid': this.muid});
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

      setTimeout(ResizeService.setPosition, 10, box);
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-area-box
//======================================
//--------------------------------------
// 레이아웃 영역
//--------------------------------------
.dews-box-wrap {
  @include area-box();

  //box design
  padding: 10px;
}
//--------------------------------------
// 애니메이션 영역
//--------------------------------------
.dews-box-wrap {
  .dews-box-title {
    .dews-box-title-button {
      &:after {
        transform: rotate(180deg);
        transition: transform 0.3s;
        transition-timing-function: ease-in-out;
      }
    }

    &[collapsed] {
      .dews-box-title-button {
        &:after {
          transform: rotate(0deg);
          transition: transform 0.3s;
          transition-timing-function: ease-in-out;
        }
      }
    }
  }
}

//[collapsed] [part='content'] {
//  height: 300px;
//  transition: height 0.5s;
//  transition-timing-function: ease-in-out;
//}
//[part='content'] {
//  overflow: hidden;
//  height: 40px;
//  min-height: 40px;
//  transition: height 0.5s;
//  transition-timing-function: ease-in-out;
//}

//--------------------------------------
// FD 추가 영역
//--------------------------------------
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
