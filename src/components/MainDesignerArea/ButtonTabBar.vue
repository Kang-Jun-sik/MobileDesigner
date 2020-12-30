<template>
  <div :class="mobileLayout" class="button-tab-bar">
    <div class="dews-mobile-buttonMenu"></div>
    <div class="dews-main-buttons">
      <add-button ref="addButton"></add-button>
      <search-button ref="searchButton"></search-button>
      <delete-button ref="deleteButton"></delete-button>
      <save-button ref="saveButton"></save-button>
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
    border-radius: 0 0 27px 27px;
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
  }

  .smartPhone {
    width: 430px;
    height: 56px;
    margin: 0 25px 20px;
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
</style>
