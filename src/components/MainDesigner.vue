<template>
  <div class="main-designer-wrapper">
    <div class="main-designer"></div>
  </div>
</template>

<script>
  import { eventBus } from "@/main";
  import {sendToIDECmd} from "../utils/mobileDesignerToIDE";

  export default {
    name: 'mainDesigner-wrapper',
    data() {
      return {
        designer: ''
      }
    },
    created() {
      eventBus.$on('control', (control) => {
        let newControl = document.createElement('div');
        newControl.innerText = control;
        this.designer.appendChild(newControl);
        sendToIDECmd("create","button create test");
      })
    },
    mounted() {
      this.designer = document.querySelector('.main-designer');
    },
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 10px;
  }
  .main-designer {
    display: inline-flex;
    width: 700px;
    height: 950px;
    border: 40px solid #121212;
    border-width: 55px 7px;
    border-radius: 40px;
    margin: 10px 0;
    overflow: auto;
    transition: all 0.5s ease;
    animation: fadein 2s;
  }
</style>
