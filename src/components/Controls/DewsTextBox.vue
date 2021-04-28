<template>
  <div :uid="uid" class="dews-mobile-textbox dews-mobile-component textbox-wrap">
    <label :for="id">{{ title }}</label>
    <input v-if="!multi" :id="id" @change="onChange($event)"
           type="text" :value="value" :placeholder="placeholder"
           :required="required" :disabled="disabled" :readonly="readonly" ref="textBox"
           v-on:keyup.enter="setValueToIDE($event)">

    <textarea v-else :id="id" @change="onChange($event)"
              type="text" :value="value" :placeholder="placeholder"
              :required="required" :disabled="disabled" :readonly="readonly" ref="textArea">
    </textarea>

  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import ChangeService from "@/service/ChangeService";

export default {
  name: 'dews-textbox',
  data() {
    return {
      uid: '',
      parentUid: '',
      /* Properties */
      id: '',
      title: 'TextBox',
      value: '',
      placeholder: '',
      multi: false,
      disabled: false,
      readonly: true,
      required: false,
      multiHeight: 50,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-textbox');
  },
  mounted() {
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
    },
    setValue(value) {
      this.value = value;
    },
    setValueToIDE(evt) {
      ChangeService.sendChangeMessage('value', evt.target.value, this.uid);
      evt.target.blur();
    },
    setType(value) {
      this.type = value;
    },
    setPlaceholder(value) {
      this.placeholder = value;
    },
    setMulti(value) {
      this.multi = JSON.parse(value);
    },
    setMultiHeight(value) {
      this.multiHeight = parseInt(value);
    },
    setRequired(value) {
      this.required = JSON.parse(value);
    },
    setDisabled(value) {
      this.disabled = JSON.parse(value);
    },
    setReadonly(value) {
      this.readonly = JSON.parse(value);
    },
    onChange(e) {
      e.stopPropagation();
      this.value = e.target.value;
    },
    destroyComponent() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

@include dews-textbox();
</style>
