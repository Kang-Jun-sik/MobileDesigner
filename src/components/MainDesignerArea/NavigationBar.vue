<template>
  <div :class="mobileLayout" class="navigation-bar-wrapper">
    <div class="navigation-bar-wrapper-bg">
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
    height: 79px;
    margin: 20px 24px 0;
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
    border-radius: 33px 33px 0 0;
    background-color: #ffffff;
    top: 0;

    .status-bar {
      height: 24px;
      margin: 0 15px;
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

    .navigation-bar-wrapper-bg {
      padding-top: 5px;
      border-radius: 33px 33px 0 0;
      background-color: #ffffff;
    }
  }

  .designer-style {
    .navigation-bar-wrapper {
      position: fixed;
      z-index: 1;
    }

    .smartPhone {
      &::before {
        content: '';
        position: absolute;
        width: calc(100% + 23px + 25px);  //100%  + left bezel + right bezel
        height: 99px;
        top: -20px;
        left: -23px;
        background-image: url(data:image/png;base64,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);
        background-size: 100% 100%;
      }
      &::after {
        content: '';
        position: absolute;
        width: calc(100% + 23px + 25px); //100%  + left bezel + right bezel
        height: 56px;
        background-color: #d5dae2;
        z-index: -1;
        left: -23px;
        top: -20px;
      }
    }

    .tabletM {
      &::before {
        content: '';
        position: absolute;
        width: calc(100% + 20px + 23px);  //100%  + left bezel + right bezel
        height: 99px;
        top: -20px;
        left: -20px;
        background-image: url(data:image/png;base64,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);
        background-size: 100% 100%;
      }
      &::after {
        content: '';
        position: absolute;
        width: calc(100% + 23px + 25px); //100%  + left bezel + right bezel
        height: 56px;
        background-color: #d5dae2;
        z-index: -1;
        left: -23px;
        top: -23px;
      }
    }

    .tabletL {

      &::before {
        content: '';
        position: absolute;
        width: calc(100% + 21px + 21px);  //100%  + left bezel + right bezel
        height: 99px;
        top: -18px;
        left: -20px;
        background-image: url(data:image/png;base64,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);
        background-size: 100% 100%;
      }
      &::after {
        content: '';
        position: absolute;
        width: calc(100% + 21px + 21px); //100%  + left bezel + right bezel
        height: 56px;
        background-color: #d5dae2;
        z-index: -1;
        left: -23px;
        top: -23px;
      }
    }
  }

</style>
