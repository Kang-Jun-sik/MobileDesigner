<template>
  <div :uid="uid" class="dews-mobile-card dews-mobile-component card">
    <div class="card-header">
      <div class="card-control">
        <ul>
          <li>
            <dews-checkbox class="bookmark" val="null"></dews-checkbox>
          </li>
          <li>
            <button class="editing"><span>편집</span></button>
          </li>
          <li>
            <dews-checkbox class="card-select-checkbox" val="null"></dews-checkbox>
          </li>
        </ul>
      </div>
      <div class="title">
        <h3></h3>
        <div class="sub">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <ul class="list-field">
      <li v-for="(field, idx) in fields" :key="idx">
        <p class="name">{{ field }}</p>
        <p class="item"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import DewsCheckbox from "@/components/Controls/DewsCheckBox";

export default {
  name: 'cardlist-field',
  components: {DewsCheckbox},
  data() {
    return {
      uid: '',
      fields: [],
    }
  },
  created() {
    this.uid = CreateService.createUid('cardlist-field');
  },
  methods: {
    setField(data) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "application/xml");
      const columns = xmlDoc.querySelector('columns');

      Array.from(columns.children).forEach(col => this.fields.push(col.getAttribute('title')));
    },
  }
}
</script>

<style scoped lang="scss">
@import '../../../../node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import '../../../../node_modules/@dews/dews-mobile-style/scss/mixins/mixins';
@include dews-cardlist();
</style>
