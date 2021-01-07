<template>
 <li v-if="multi" :data-value="title" @click="multiItemSelect($event)">
   <span class="text">{{ title }}</span>
   <span :data-value="title" class="checkbox">
     <dews-checkbox class="multi-checkbox"></dews-checkbox>
   </span>
 </li>

  <li v-else :data-value="title" @click="singleItemSelect($event)">
    <span>{{ title }}</span>
  </li>
</template>

<script>
import DewsCheckbox from "@/components/Controls/DewsCheckBox";

export default {

  name: 'dropdownlist-item',
  components: {DewsCheckbox},
  data() {
    return {
      title: '',
      multi: false,
    }
  },
  created() {
  },
  methods: {
    multiItemSelect(e) {

    },
    singleItemSelect(e) {

    }
  }
}
</script>

<style>

</style>
