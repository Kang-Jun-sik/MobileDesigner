<template>
  <div class="controlList-mobile-layout">
    <div class="mobile-layout smartPhone-layout">
      <div class="mobile-image smartPhone-image"></div>
    </div>
    <div class="mobile-layout tabletM-layout">
      <div class="mobile-image tabletM-image"></div>
    </div>
    <div class="mobile-layout tabletL-layout">
      <div class="mobile-image tabletL-image"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mobile-layout',
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
