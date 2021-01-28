<template>
  <button :uid="uid" class="dews-mobile-datasource dews-mobile-component">datasource</button>
</template>

<script>
import CreateService from "@/service/CreateService";
export default {
  name: 'dews-datasource',
  data() {
    return {
      uid: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-datasource');
  }
}
</script>
