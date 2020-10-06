<template>
  <div class="button-tab-bar">
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
    components: {SaveButton, DeleteButton, SearchButton, AddButton}
  }
</script>

<style lang="scss">
  div {
    padding: 0;
  }
  .button-tab-bar {
    position: absolute;
    width: 1025px;
    height: 45px;
    background-color: #2280ff;
    margin: 0 21px 21px;
    border-radius: 0 0 27px 27px;
    bottom: 0;

    .dews-main-buttons {
      margin: 10px 10px 0 0;
      float: right;
    }
  }
</style>
