<template>
  <div :uid="uid" class="dews-mobile-areaBox dews-mobile-component dews-box-wrap">
    <div class="dews-box-title" @click="onToggleClick($event)" :collapsed="collapsed">
      <h2><button class="dews-box-title-button" type="button">{{ title }}</button></h2>
    </div>
    <div :muid="muid" class="dews-box-content-wrap" :style="style" part="content" ref="boxContent">
      <div class="dews-box-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import ResizeService from "@/service/ResizeService";
import ControlService from "@/service/ControlService";
import { store } from "@/store";

export default {
  name: 'dews-box',
  data() {
    return {
      uid: '',
      muid: '',
      title: 'Box',
      collapsed: '',
      style: {
        height: ''
      },
    }
  },
  created() {
    this.uid = ControlService.createUid('mobile-box');
    this.muid = ControlService.createUid('designer-box');
    store.commit('matchDragulaUid', {'uid': this.uid, 'muid': this.muid});
  },
  mounted() {
    window.drake.containers.push(this.$refs.boxContent);
  },
  methods: {
    // click 이벤트
    onToggleClick: function (e){
      e.stopPropagation();
      if (!this.collapsed) {
        this.collapsed = 'open';
        this.style.height = '306px';
      } else {
        this.collapsed = '';
        this.style.height = '0px';
      }

      const box = this.$el;
      setTimeout(ResizeService.setPosition, 500, box);
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
* {
  @include reset();
}
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

:host([collapsed]) [part='content'] {
  //display: block;
  //height: 300px;
  transition: height 0.5s;
  transition-timing-function: ease-in-out;
}

[part='content'] {
  //display: none;
  overflow: hidden;
  height: 0;
  transition: height 0.5s;
  transition-timing-function: ease-in-out;
}

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.dews-box-wrap {
  //box design
  padding: 10px;

  .dews-box-content-wrap {
    min-height: 40px;
  }
}

</style>
