<template>
  <div :uid="uid" :id="id" class="dews-mobile-formContainer dews-mobile-component">
    <div class="dews-container-option-control">
      <h3 class="option-sub-title" v-if="title">{{ title }}</h3>
      <container-button containerType="form"></container-button>
    </div>

    <container-content :control-type="controlType">

    </container-content>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import ContainerContent from "@/components/Containers/container/ContainerContent";
import ContainerButton from "@/components/Containers/container/ContainerButton";

export default {
  name: 'dews-form-container',
  components: {ContainerButton, ContainerContent},
  data() {
    return {
      uid: '',
      parentUid: '',

      /* check child */
      hasChildControl: true,
      controlType: 'common-control',

      /* Properties */
      id: '',
      title: 'Form Container',
      convenienceButton: {
        'data-set': true,
        'data-reset': true,
        'data-capture': true
      },
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-form-container');
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
    setConvenienceButton(name, value) {
      this.convenienceButton[name] = JSON.parse(value);
    },
    destroyComponent() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

@include dews-container-form();

//--------------------------------------
// FD 추가 영역
//--------------------------------------
.dews-box-content-wrap {
  min-height: 40px;
}
</style>
