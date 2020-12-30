<template>
  <div :class="mobileLayout" class="navigation-bar-wrapper">
    <div class="status-bar">
      status bar
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
  .smartPhone {
    width: 430px;
    height: 78px;
    margin: 21px 25px 0;
  }

  .tabletM {
    width: 859px;
    height: 76px;
    margin: 23px 20px 0;
  }

  .tabletL {
    width: 1077px;
    height: 76px;
    margin: 23px 21px 0;
  }

  .navigation-bar-wrapper {
    position: absolute;
    border-radius: 27px 27px 0 0;
    background-color: #ffffff;
    top: 0;

    .status-bar {
      height: 24px;
      margin: 0 10px;
      .status-bar-icon {

      }
    }

    .navigation-bar {
      height: 52px;

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
</style>
