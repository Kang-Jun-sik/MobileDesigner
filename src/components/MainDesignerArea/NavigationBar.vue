<template>
  <div :class="mobileLayout" class="navigation-bar-wrapper">
    <div class="navigation-bar-wrapper-bg">
      <div class="status-bar">
        <div class="status-bar-icon">
          <div class="square"></div>
          <div class="circle"></div>
          <div class="triangle"></div>
        </div>
      </div>
      <div class="navigation-bar">
        <div class="navigation-section-left">
          <div class="navigation-arrow"></div>
          <div class="navigation-title">{{ title }}</div>
        </div>
        <div class="navigation-section-right">
          <div class="navigation-menu"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: 'navigation-bar',
    data() {
      return {
        title: 'Navigation Bar',
      }
    },
    computed: {
      ...mapGetters({
        mobileLayout: "mobileSize"
      })
    },
  }
</script>

<style lang="scss" scoped>
.navigation-bar-wrapper {
  position: absolute;
  top: 0;
  //border-radius: 33px 33px 0 0;
  //background-color: #ffffff;

  .navigation-bar-wrapper-bg {
    //border-radius: 33px 33px 0 0;
    //background-color: #ffffff;

    .status-bar {
      height: 24px;
      margin: 0;
      background-color: #f2f2f2;
      border-radius: 33px 33px 0 0;

      .status-bar-icon {
        width: 100%;
        height: 24px;
        background-position: calc(100% - 23px) 7px;
        background-size: 46px 10px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDQ2IDEwIj4KICAgIDxwYXRoIGZpbGw9IiMxMTEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIzLTEwYTUgNSAwIDAgMSA1IDUgNSA1IDAgMCAxLTUgNSA1IDUgMCAwIDEtNS01IDUgNSAwIDAgMSA1LTV6TTQwIDBsLTYtMTBoMTJ6TTAtMTBoMTBWMEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxMCkiLz4KPC9zdmc+Cg==);
      }
    }
    .navigation-bar {
      height: 52px;
      background-color: #ffffff;

      .navigation-section-left {
        .navigation-arrow {
          float: left;
          display: inline-block;
          width: 24px;
          height: 24px;
          margin: 10px 10px 10px 25px;
          object-fit: contain;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADB/VeXAAAAwUlEQVRIDe2UbQ6DIAyGBXaA3WSME2wn3y5AUm+yCwBaM4gl2DRG/hj9Y6TlffrxxmG4ntNPQLU6tNbejTEfjHnvn60c6ZmuE1fiNqXULKC+w30TQCU+xhhf3GVJrFTYEgeAn0SEy1kAvcQRrHqKLwDnHCilHlybghhsuY0sWSDUTOHcdkOnaK2//y4ghPA+Yrm5krLkXhBi0x6QAsCW0FFHQ8iScfa4k3lpI/Ly/yjPc8+bAFBgDeHcsQd23TnpBCYMSHyrjZL2CAAAAABJRU5ErkJggg==');
        }

        .navigation-title {
          float: left;
          display: inline-block;
          height: 28px;
          margin: 8px 0;
          font-size: 18px;
          font-weight: bold;
          line-height: 1.56;
          color: black;
        }
      }

      .navigation-section-right {
        display: inline-block;
        float: right;

        .navigation-menu {
          width: 24px;
          height: 24px;
          object-fit: contain;
          margin: 10px 25px;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADB/VeXAAAARklEQVRIDWNgGAXDPgQY0X1oZGR0gZGRUR9dnEz+BSYyNRKl7f///xgeIErjqCKqhgBGJIymIqqG78gwbDQVjYx4HuK+BAACuxA8LO7sFAAAAABJRU5ErkJggg==');
        }
      }
    }
  }

  &.smartPhone {
    width: 430px;
    height: 76px;
    margin: 20px 24px 0;
  }
  &.tabletM {
    width: 859px;
    height: 76px;
    margin: 23px 20px 0;
  }
  &.tabletL {
    width: 1077px;
    height: 76px;
    margin: 23px 21px 0;
  }
}

//확장모드
.designer-style {
  .navigation-bar-wrapper {
    position: relative;
    z-index: 1;
    border-radius: 0;

    .navigation-bar-wrapper-bg {
      height: 100%;
      padding-top: 0;
      border-radius: 0;
      //border-top: 1px solid rgba(60, 60, 67, 0.18);
      //border-left: 1px solid rgba(60, 60, 67, 0.18);
      //border-right: 1px solid rgba(60, 60, 67, 0.18);
      box-shadow: 0px -10px 10px 0 rgba(0, 0, 0, 0.06);

      .status-bar {
        border-radius: 0;
      }
    }

    &.smartPhone,
    &.tabletM,
    &.tabletL {
      width: 100%;
      height: 76px;
      margin: 0;
    }
  }
}
</style>
