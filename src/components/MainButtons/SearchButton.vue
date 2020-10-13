<template>
  <div :uid="uid" class="dews-mobile-search dews-mobile-component"></div>
</template>

<script>
  import GlobalService from "@/service/GlobalService";

  export default {
    name: 'search-button',
    data() {
      return {
        buttonAttr: false,
        uid: '',
      }
    },
    created() {
      this.uid = GlobalService.createUid('mSearchButton');
    }
  }
</script>

<style lang="scss" scoped>
  .dews-mobile-search {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 24px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADB/VeXAAABJElEQVRIDe1Viw2CMBBF4wCMwghsIBvZDWQj2QCdADeQDep7cNe0UD6BxJjoJZe7e333rpSKSfIJs9am8Cu8ge+1BgKXYN8Ayr2qkX7jhmCxFULmwI0JdDLRapyEANYBOxNf77hTa7H9P+AHjui0+IwbCAeYtm2+RbjrBn6TO88Yfh50AqOQVv/QwL9rzyDWvq7LleSAmQRc7pzGz0tOKqPUCNYQC4woLQAnCtB097lPAV5QA1b5eJf3+OoBHX0kAiCms+UlPygOsZxRDXUhebeueBdjkwOCV4BrhP9CPHMJkcfDmmY8ep/2+LojYgf4+h601Y81ijQYAqAVxuo/HPD5JJX0cSBrHXwbDiiFOBuCpkiB5lSGVKNlLHDIEz5po6ZvAN6VkjYT4XtuGAAAAABJRU5ErkJggg==');

    .ui-resizable-s, .ui-resizable-e {
      background-color: rgba(0,0,0,.75) !important;
    }
  }
</style>
