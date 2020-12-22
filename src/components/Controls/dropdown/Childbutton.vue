<template>
  <button :uid="uid" class="button-list-child" :disabled="disabled">
    <span>{{ text }}</span>
  </button>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-dropdown-childbutton',
  data() {
    return {
      uid: '',
      text: '',
      disabled: false
    }
  },
  created() {
    this.uid = CreateService.createUid('dropdown-childbutton');
  }
}
</script>

<style lang="scss" scoped>

</style>
