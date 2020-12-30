<template>
  <div :uid="uid" class="dews-button-group">
    <ul class="button-group-wrap">
      <li>
        <dews-button></dews-button>
        <dews-button></dews-button>
        <dews-button></dews-button>
      </li>
    </ul>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DewsButton from "@/components/Controls/DewsButton";

export default {
  name: 'dews-button-group',
  components: {DewsButton},
  data() {
    return {
      uid: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-button-group');
  }
}
</script>

<style lang="scss" scoped>

</style>