<template>
  <div class="control-list-warpper dews-componentList-wrapper">
    <div class="control-header componentList-header" v-b-toggle.componentList role="tab">
      <div class="header-title componentList-header-title">Component</div>
      <div class="header-arrow componentList-header-arrow"></div>
    </div>
    <b-collapse id="componentList" class="control-content componentList-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in mobileComponent" :key="idx"
           :class="'dews-mobile-' + key"
           class="dews-control-list componentList-content-box"
      >
        <div :class="'componentList-' + key" class="icon componentList-content-icon"></div>
        <div class="title componentList-content-title">{{ name }}</div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  export default {
    name: 'component-list',
    data() {
      return {
        mobileComponent: {
          button: 'Button',
          textbox: 'Text Box',
          checkbox: "Check Box",
          radiobutton: 'Radio Button',
          numeric: 'Numeric Text Box',
          maskbox: 'Mask Text Box',
          dropdownButton: 'Dropdown Button',
          dropdownList: 'Dropdown List',
          datePicker: 'Date Picker',
          periodPicker: 'Period Picker',
          timePicker: "Time Picker",
          zipcodePicker: 'Zip code Picker',
          complex: 'Complex Control',
          calendar: 'Calendar',
          editor: 'Editor',
          file: 'File/Multi File',
          chart: 'Chart',
          map: 'Map'
        },
      }
    },
    mounted() {
      const componentList = {
        name: 'componentList',
        control: document.querySelector('#componentList')
      }
      this.$store.commit('setControlList', componentList);
    }
  }
</script>

