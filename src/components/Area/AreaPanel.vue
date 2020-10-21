<template>
  <div :uid="uid">
    <area-item ref="areaItem"></area-item>
  </div>
</template>

<script>
  import AreaItem from "@/components/Area/AreaItem";
  import GlobalService from "@/service/GlobalService";
  export default {
    name: 'dews-area-panel',
    components: {AreaItem},
    data() {
      return {
        uid: ''
      }
    },
    mounted() {
      this.uid = GlobalService.createUid('mobile-panel');
    }
  }
</script>

<style lang="scss" scoped>

</style>
