<template>
  <div class="dews-areaList-wrapper">
    <div class="areaList-header" v-b-toggle.areaList role="tab">
      <div class="areaList-header-title">Area</div>
      <div class="areaList-header-arrow"></div>
    </div>
    <b-collapse id="areaList" class="areaList-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in mobileArea" :key="idx"
           :class="'dews-mobile-' + key"
           class="dews-control-list areaList-content-box"
      >
        <div :class="'areaList-' + key" class="areaList-content-icon"></div>
        <div class="areaList-content-title">{{ name }}</div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  export default {
    name: 'area-list',
    data() {
      return {
        mobileArea: {
          box: 'Area Box',
          tabs: 'Area Tabs',
        }
      }
    },
    mounted() {
      const areaList = {
        name: 'areaList',
        control: document.querySelector('#areaList')
      }
      this.$store.commit('setControlList', areaList);
    }
  }
</script>

<style lang="scss" scoped>
  .dews-areaList-wrapper {
    margin-bottom: 1px;
    .areaList-header {
      width: 150px;
      height: 30px;
      background-color: #bfccdd;

      .areaList-header-title {
        display: inline-block;
        height: 19px;
        font-size: 15px;
        font-weight: bold;
        line-height: 1.62;
        text-align: left;
        color: #4f5565;
        margin: 1px 7px;
      }

      .areaList-header-arrow {
        display: inline-block;
        float: right;
        margin: 5px auto;
        width: 16px;
        height: 16px;
        object-fit: contain;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAW0lEQVQ4EWNgGAWDPAT8QlMn+IWk9ONzJjMuSaDGBYyMjOlAbKGhbaxw89q5jdjUYjUAqjkeSYMBLkMYkRSBmQGhqQb/GRjOo4uD+EDFhhtWz76ATW5UbCBDAAAP0hVgqGYaXgAAAABJRU5ErkJggg==');
      }
    }

    .areaList-content {
      .areaList-content-box {
        width: 135px;
        height: 30px;
        border-radius: 4px;
        background-color: #ffffff;
        margin: 4px auto;

        .areaList-content-title {
          display: inline-block;
          height: 19px;
          font-size: 12.5px;
          font-weight: 600;
          line-height: 1.62;
          color: #000000;
        }

        .areaList-content-icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          object-fit: contain;
          margin: -3px 5px;
        }

        .areaList-box {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAhElEQVQ4EWP0C0luY2RkqmQgEfwHqf//r53BLzQVzCZRP1i5P1AvEyM5OpH0sCCxGUAmIvNxsTeung23F8UAkAZkSWwGoFvChE0RKWIYLkC3gZBhGAaMeoFQkGHKYwQiRbFAKAYw7WdgYCIq7WLTCRQD6WUBZUlQjoQnbhyKsQn/B+oFABhNK+i0PW3WAAAAAElFTkSuQmCC');
        }

        .areaList-tabs {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAo0lEQVQ4Ea1TwQ2AIAwEwnz60QmMQ7iADuEIvlxQtCZnro2QYOTTo727tgn4phtm78PkKk8SfjoW1/TjjSv1N729tMF/UZImElZQ3FWCLvu2Pn2VAUQgIJLWgYNcAPga1QS2o+321kQZMMGacY3xvyuwc2l8nk6tABEIiCXjf1ewHTERT2CxWoGL1oxrjEP2vTIrg0Ub5UvKj3wed4b8lk6X9gS/lzfIR3t2BwAAAABJRU5ErkJggg==');
        }
      }
    }
  }
</style>
