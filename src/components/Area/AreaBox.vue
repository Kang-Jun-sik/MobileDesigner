<template>
  <div :uid="uid" class="dews-mobile-box dews-mobile-component dews-layout-component dews-box-wrap" ref="box">
    <div class="dews-box-title">
      <h2>{{ title }}</h2><button class="dews-box-title-button" type="button" @click="onToggleClick($event)" :collapsed="collapsed"></button>
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
      mainButtons: {
        save: true,
        add: true,
        delete: true,
        search: true,
      }
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-box');
    this.dataUid = CreateService.createUid('box-content');
    store.commit('matchUid', {'uid': this.uid, 'dataUid': this.dataUid});

    this.mainButtonList = {
      uid: this.uid,
      mainButtons: this.mainButtons
    }
    store.commit('setMainButtonList', this.mainButtonList)
  },
  mounted() {
    window.drake.containers.push(this.$refs.boxContent);
  },
  methods: {
    setTitle(value) {
      this.title = value ? value : this.title;
    },

    setHide(value) {
      const box = this.$refs.box;
      this.hide = value;
      box.style.display = this.hide ? 'block' : 'none';
    },

    setCollapsed(value) {
      const box = this.$refs.box;

      this.collapsed = value;
      if (!this.collapsed) {
        this.contentStyle.display = 'none';
        box.style.setProperty('height', '', 'important');
      } else {
        this.contentStyle.display = 'block';
        box.style.setProperty('height', box.style.height);
      }

      setTimeout(SelectService.setPosition, 10, box);
    },

    onToggleClick: function (e){
      e.stopPropagation();
      this.setCollapsed(!this.collapsed);
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
//dfd 요청 box button 분리
.dews-box-wrap {
  .dews-box-title {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 14px 17px;

    h2 {
      flex: 0 0 calc(100% - 40px);
      height: 24px;
      color: #111111;
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
      text-align: left;
    }
    .dews-box-title-button {
      position: relative;
      flex: 0 0 24px;
      height: 24px;
      padding: 0;

      &::after {
        top: 0;
        right: 0;
      }

      &[collapsed] {
        &::after {
          transform: rotate(0deg);
          transition: transform 0.3s;
          transition-timing-function: ease-in-out;
        }
      }
    }
  }
}
</style>
