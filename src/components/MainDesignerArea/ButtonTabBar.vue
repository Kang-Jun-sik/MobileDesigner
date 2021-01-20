<template>
  <div :class="mobileLayout" class="button-tab-bar">
    <div class="button-tab-bar-bg">
      <div class="dews-mobile-buttonMenu"></div>
      <div class="dews-main-buttons">
        <add-button ref="addButton"></add-button>
        <search-button ref="searchButton"></search-button>
        <delete-button ref="deleteButton"></delete-button>
        <save-button ref="saveButton"></save-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import AddButton from "@/components/MainButtons/AddButton";
  import SearchButton from "@/components/MainButtons/SearchButton";
  import DeleteButton from "@/components/MainButtons/DeleteButton";
  import SaveButton from "@/components/MainButtons/SaveButton";

  export default {
    name: 'button-tab-bar',
    components: {SaveButton, DeleteButton, SearchButton, AddButton},
    data() {
      return {}
    },
    mounted() {
      this.$store.commit('addItem', this.$refs.addButton);
      this.$store.commit('addItem', this.$refs.searchButton);
      this.$store.commit('addItem', this.$refs.deleteButton);
      this.$store.commit('addItem', this.$refs.saveButton);
    },
    computed: {
      ...mapGetters({
        mobileLayout: "mobileSize"
      })
    },
  }
</script>

<style lang="scss" scoped>
  .button-tab-bar {
    position: absolute;
    backdrop-filter: blur(20px);
    background-color: rgba(28, 144, 251, 0.95);
    border-radius: 0 0 33px 33px;
    bottom: 0;

    .dews-mobile-buttonMenu {
      margin: 16px 0 0 23px;
      float: left;
      width: 24px;
      height: 24px;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADB/VeXAAAAX0lEQVRIDWNgGCzg////AUB8Hojvg9hUdxfQ0AdADAPnibWAiViFaOoY0fiUc4FOBwXRBSAG+YT6QUS5E0dNGPQhAE1FoxkNd0xBg2g0o+EOolEZgiEwmtGIDaLBl9EAiKiEf0/YLGcAAAAASUVORK5CYII=');
    }

    .dews-main-buttons {
      margin: 17px 0 0 0;
      float: right;
    }

    .button-tab-bar-bg {
      width: 100%;
      height: 56px;
      background-color: rgba(28, 144, 251, 0.95);
      border-radius: 0 0 33px 33px;
    }
  }

  .smartPhone {
    width: 430px;
    height: 56px;
    margin: 0 24px 20px;
  }

  .tabletM {
    width: 859px;
    height: 56px;
    margin: 0 20px 20px;
  }

  .tabletL {
    width: 1077px;
    height: 56px;
    margin: 0 21px 20px;
  }

  .designer-style {
    .button-tab-bar {
      position: absolute;
      z-index: 0;
    }

    .smartPhone {
      &::before {
        content: '';
        position: absolute;
        width: calc(100% + 23px + 25px);
        height: 76px;
        bottom: -20px;
        left: -23px;
        background-image: url(data:image/png;base64,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);
        background-size: 100% 100%;
      }
      &::after {
        content: '';
        position: absolute;
        width: calc(100% + 23px + 25px);
        height: 76px;
        background-color: #d5dae2;
        z-index: -1;
        left: -23px;
        bottom: -20px;
      }
    }
    .tabletM {
      &::before {
        content: '';
        position: absolute;
        width: calc(100% + 20px + 23px);
        height: 76px;
        bottom: -19px;
        left: -20px;
        background-image: url(data:image/png;base64,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);
        background-size: 100% 100%;
      }
      &::after {
        content: '';
        position: absolute;
        width: calc(100% + 20px + 23px);
        height: 76px;
        background-color: #d5dae2;
        z-index: -1;
        left: -20px;
        bottom: -20px;
      }
    }
    .tabletL {


      &::before {
        content: '';
        position: absolute;
        width: calc(100% + 21px + 21px);
        height: 76px;
        bottom: -19px;
        left: -20px;
        background-image: url(data:image/png;base64,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);
        background-size: 100% 100%;
      }
      &::after {
        content: '';
        position: absolute;
        width: calc(100% + 21px + 21px);
        height: 76px;
        background-color: #d5dae2;
        z-index: -1;
        left: -20px;
        bottom: -20px;
      }
    }
  }
</style>
