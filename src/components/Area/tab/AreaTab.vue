<template>
  <div :uid="uid" class="content dews-mobile-component" :class="onActive">
    <div :style="style"></div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import store from "@/store/index";

export default {
  name: 'dews-tab',
  props: ['active'],
  data() {
    return {
      uid: '',
      title: 'Tab',
      onActive: this.active,
      style: {
        height: '',
        backgroundColor: '#ffffff'
      }
    }
  },
  created() {
    this.uid = CreateService.createUid('mobile-tab');
  },
  mounted() {
    const parentTabs = this.$el.closest('.dews-tabs-wrap');
    store.commit('addTabTitle', [parentTabs.getAttribute('uid'), this.title]);

    if (this.onActive === 'active') {
      this.style.height = '300px';
    } else {
      this.style.height = '0px';
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-area-tab-content
//======================================
//--------------------------------------
// 레이아웃 영역
//--------------------------------------
* {
  @include reset();
}
.content {
  @include area-tabs-content();
}

//--------------------------------------
// 애니메이션 영역
//--------------------------------------
.content {
  animation: tab-content-fade-effect 1s;
}

@keyframes tab-content-fade-effect {
  from {opacity: 0;}
  to {opacity: 1;}
}
</style>
