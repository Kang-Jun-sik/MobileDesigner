<template>
  <div class="controlList-mobile-layout">
    <div :class="chkLayout.smartPhone" class="mobile-layout smartPhone" @click="selectLayout($event)">
      <button class="mobile-image smartPhone-image smartPhone"><span>스마트폰</span></button>
    </div>
    <div :class="chkLayout.tabletM" class="mobile-layout tabletM" @click="selectLayout($event)">
      <button class="mobile-image tabletM-image tabletM"><span>태블릿M</span></button>
    </div>
    <div :class="chkLayout.tabletL" class="mobile-layout tabletL" @click="selectLayout($event)">
      <button class="mobile-image tabletL-image tabletL"><span>태블릿L</span></button>
    </div>
  </div>
</template>

<script>
import SelectService from "@/service/SelectService";
import ResizeService from "@/service/ResizeService";

export default {
  name: 'mobile-layout',
  data() {
    return {
      parentUid: '',
      chkLayout: {
        smartPhone: 'off',
        tabletM: 'off',
        tabletL: 'on'
      },
    }
  },
  methods: {
    selectLayout: function (e) {
      e.stopPropagation();

      let layout;
      if (e.target.classList.contains('smartPhone')) {
        layout = 'smartPhone';
      } else if (e.target.classList.contains('tabletM')) {
        layout = 'tabletM';
      } else if (e.target.classList.contains('tabletL')) {
        layout = 'tabletL';
      }
      this.$store.commit('SET_LAYOUT', layout);

      for (let key in this.chkLayout) {
        this.chkLayout[key] = key === layout ? 'on' : 'off';
      }

      if (window.selectedItem) {
        if (window.selectedItem.classList.contains('main-designer')) return;
        setTimeout(() => {
          SelectService.setPosition(window.selectedItem);

          if (!window.selectedItem.classList.contains('dews-mobile-codePicker')) return;
          const $drawer = document.querySelector('.designer-drawer').firstElementChild;
          $drawer.classList.add('open');
        }, 500)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
