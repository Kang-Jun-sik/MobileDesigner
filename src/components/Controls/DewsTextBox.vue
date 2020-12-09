<template>
  <div :uid="uid" class="dews-mobile-textbox textbox-wrap">
    <label :for="id">{{ title }}</label>
    <input :id="id" @click="onClick($event)" @change="onChange($event)"
           type="text" :value="value" :placeholder="placeholder"
           :required="required" :disabled="disabled" :readonly="readonly" ref="textBox">

<!--    <label for="">value</label>-->
<!--    <input id="" type="text" class="dews-input" placeholder="placeholder" value="value">-->

<!--    <label for="">placeholder</label>-->
<!--    <input id="" type="text" class="dews-input" placeholder="placeholder" value="value">-->

<!--    <label for="">readonly</label>-->
<!--    <input id="" type="text" class="dews-input" placeholder="placeholder" value="value" readonly="readonly">-->

<!--    <label for="">disabled</label>-->
<!--    <input id="" type="text" class="dews-input" placeholder="placeholder" value="value" disabled="disabled">-->

<!--    <label for="multi-textbox">multi-textbox value</label>-->
<!--    <textarea class="dews-multi-input" id="multi-textbox">value </textarea>-->
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-textbox',
  data() {
    return {
      id: '',
      uid: '',
      title: 'textbox',
      value: '',
      placeholder: '',
      required: false,
      disabled: false,
      readonly: false,
      multi: false,
      multiHeight: 50,
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-textbox')
  },
  mounted() {
  },
  methods: {
    onClick(e) {
      this.$refs.textBox.focus();
    },
    onChange(e) {
      e.stopPropagation();
      this.value = e.target.value;
    },
    setRequired() {
      this.required = !this.required;
    },
    setDisabled() {
      this.disabled = !this.disabled;
    },
    setReadonly() {
      this.readonly = !this.readonly;
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

//======================================
// dews-textbox
//======================================
//--------------------------------------
// 레이아웃 영역
//--------------------------------------
* {
  @include reset();
}
.textbox-wrap {
  label {
    @include label-wrap();
  }
  input[type='text'] {
    @include input-wrap();
  }

  textarea {
    @include input-wrap();
    resize: none;
    height: 64px;
  }
}
</style>
