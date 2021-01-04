<template>
  <div class="controlList-mobile-layout">
    <div :class="chkLayout.smartPhone" class="mobile-layout smartPhone" @click="selectLayout($event)">
      <div class="mobile-image smartPhone-image smartPhone"></div>
    </div>
    <div :class="chkLayout.tabletM" class="mobile-layout tabletM" @click="selectLayout($event)">
      <div class="mobile-image tabletM-image tabletM"></div>
    </div>
    <div :class="chkLayout.tabletL" class="mobile-layout tabletL" @click="selectLayout($event)">
      <div class="mobile-image tabletL-image tabletL"></div>
    </div>
  </div>
</template>

<script>
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
        setTimeout(ResizeService.setPosition, 500, window.selectedItem);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.controlList-mobile-layout {
  min-width: 150px;
  height: 36px;

  .mobile-layout {
    display: inline-block;
    width: 50px;
    height: 36px;
    cursor: pointer;

    .mobile-image {
      width: 16px;
      height: 16px;
      object-fit: contain;
      margin: 10px auto;
    }
  }

  .on {
    background-color: #35425f;
  }

  .off {
    background-color: #4e5c7b;
  }

  .smartPhone.on {
    .smartPhone-image {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAX0lEQVQ4EWNgGGjAiO6AgMN/LwDF9NHFofwLG2yZDXHIQYSBBvzHpQCbHBMuxcSKjxrAwDDwYcCCLbqwxTc2dSAx/F5gYVJkAGE8AJsBF+Hq//y7zwDCCICQQ4gNMAsASfsV5+Q/z8sAAAAASUVORK5CYII=');
    }
  }

  .smartPhone.off {
    .smartPhone-image {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAASUlEQVQ4EWNgGHTg////F4AYFzhP0MEgnbgUYZNjwqWYWPFRAxgYBj4MWLBFF7b4xqYOJEbIC4pANSBMPADaji8pXyDeJHqpBABsbktOzkcElwAAAABJRU5ErkJggg==');
    }
  }

  .tabletM.on {
    .tabletM-image {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAWUlEQVQ4EWNkgIKAw38vAJn6MD4B+sIGW2ZDFDVAA/6jCODhIKtlwqOOKKlRAxgYRsNgMIQBC3J6RU7jyOL42PijkYVJkQGE8QBkAy5iqPvz7z4DCGMCuFoAsXcV7yVkiOMAAAAASUVORK5CYII=');
    }
  }

  .tabletM.off {
    .tabletM-image {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAASklEQVQ4EWNggIL///9fAGJiwXmYPjgN0gnnEGAgq2UioJag9KgBDAyjYTAYwoAFOa0ip3FkcXxsQtGoCNQMwoQB0HZSsvMFmIkAQnFrNpWqZUIAAAAASUVORK5CYII=');
    }
  }

  .tabletL.on {
    .tabletL-image {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAATklEQVQ4EWMMOPz3AgMDgz4QkwMuMAAN+E+OTpAekF4mcjXD9I0awMAwGgaDIQwYKckLoOSMPxpZmBQZQBgPABlwEaf8n3/3GUAYN7gIAJC9FMuG9rVhAAAAAElFTkSuQmCC');
    }
  }

  .tabletL.off {
    .tabletL-image {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAARUlEQVQ4EWP8////BQYGBn0gJgdcYAAa8J8cnSA9IL1M5GqG6Rs1gIFhNAwGQxgwUpIXQMmZUDQqAtWAME4AcgEl2fkiAOTtFeukJYGHAAAAAElFTkSuQmCC');
    }
  }
}
</style>
