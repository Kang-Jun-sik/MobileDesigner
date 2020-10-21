<template>
  <div class="dews-box-wrap" >
    <div class="dews-box-title" @click="onToggleClick($event)" :collapsed="collapsed">
      <h2><button class="dews-box-title-button" type="button">{{ title }}</button></h2>
    </div>
    <div class="dews-box-content-wrap" :style="style.height" part="content" >
      <div class="dews-box-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dews-box',
    data() {
      return {
        title: 'Box#1',
        collapsed: true,
        style: {
          height: ''
        }
      }
    },
    methods: {
      onToggleClick: function (e){
        if (!this.collapsed) {
          this.collapsed = true;
          this.style.height = '0px';
        }
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