<style lang="scss" scoped>
  //.dews-componentList-wrapper {
  //  margin-bottom: 1px;
  //  .componentList-header {
  //    width: 150px;
  //    height: 30px;
  //    background-color: #bfccdd;
  //
  //    .componentList-header-title {
  //      display: inline-block;
  //      height: 19px;
  //      font-size: 15px;
  //      font-weight: bold;
  //      line-height: 1.62;
  //      text-align: left;
  //      color: #4f5565;
  //      margin: 1px 7px;
  //    }
  //    .componentList-header-arrow {
  //      display: inline-block;
  //      float: right;
  //      margin: 5px auto;
  //      width: 16px;
  //      height: 16px;
  //      object-fit: contain;
  //      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnPgogICAgICAgIDxwYXRoIGZpbGw9IiM0ZjU1NjUiIGQ9Ik0zLjY0Ni4zNTRhLjUuNSAwIDAgMSAuNzA3IDBsMi43OTMgMi43OTJBLjUuNSAwIDAgMSA2Ljc5MyA0SDEuMjA3YS41LjUgMCAwIDEtLjM1NC0uODU0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5MSAtMTQ1KSByb3RhdGUoMTgwIDIwMS41IDc3LjUpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=');
  //    }
  //    &.not-collapsed {
  //      .componentList-header-arrow {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAW0lEQVQ4EWNgGAWDPAT8QlMn+IWk9ONzJjMuSaDGBYyMjOlAbKGhbaxw89q5jdjUYjUAqjkeSYMBLkMYkRSBmQGhqQb/GRjOo4uD+EDFhhtWz76ATW5UbCBDAAAP0hVgqGYaXgAAAABJRU5ErkJggg==');
  //      }
  //    }
  //    &:hover {
  //      background-color: #a4b7d1;
  //    }
  //  }
  //  .componentList-content {
  //    .componentList-content-box {
  //      margin: 4px auto;
  //      width: 135px;
  //      height: 30px;
  //      border: 1px solid transparent;
  //      border-radius: 4px;
  //      background-color: #ffffff;
  //
  //      &:hover:not(:active) {
  //        border: 1px solid #c7d6e8;
  //        background-color: #e2e9f2;
  //        .componentList-content-title {
  //          color: #819fc9;
  //        }
  //      }
  //      &:active {
  //        border:1px solid #acc0d8;
  //        background-color: #c7d6e8;
  //      }
  //
  //      .componentList-content-title {
  //        display: inline-block;
  //        height: 19px;
  //        font-size: 12px;
  //        font-weight: 600;
  //        line-height: 1.62;
  //        color: #000000;
  //      }
  //
  //      .componentList-content-icon {
  //        display: inline-block;
  //        width: 16px;
  //        height: 16px;
  //        object-fit: contain;
  //        margin: -3px 5px;
  //      }
  //
  //      .componentList-button {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAhUlEQVQ4EWNgGPKA0S8kuY2RkamSVJ/8B2n4/6+dwS80Fcwm1QCQen+gXiZGqE4QB90QbGLoapjQBUjlsyBrQLZx4+rZYMfBxEB8GBukByaP4gKQIEwCZjC6GLo8igEwTaTQOL0AMwTmbHSbYfIURSMoCbCAEgOIAYtOuMlEMP6DEtLQBwBTeDW+tVzCawAAAABJRU5ErkJggg==');
  //      }
  //
  //      .componentList-textbox {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAXUlEQVQ4EWNgGPKA0S8kuY2RkamSVJ/8B2n4/6+dwS80Fcwm1QCQen+gXiZGqE4QhxxDmMjRhKxn1AAGBiZY0G9cPRsWIchhhJcN0ssCSgygtECybqDm/6CENPQBAPzPF7yhP6FYAAAAAElFTkSuQmCC');
  //      }
  //
  //      .componentList-checkbox {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAANBJREFUOBFjYKAQMIL0+4amtDAxMFaTYtY/hv+tm1fPqQHr8Q9N/U+KZpBamB4mUjWiq6evAX4hKQt8Q1MTkF1BtAtAmkEaN6+eDaZBbBBggVAQMiA01QAYmvWMv38nbtiw4ANMDqZ505o5CTAxGI3igg2rZ1/4////x/+srPsDAhIEQIrwaQbJoxgAEgDZAjTkIsgQYFTNh4mBaGwAwwCQIrgh//8zYnM2skEoYYAsQUgjTC1WF8AkiaEpNgDsBVDGgKVtYmwFqQHpIVYtXnUAqgpM4L3IINcAAAAASUVORK5CYII=');
  //      }
  //
  //      .componentList-radiobutton {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAWBJREFUOBHFUTtOw0AQndkkgjI3AW7AAYJjwVpurbApqABxASQKKsSnoIAtTB0riiMqLkG4CIIKoTgeZhxniexAm5HWO/vezPN8ANZtuKqAzr4JGwp7hLQlPAdN+LLpwCbV+JqAF5h7IM5BGDay5pskZI18G4E0n680scdVEfeWZE+bcwdUHE/3L7ra3C3DroJuYEIi2B0n9sj3oza1WtdA5ANimxNinE5PR6P4o6MPHyDHl+fhvB3l1Ah7Ura882Yz5isqkwWKGLsRR3GM4vmIL+YEZGCLnhGxO6d/v1zqHPvGV0DaWTBOYAH8ebPqKs4JMDuRaUsQEaXVYMZGBbbBfyeuojQnADCzCDMtuMqyqBT5lDf7T4ydiI+gQkas+DXjFd3KqmpECewdmEsv6F8t87W+ZM8EtFlsRAYmxmVTrkJU8D4ePJ79KyBkJzBaFWstp130PLXjJC7WvCywfv8Hqtd9sCc5E6kAAAAASUVORK5CYII=');
  //      }
  //
  //      .componentList-numeric {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAIdJREFUOBFjYBjygNEvJLmNkZGpklSf/Adp+P+vncEvNBXMJtUAkHp/oF4mRgI6QYpgSkBsZD5InAkmiY1GVgxib1w9mxGEkcXxGgBSDDMYmQ0TA9F4DUBWCGPDXALjk2QAumaQIUQbAPM3iIaxwa6gJBpBellAiQHEgIcWzHNE0P9BCWnoAwAx8Dfya0q90wAAAABJRU5ErkJggg==');
  //      }
  //
  //      .componentList-maskbox {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAALlJREFUOBFjYBjygNEvJLmNkZGpklSf/Adp+P+vncEvNBXMJtUAkHp/oF4WRiJ0BgQkCPxnZX3A+Pu3AojeuHq2AEwbE4yBjwZqeg+U54fRIJth6llgDHz0v///CxkZGRX+////AERvWj27AKaeKBcgawYZAtMMogm6AOZcoCFgfVB6AswQgi4ABhhI50dgAAoi0TD9DCzw0IALYTKQQh0e+iBVIL0soMQASgsQB2JqxifyH5SQhj4AAAHIQXGxQReUAAAAAElFTkSuQmCC');
  //      }
  //
  //      .componentList-dropdownButton {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAhUlEQVQ4EWNgGPKA0S8kuY2RkamSVJ/8B2n4/6+dwS80Fcwm1QCQen+gXiZGqE4QB90QbGLoapjQBUjlsyBrQLZx4+rZYMfBxEB8GBukByaP4gKQIEwCZjC6GLo8igEwTaTQOL0AMwTmbHSbYfIURSMoCbCAEgOIAYtOuMlEMP6DEtLQBwBTeDW+tVzCawAAAABJRU5ErkJggg==');
  //      }
  //
  //      .componentList-dropdownList {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAhUlEQVQ4EWNgGPKA0S8kuY2RkamSVJ/8B2n4/6+dwS80Fcwm1QCQen+gXiZGqE4QB90QbGLoapjQBUjlsyBrQLZx4+rZYMfBxEB8GBukByaP4gKQIEwCZjC6GLo8igEwTaTQOL0AMwTmbHSbYfIURSMoCbCAEgOIAYtOuMlEMP6DEtLQBwBTeDW+tVzCawAAAABJRU5ErkJggg==');
  //      }
  //
  //      .componentList-calendar {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAk0lEQVQ4EWNgoCbwD039QMg8dDWMIA3+oSnHGBgYLQlpRpX/f3zj6jlWTBBBUjWDdEH0QAz4/x/VcGJ4yHqA/iLZBJgeqBeIsRK7GrwGgGyB2YTMRjYKrwHICvGyYbbgVYQmCdOD4QJkp+JiI5uFYQCyJNFsmHOI1gBUCNNDsQtYQLb+Y/jfCjORWFeA9BCrFq86AGdgNgQpGvBlAAAAAElFTkSuQmCC');
  //      }
  //
  //      .componentList-editor {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAeklEQVQ4EWNgoBAwgvT7h6b+RzZn4+rZYHFkMVzqWGCKYJpAhqEbCFMDopHVgfhwA0AcGIApgvFhNDaD4QZgk4RpRKZxqsMpgawbykZWy4RFniShUQMYGChOieAQR44WZDZ6dCDLwdjwhISsGCaJLIaLTR0v4DKdGHEAG9Y4bjkAvHsAAAAASUVORK5CYII=');
  //      }
  //
  //      .componentList-datePicker {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAItJREFUOBFjYKAm8A9JeUDIPHQ1jCANfqGpF4AMfUKa0eQvbFw925AJJEiGZpA2AxABNgDEoAj4h6b+J9UAmB6KXUC0ASAbYbYiu5ZoA5A1IbNZkDn42MAoA0c5uhq8LkB2NjIb2RC8BiArxMvGFjh4NQAlYXoodgE4EIGp6CLMREI2w+RBemBsimgACdMlOFB58D4AAAAASUVORK5CYII=');
  //      }
  //
  //      .componentList-periodPicker {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAHBJREFUOBFjYKAm8A9JeUDIPHQ1jCANfqGpF4AMfUKa0eQvbFw925AJJEiGZpA2AxABNgDEoAj4h6b+J9UAmB6KXcCCbjPMZHRxGB8YcOCAh/Gp7wJ0G2A24aKHgReoE4jAVHSRUPShByJID7oYWXwA+10e+Lr7lKQAAAAASUVORK5CYII=');
  //      }
  //
  //      .componentList-timePicker {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAxUlEQVQ4EWNgGPKA0S8kuY2RkamSVJ/8B2n4/6+dwS80Fcwm1QCQen+gXhZGInT6haSuYmBkEGb4z/B205rZYchamJA52NhgzQz/H21aPdsZ6OZHED5CJUEDQDZvWjOnBKQFTINcggQIGwB0tl9ISg9ID5BeyPD//18k/QwEDYD4mVEOGNh7gRolgWGmFhCaagAzhAXGwEcjBxxI8z8GhglA9Q4gPSykxuGG1bMvwDSD9LKAEgMoLRATnSAbkcF/UEIa+gAAO/4+T7Rces8AAAAASUVORK5CYII=');
  //      }
  //
  //      .componentList-zipcodePicker {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAxUlEQVQ4EWNgGPKA0S8kuY2RkamSVJ/8B2n4/6+dwS80Fcwm1QCQen+gXhZGInT6haSuYmBkEGb4z/B205rZYchamJA52NhgzQz/H21aPdsZ6OZHED5CJUEDQDZvWjOnBKQFTINcggQIGwB0tl9ISg9ID5BeyPD//18k/QwEDYD4mVEOGNh7gRolgWGmFhCaagAzhAXGwEcjBxxI8z8GhglA9Q4gPSykxuGG1bMvwDSD9LKAEgMoLRATnSAbkcF/UEIa+gAAO/4+T7Rces8AAAAASUVORK5CYII=');
  //      }
  //
  //      .componentList-file {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAABHUlEQVQ4Ec1QMY7CMBC0Q4xOgBASDb+BliIQoVx1TYpAzRt4QfpQQB0kDLyBHkRNT3mUXELMbpCtkIt1ka5hpZVnZ8fjXRPydmE7Xg8zP9jwcyww87yRJWzbbYFijYk429PhF4OEMU4obWEK01zrLmV5ZWA53pQS0lVNSnvIqVoDTMnvVnMfsC/33IQB+P0dykAnHTgep5QOZR8fgFhuV3MXObWCFORPI45d+NSj5BEDp1ZLDfr9ryYICkfmfPENIhf6V0zEjNVimGwG9XMC1qidLWvSRqIoeBgcEkKmmIhvt586PDdB7a8/0H3eLgwWRebpCkWNspyc4GR8iP3AGcOUJULA6ok4oTI1MKJodK9UOyWuKknlHl1U8R/wACg7VxKhWX/lAAAAAElFTkSuQmCC');
  //      }
  //
  //      .componentList-chart {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAh0lEQVQ4EWNgoBAwgvT7hqa0MDEwVpNi1j+G/62bV8+pAevxD039T4pmkFqYHiZSNaKrx2sAyBaYTegaYXy8BsAU4aMxDCDGVmQDMQxAliSGTbQBuFxGtAG4XENdA5CjjBg2yFUsyE7buHo2OGkjixFiU+wFsAtAGQPZyYRsBcmD9BCjjqAaAPgvKIL3Qup7AAAAAElFTkSuQmCC');
  //      }
  //
  //      .componentList-complex {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAtElEQVQ4EWNgGGjA6BeaeoGRgUGfRIdc2Lh6tiFYj39o6n8SNTMg62GCaUYWhInho0Hq/UJSK+EG4FOMTQ7oBUZGRoY2FmySyGK+oakJQFvmg8T+//+/cNOaOQnI8gRdsHn17AX/GBgSsWkGGUTQBSBFIEOAFAhjAIIuwNCBJgA3ABQoaHJEcVmAieAiOAr/A1nAYCUGgPRgqCM1HYAMAOmBB+K//wwVpBry7/+/UgyX0F0AAGyCPAKrThbCAAAAAElFTkSuQmCC');
  //      }
  //
  //      .componentList-map {
  //        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAABBklEQVQ4EaVTTQ7BUBB+Uw7gJuIEXEBYsO+CNdYs2oS9pUSdAEnpAXACjuAK1pI3Zso0Mq9N/DSZzPdmvu/rvNdXY/58gPXNbm/qGRh/42UNzpJ1NEk1rW4fvxEzVzTlPGG702sgwMAgNtI+wJFGDeP18qL5ni68xAeqtw1AJQ3CNOKZe5rvGFiAuZDorTUOWVMvECzZMSBBVZo6U6+ua44BjXoSEo/Nka0Rd4IlOwZUGEpTZ++TLfBJI2KoxRZx9NFXYOF+EwVqK6dkE2WH+27ubEGa3r3kE75xvDBB9yk0iOPF1VrrczB2pc9K7k0UcrJdxYKLcmrAP4bc7SKirrNG135aPwAI5Vixvw29FQAAAABJRU5ErkJggg==');
  //      }
  //    }
  //  }
  //}

</style>
