<template>
  <div :uid="uid" class="dews-mobile-customContainer dews-mobile-component">
<!--    <div class="dews-container-option-control">-->
<!--      <h3 class="option-sub-title" v-if="title">{{ title }}</h3>-->
<!--&lt;!&ndash;      <container-button containerType="search"></container-button>&ndash;&gt;-->
<!--    </div>-->

    <div class="dews-container-custom">
      <container-content class="container-content" :control-type="controlType">
        <div class="dews-custom-field">
          <ul class="custom-container-field custom-field" ref="customContainerField"
              :data-uid="dataUid" data-type="container">
          </ul>
        </div>
      </container-content>
    </div>
  </div>
</template>

<script>

import store from "@/store/index";
import CreateService from "@/service/CreateService";
import ContainerContent from "@/components/Containers/container/ContainerContent";

export default {
  name: "dews-custom-container",
  components: {ContainerContent},
  data() {
    return {
      uid: '',
      parentUid: '',
      dataUid: '',

      /* check child */
      hasChildControl: true,
      controlType: 'custom-container-control',

      /* Properties */
      id: '',
      col: 1,
      title: 'Custom Container',
      convenienceButton: {
        'data-set': true,
        'data-reset': true,
        'data-capture': true
      },
    }
  },
  mounted() {
    window.drake.containers.push(this.$refs.customContainerField);
  },
  created() {
    this.uid = CreateService.createUid('dews-custom-container');
    this.dataUid = CreateService.createUid('custom-field');
    store.commit('MATCH_UID', {'uid': this.uid, 'dataUid': this.dataUid});
  },
  methods: {
    setID(value) {
      this.id = value;
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

@include dews-container-custom();

.dews-container-custom {
  .container-content{
    border: 1px dotted #193a75;
    .custom-field {
      min-height: 60px;
      //border: 1px dotted #193a75;
      li {
        width: 100%;
        padding: 16px 0px 0px;
      }
    }
  }
}
</style>
