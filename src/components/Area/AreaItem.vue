<template>
  <div :uid="uid">
    <dews-box ref="dewsBox"></dews-box>
  </div>
</template>

<script>
  import DewsBox from "@/components/Area/AreaBox";
  import GlobalService from "@/service/GlobalService";
  export default {
    name: 'area-item',
    components: {DewsBox},
    data() {
      return {
        uid: '',
      }
    },
    mounted() {
      this.uid = GlobalService.createUid('mobile-item');
    }
  }
</script>

<style lang="scss" scoped>

</style>
