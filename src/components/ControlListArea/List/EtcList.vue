<template>
  <div class="control-list-warpper dews-etcList-wrapper">
    <div class="control-header etcList-header" v-b-toggle.etcList role="tab">
      <div class="header-title etcList-header-title">Etc</div>
      <div class="header-arrow etcList-header-arrow"></div>
    </div>
    <b-collapse id="etcList" class="control-content etcList-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in etcControl" :key="idx"
           :class="'dews-mobile-' + key"
           class="dews-control-list etcList-content-box"
      >
        <div :class="'etcList-' + key" class="icon etcList-content-icon"></div>
        <div class="title etcList-content-title">{{ name }}</div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  export default {
    name: 'etc-list',
    data() {
      return {
        etcControl: {
          messageBox: 'Message box',
          snackBar: 'Snack Bar',
          tooltipBox: 'Tooltip',
          loadingBox: 'Loading',
          progressBar: 'Progress Bar',
          slider: 'Slider'
        }
      }
    },
    mounted() {
      const etcList = {
        name: 'etcList',
        control: document.querySelector('#etcList')
      }
      this.$store.commit('setControlList', etcList);
    }
  }
</script>

<style lang="scss" scoped>
  //.dews-etcList-wrapper {
  //  .etcList-header {
  //    width: 150px;
  //    height: 30px;
  //    background-color: #bfccdd;
  //    .etcList-header-title {
  //      display: inline-block;
  //      height: 19px;
  //      font-size: 15px;
  //      font-weight: bold;
  //      line-height: 1.62;
  //      text-align: left;
  //      color: #4f5565;
  //      margin: 1px 7px;
  //    }
  //    .etcList-header-arrow {
  //      display: inline-block;
  //      float: right;
  //      margin: 5px auto;
  //      width: 16px;
  //      height: 16px;
  //      object-fit: contain;
  //      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnPgogICAgICAgIDxwYXRoIGZpbGw9IiM0ZjU1NjUiIGQ9Ik0zLjY0Ni4zNTRhLjUuNSAwIDAgMSAuNzA3IDBsMi43OTMgMi43OTJBLjUuNSAwIDAgMSA2Ljc5MyA0SDEuMjA3YS41LjUgMCAwIDEtLjM1NC0uODU0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5MSAtMTQ1KSByb3RhdGUoMTgwIDIwMS41IDc3LjUpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=');
  //    }
  //    &.not-collapsed {
  //      .etcList-header-arrow {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAW0lEQVQ4EWNgGAWDPAT8QlMn+IWk9ONzJjMuSaDGBYyMjOlAbKGhbaxw89q5jdjUYjUAqjkeSYMBLkMYkRSBmQGhqQb/GRjOo4uD+EDFhhtWz76ATW5UbCBDAAAP0hVgqGYaXgAAAABJRU5ErkJggg==');
  //      }
  //    }
  //    &:hover {
  //      background-color: #a4b7d1;
  //    }
  //  }
  //  .etcList-content {
  //    .etcList-content-box {
  //      width: 135px;
  //      height: 30px;
  //      border: 1px solid transparent;
  //      border-radius: 4px;
  //      background-color: #ffffff;
  //      margin: 4px auto;
  //
  //      &:hover:not(:active) {
  //        border: 1px solid #c7d6e8;
  //        background-color: #e2e9f2;
  //        .etcList-content-title {
  //          color: #819fc9;
  //        }
  //      }
  //      &:active {
  //        border:1px solid #acc0d8;
  //        background-color: #c7d6e8;
  //      }
  //
  //      .etcList-content-title {
  //        display: inline-block;
  //        height: 19px;
  //        font-size: 12px;
  //        font-weight: 600;
  //        line-height: 1.62;
  //        color: #000000;
  //      }
  //
  //      .etcList-content-icon {
  //        display: inline-block;
  //        width: 16px;
  //        height: 16px;
  //        object-fit: contain;
  //        margin: -3px 5px;
  //      }
  //
  //      .etcList-messageBox {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAbklEQVQ4EWNgGGjACHOAb2hKCxMDYzWMj4/+x/C/dfPqOTUgNUwwhcRqhmjCYpF/aOp/mGGEaGS1cBcQ0oRLngWbBLINyPIbV8+GhxlMHKsB2BTCNKDTWA0YYS6gXjSCkieuwEMPeZBadLGB4wMAVIIlJOFe2hkAAAAASUVORK5CYII=');
  //      }
  //
  //      .etcList-snackBar {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAnElEQVQ4EWNgGGjACHOAX2jqBSBHH8YnQF/YuHq2IYoa/9DU/ygCeDjIapnwqCNKigWbKmQbkOWBzoZ7GSaO1QBsCmEa0GmsBtDVBRQHIsUGYIRBUGRWz98/v4vRAwvEZ2Zh7V23fFoJshyGASDNqcnxyGrg7NlzF4IMRjEAHq+wpMzExMTw798/uCZkBkwOmGQvblo92wBZbuDYACdEMG/HOw4tAAAAAElFTkSuQmCC');
  //      }
  //
  //      .etcList-tooltipBox {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAvElEQVQ4EWNgGPKAEeQDv9DUC0CGPom+ubBx9WxDsB7/0NT/JGpmgOlhIlUjunoWdAGYyejiMD7Q2WBvw/gYBqArgCnERWMYQHcXUCcQgXF4EYvTFwDDIxHkd7+QlAWMjIzxyOEA0gPio4QoTEFAQILAP1bWA0BFE6CKCph+/3bYsGHBB5gaGI3VAJBkQGiqwf///zeA2EDbAzasnn0BxEYHzOgCMP6Na+deqGkbf/jPyHhg0+rZO2DiVKcBYS47EPPopSUAAAAASUVORK5CYII=');
  //      }
  //
  //      .etcList-loadingBox {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAABM0lEQVQ4EWNgGNTALyRlgX9o6n18jmRBlnRwSOAQEGCQ+PCB4cWBAwt+gOX+/2cE0QEBCQL/WFnjmX4zb9ywYcYDsByQQDGAU4hFhIGJQYFTiOEPUO7JpjVzEmAKGVhYDIAmTfjH8kcQKNYAE0cx4Pu7Oy/YBRS+fP/w4AtMAZz+8+fCPxaWQuY/LBvgYlRlBISkFIAwIUOBAbsBGLDrYeoQXmBiegATxEszMir8x6uARElwFMH0OIRm8fAx/gn+9J9l7YHV01ACEhyNzMz+TH//AqNxwQeYHiYYA0TzMvwOYfz/P4GP4acNsjiI/ZeVNYCRiWkBMCZQwgkRBkBFnxlY1wA1v/jEwH4EpMk/JOUBAyPj+42rZxsy//69AahZgenPnwkgOaIAKMRByZkoxQOmCAA2uV8AdTaUaQAAAABJRU5ErkJggg==');
  //      }
  //
  //      .etcList-progressBar {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAA2ElEQVQ4EWNgGAUUhwBjQECCACMb+2YmZibLP3/+MGMzkYWFheHfv39gDJW/xvDv/8yNa+dMYmHk4NgiJChg4eLkwMzLy4NNP8Pnz18Y9u4/+OXthw9L1i+bnukdmKLJzMLY6huSwsTE8P+/FT7NIBNBBjs72vMw/WcIBfG3rp9znZHhTw0TI2MqE0iAjY0VRJEFmBgYGfdt37H7D8iZuABIbh/QCwyMDHNAakBe+P+fufnf//+zGUECgREZR5gYGSz+/PlLdCD+Z2CYtWn17Ikg/aOAwhAAADz4UKNO2j9GAAAAAElFTkSuQmCC');
  //      }
  //
  //      .etcList-slider {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAABZ0lEQVQ4EcVQsU4CQRCd2T3UHCRGYxRiYmdhLAmxlEYbg0YjJR1QqP+g9LZaoIUJJUYNNIYKGwsJJb0N3mHs5C4EuF13L7nL3plcyzYz783M2zcDMOuHYQOHp8XLMNd4vK+EOQ8HBMRwK5Vc20ulkl4dDHMAhmFWhMiVTyqJpuQyXUZEIIT4tMQcIOsToSQs0Owb5vDLMNtenxjeFTbfPByO7grZXHlFjzlxjeK5+M5W7bo34RCfcn6jDtsTarWb1R8tnS7ridj0AgHXucM2keC72ih+mJswtkMRl1Q+ERv3t/P5a63brdr7G4Vbwqk+T7UzYXmsNkpMCX5MHCfggKFj9+r1oXuD1nPtWw4Ju5YI7lqqiDik9fry8KlyXh44IgccAbBfrygjc3CAFBZVLjI/ypd6B8fFLdkko8RRAwEHspGNMEMXuFwpQTXoCLwaJfBvX9mcOyllCOU1Yb/QfLrrRAnMvvYH8IRzb6KXSxAAAAAASUVORK5CYII=');
  //      }
  //    }
  //  }
  //}
</style>
