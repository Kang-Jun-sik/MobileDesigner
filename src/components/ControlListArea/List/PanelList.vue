<template>
  <div class="dews-panelList-wrapper">
    <div class="panelList-header" v-b-toggle.panelList role="tab">
      <div class="panelList-header-title">Panel</div>
      <div class="panelList-header-arrow"></div>
    </div>
    <b-collapse id="panelList" class="panelList-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in mobilePanel" :key="idx"
           :class="'dews-mobile-' + key"
           class="dewsControl panelList-content-box"
      >
        <div :class="'panelList-' + key" class="panelList-content-icon"></div>
        <div class="panelList-content-title">{{ name }}</div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  export default {
    name: 'panel-list',
    data() {
      return {
        mobilePanel: {
          boxPanel: 'Box Panel',
          tabPanel: 'Tab Panel',
          popupPanel: 'Popup Panel'
        }
      }
    },
    mounted() {
      const panelElement = {
        name: 'panelElement',
        control: document.querySelector('#panelList')
      }
      this.$store.commit('findElement', panelElement);
    }
  }
</script>

<style lang="scss" scoped>
  .dews-panelList-wrapper {
    .panelList-header {
      width: 150px;
      height: 30px;
      background-color: #bfccdd;

      .panelList-header-title {
        display: inline-block;
        height: 19px;
        font-size: 15px;
        font-weight: bold;
        line-height: 1.62;
        text-align: left;
        color: #4f5565;
        margin: 1px 7px;
      }

      .panelList-header-arrow {
        display: inline-block;
        float: right;
        margin: 5px auto;
        width: 16px;
        height: 16px;
        object-fit: contain;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAW0lEQVQ4EWNgGAWDPAT8QlMn+IWk9ONzJjMuSaDGBYyMjOlAbKGhbaxw89q5jdjUYjUAqjkeSYMBLkMYkRSBmQGhqQb/GRjOo4uD+EDFhhtWz76ATW5UbCBDAAAP0hVgqGYaXgAAAABJRU5ErkJggg==');
      }
    }

    .panelList-content {
      .panelList-content-box {
        width: 135px;
        height: 30px;
        border-radius: 4px;
        background-color: #ffffff;
        margin: 4px auto;

        .panelList-content-title {
          display: inline-block;
          height: 19px;
          font-size: 12.5px;
          font-weight: 600;
          line-height: 1.62;
          color: #000000;
        }

        .panelList-content-icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          object-fit: contain;
          margin: -3px 5px;
        }

        .panelList-boxPanel {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAABMklEQVQ4EZ1TMU7DQBC8vZxreELyA/gBfMBckfQgiESXUNJBAyUukaBIaigs5QPhBZgf+AkpI3HxMmvF1nGXxj7J8mhnZ7w71lE6vn4i0veq42Hp5+pZpZNpjTvq6/YLaDX1UXoa7eFe0BxSWXs75GT3Au5kzxf0O7jL89cy7I8mqMXGfVfMXxCdy8PMPzAshAsNogkq4zKk+rj6fM+85od0fKMYHGrWq6toAiI6Gzi38JsEa2cWCLxZqaUjg5aJwHajiI7DcmSAfdc7Yy7DxsqYObg8rEcZYNS5BIadj4CXSm03EM8w/gzBXoUG0QTyq5C87HqK0NacJCXwSMSaKLOT6b8cognkC/v/bQX7B+ISRlIvmvpBg4YM3/nHmwhbsfC6902CWLRGrqTcSITU+TC0fxIEc8/S8pUbAAAAAElFTkSuQmCC');
        }

        .panelList-tabPanel {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAhElEQVQ4EWP0C0luY2RkqmQgEfwHqf//r53BLzQVzCZRP1i5P1AvEyM5OpH0sCCxGUAmIvNxsTeung23F8UAkAZkSWwGoFvChE0RKWIYLkC3gZBhGAaMeoFQkGHKYwQiRbFAKAYw7WdgYCIq7WLTCRQD6WUBZUlQjoQnbhyKsQn/B+oFABhNK+i0PW3WAAAAAElFTkSuQmCC');
        }

        .panelList-popupPanel {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAo0lEQVQ4Ea1TwQ2AIAwEwnz60QmMQ7iADuEIvlxQtCZnro2QYOTTo727tgn4phtm78PkKk8SfjoW1/TjjSv1N729tMF/UZImElZQ3FWCLvu2Pn2VAUQgIJLWgYNcAPga1QS2o+321kQZMMGacY3xvyuwc2l8nk6tABEIiCXjf1ewHTERT2CxWoGL1oxrjEP2vTIrg0Ub5UvKj3wed4b8lk6X9gS/lzfIR3t2BwAAAABJRU5ErkJggg==');
        }
      }
    }
  }
</style>
