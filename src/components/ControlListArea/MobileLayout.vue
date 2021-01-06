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

      // Vuex에 Layout Style Commit
      this.$store.commit('setLayout', layout);

      // click된 Layout class on 추가 및 나머지 Layout off class 추가
      for (let key in this.chkLayout) {
        this.chkLayout[key] = key === layout ? 'on' : 'off';
      }

      // 리사이즈 핸들러 (UI) div 삭제
      ResizeService.removeResizeHandler();

      // 선택된 아이템에 대해 리사이즈 핸들러 객체 삭제후 재등록
      if (window.selectedItem) {
        if (window.selectedItem.classList.contains('main-designer')) return;
        // ResizeService.destoryResizable(window.selectedItem);
        // ResizeService.canResize(window.selectedItem);
        setTimeout(SelectService.setPosition, 500, window.selectedItem);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
