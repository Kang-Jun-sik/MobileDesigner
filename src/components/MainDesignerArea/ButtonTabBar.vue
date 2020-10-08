<template>
  <div :class="mobileLayout" class="button-tab-bar">
    <div class="dews-main-buttons">
      <add-button></add-button>
      <search-button></search-button>
      <delete-button></delete-button>
      <save-button></save-button>
    </div>
  </div>
</template>

<script>
  import AddButton from "@/components/MainButtons/AddButton";
  import SearchButton from "@/components/MainButtons/SearchButton";
  import DeleteButton from "@/components/MainButtons/DeleteButton";
  import SaveButton from "@/components/MainButtons/SaveButton";
  export default {
    name: 'button-tab-bar',
    components: {SaveButton, DeleteButton, SearchButton, AddButton},
    data() {
      return {
        mobileLayout: this.$store.state.mobileLayout,
      }
    },
    computed: {
      buttonTabBarSize: function() {
        return this.$store.getters.mobileLayoutCheck
      }
    },
    watch: {
      buttonTabBarSize: function(state) {
        this.mobileLayout = state;
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 0;
  }

  .button-tab-bar {
    position: absolute;
    background-color: #2280ff;
    border-radius: 0 0 27px 27px;
    bottom: 0;

    .dews-main-buttons {
      margin: 10px 10px 0 0;
      float: right;
    }
  }

  .smartPhone {
    width: 363px;
    height: 45px;
    margin: 0 21px 20px;
  }

  .tabletM {
    width: 768px;
    height: 45px;
    margin: 0 20px 20px;
  }

  .tabletL {
    width: 1025px;
    height: 45px;
    margin: 0 21px 21px;
  }
</style>
