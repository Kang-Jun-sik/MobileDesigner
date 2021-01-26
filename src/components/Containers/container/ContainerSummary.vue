<template>
  <div :uid="uid" class="option-summary">
    <div class="summary-contents">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'container-summary',
  data() {
    return {
      uid: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('container-summary')
  }
}
</script>
