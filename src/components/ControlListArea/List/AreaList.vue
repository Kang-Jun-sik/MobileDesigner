<template>
  <div class="control-list-warpper dews-areaList-wrapper">
    <div class="control-header areaList-header" v-b-toggle.areaList role="tab">
      <div class="header-title areaList-header-title">Area</div>
      <div class="header-arrow areaList-header-arrow"></div>
    </div>
    <b-collapse id="areaList" class="control-content areaList-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in mobileArea" :key="idx"
           :class="'dews-mobile-' + key"
           class="dews-control-list areaList-content-box"
      >
        <div :class="'areaList-' + key" class="icon areaList-content-icon"></div>
        <div class="title areaList-content-title">{{ name }}</div>
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
  //.dews-areaList-wrapper {
  //  margin-bottom: 1px;
  //  .areaList-header {
  //    width: 150px;
  //    height: 30px;
  //    background-color: #bfccdd;
  //
  //    .areaList-header-title {
  //      display: inline-block;
  //      height: 19px;
  //      font-size: 15px;
  //      font-weight: bold;
  //      line-height: 1.62;
  //      text-align: left;
  //      color: #4f5565;
  //      margin: 1px 7px;
  //    }
  //    .areaList-header-arrow {
  //      display: inline-block;
  //      float: right;
  //      margin: 5px auto;
  //      width: 16px;
  //      height: 16px;
  //      object-fit: contain;
  //      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnPgogICAgICAgIDxwYXRoIGZpbGw9IiM0ZjU1NjUiIGQ9Ik0zLjY0Ni4zNTRhLjUuNSAwIDAgMSAuNzA3IDBsMi43OTMgMi43OTJBLjUuNSAwIDAgMSA2Ljc5MyA0SDEuMjA3YS41LjUgMCAwIDEtLjM1NC0uODU0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5MSAtMTQ1KSByb3RhdGUoMTgwIDIwMS41IDc3LjUpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=');
  //    }
  //    &.not-collapsed {
  //      .areaList-header-arrow {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAW0lEQVQ4EWNgGAWDPAT8QlMn+IWk9ONzJjMuSaDGBYyMjOlAbKGhbaxw89q5jdjUYjUAqjkeSYMBLkMYkRSBmQGhqQb/GRjOo4uD+EDFhhtWz76ATW5UbCBDAAAP0hVgqGYaXgAAAABJRU5ErkJggg==');
  //      }
  //    }
  //    &:hover {
  //      background-color: #a4b7d1;
  //    }
  //  }
  //  .areaList-content {
  //    .areaList-content-box {
  //      margin: 4px auto;
  //      width: 135px;
  //      height: 30px;
  //      border: 1px solid transparent;
  //      border-radius: 4px;
  //      background-color: #ffffff;
  //
  //      &:hover:not(:active) {
  //        border: 1px solid #c7d6e8;
  //        background-color: #e2e9f2;
  //        .areaList-content-title {
  //          color: #819fc9;
  //        }
  //      }
  //      &:active {
  //        border:1px solid #acc0d8;
  //        background-color: #c7d6e8;
  //      }
  //
  //
  //      .areaList-content-title {
  //        display: inline-block;
  //        height: 19px;
  //        font-size: 12px;
  //        font-weight: 600;
  //        line-height: 1.62;
  //        color: #000000;
  //      }
  //      .areaList-content-icon {
  //        display: inline-block;
  //        width: 16px;
  //        height: 16px;
  //        object-fit: contain;
  //        margin: -3px 5px;
  //      }
  //
  //      .areaList-box {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAFBJREFUOBFj9AtJbmNkZKpkIBH8B6n//6+dwS80FcwmUT9YuT9QLxMjOTqR9DAhsclijhrAwDAaBoMiDMjOScCED9LLAsqSoBxJTqb6D9QLALloE8jgmIRGAAAAAElFTkSuQmCC');
  //      }
  //      .areaList-tabs {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAHJJREFUOBFj9AtJbmNkZKpkQAL///9nYGRkRBJhYEAX+w+S/f+vncEvNBXMRlbtT4IYE6o9yMYQx2YiThluVSw4pD4S4w1QuDBgU4jDUAxhkF6KvTBqAAPDcAgDjJyEkVxwC4D0soCyJChHkpOp/gP1AgAXCynmU+1vzAAAAABJRU5ErkJggg==');
  //      }
  //
  //
  //    }
  //  }
  //}
</style>
