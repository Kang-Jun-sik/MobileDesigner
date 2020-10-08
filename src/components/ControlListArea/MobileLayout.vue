<template>
  <div class="controlList-mobile-layout">
    <div class="mobile-layout smartPhone-layout smartPhone" @click="selectLayout($event)">
      <div class="mobile-image smartPhone-image smartPhone"></div>
    </div>
    <div class="mobile-layout tabletM-layout tabletM" @click="selectLayout($event)">
      <div class="mobile-image tabletM-image tabletM"></div>
    </div>
    <div class="mobile-layout tabletL-layout tabletL" @click="selectLayout($event)">
      <div class="mobile-image tabletL-image tabletL"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mobile-layout',
    data() {
      return {

      }
    },
    methods: {
      selectLayout: function(e) {
        e.stopPropagation();

        if (e.target.classList.contains('smartPhone')){
          this.$store.commit('setLayout', {
            wrapper: 'designer-wrapper-smartPhone',
            designer: 'designer-smartPhone',
            layout: 'smartPhone'
          })
        } else if (e.target.classList.contains('tabletM')){
          this.$store.commit('setLayout', {
            wrapper: 'designer-wrapper-tabletM',
            designer: 'designer-tabletM',
            layout: 'tabletM'
          })
        } else if (e.target.classList.contains('tabletL')){
          this.$store.commit('setLayout', {
            wrapper: 'designer-wrapper-tabletL',
            designer: 'designer-tabletL',
            layout: 'tabletL'
          })
        }
      },
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
      height: 36px;
      background-color: #4e5c7b;
      cursor: pointer;

      .mobile-image {
        width: 16px;
        height: 16px;
        object-fit: contain;
        margin: 10px auto;
      }
    }

    .smartPhone-layout {
      width: 50px;

      .smartPhone-image {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAASUlEQVQ4EWNgGHTg////F4AYFzhP0MEgnbgUYZNjwqWYWPFRAxgYBj4MWLBFF7b4xqYOJEbIC4pANSBMPADaji8pXyDeJHqpBABsbktOzkcElwAAAABJRU5ErkJggg==');
      }
    }

    .tabletM-layout {
      width: 50px;

      .tabletM-image {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAASklEQVQ4EWNggIL///9fAGJiwXmYPjgN0gnnEGAgq2UioJag9KgBDAyjYTAYwoAFOa0ip3FkcXxsQtGoCNQMwoQB0HZSsvMFmIkAQnFrNpWqZUIAAAAASUVORK5CYII=');
      }
    }

    .tabletL-layout {
      width: 50px;

      .tabletL-image {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAARUlEQVQ4EWP8////BQYGBn0gJgdcYAAa8J8cnSA9IL1M5GqG6Rs1gIFhNAwGQxgwUpIXQMmZUDQqAtWAME4AcgEl2fkiAOTtFeukJYGHAAAAAElFTkSuQmCC');
      }
    }
  }
</style>
