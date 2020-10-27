<template>
  <div class="controlList-mobile-layout">
    <div :class="chkPhone" class="mobile-layout smartPhone" @click="selectLayout($event)">
      <div class="mobile-image smartPhone-image smartPhone"></div>
    </div>
    <div :class="chkTabletM" class="mobile-layout tabletM" @click="selectLayout($event)">
      <div class="mobile-image tabletM-image tabletM"></div>
    </div>
    <div :class="chkTabletL" class="mobile-layout tabletL" @click="selectLayout($event)">
      <div class="mobile-image tabletL-image tabletL"></div>
    </div>
  </div>
</template>

<script>
import GlobalService from "@/service/GlobalService";

export default {
  name: 'mobile-layout',
  data() {
    return {
      chkPhone: 'off',
      chkTabletM: 'off',
      chkTabletL: 'on'
    }
  },
  methods: {
    selectLayout: function (e) {
      e.stopPropagation();

      if (e.target.classList.contains('smartPhone')) {
        this.$store.commit('setLayout', {
          wrapper: 'designer-wrapper-smartPhone',
          designer: 'designer-smartPhone',
          layout: 'smartPhone'
        })
        this.chkPhone = 'on';
        this.chkTabletM = 'off';
        this.chkTabletL = 'off';
      } else if (e.target.classList.contains('tabletM')) {
        this.$store.commit('setLayout', {
          wrapper: 'designer-wrapper-tabletM',
          designer: 'designer-tabletM',
          layout: 'tabletM'
        })
        this.chkPhone = 'off';
        this.chkTabletM = 'on';
        this.chkTabletL = 'off';
      } else if (e.target.classList.contains('tabletL')) {
        this.$store.commit('setLayout', {
          wrapper: 'designer-wrapper-tabletL',
          designer: 'designer-tabletL',
          layout: 'tabletL'
        })
        this.chkPhone = 'off';
        this.chkTabletM = 'off';
        this.chkTabletL = 'on';
      }
      if (window.selectedItem)
        setTimeout(() => {
          GlobalService.setPosition(window.selectedItem.offsetWidth, window.selectedItem.offsetHeight);
        }, 500);
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  padding: 0;
}

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
