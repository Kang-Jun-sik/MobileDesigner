<template>
  <div class="dews-box-wrap" >
    <div class="dews-box-title" @click="onToggleClick($event)" :collapsed="collapsed">
      <h2><button class="dews-box-title-button" type="button">{{ title }}</button></h2>
    </div>
    <div class="dews-box-content-wrap" :style="style.height" part="content" >
      <div class="dews-box-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dews-box',
    data() {
      return {
        title: 'Box#1',
        collapsed: true,
        style: {
          height: ''
        }
      }
    },
    methods: {
      onToggleClick: function (e){
        if (!this.collapsed) {
          this.collapsed = true;
          this.style.height = '0px';
        }
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
//
//:host([collapsed]) [part='content'] {
//  //display: block;
//  //height: 300px;
//  transition: height 0.5s;
//  transition-timing-function: ease-in-out;
//}
//
//[part='content'] {
//  //display: none;
//  overflow: hidden;
//  height: 0;
//  transition: height 0.5s;
//  transition-timing-function: ease-in-out;
//}
</style>
