<template>
  <div class="dews-componentList-wrapper">
    <div class="componentList-header" v-b-toggle.componentList role="tab">
      <div class="componentList-header-title">Component</div>
      <div class="componentList-header-arrow"></div>
    </div>
    <b-collapse id="componentList" class="componentList-content" accordion="dews-control" role="tabpanel">
      <div v-for="(name, key, idx) in mobileComponent" :key="idx"
           :class="'dews-mobile-' + key"
           class="dewsControl componentList-content-box"
      >
        <div :class="'componentList-' + key" class="componentList-content-icon"></div>
        <div class="componentList-content-title">{{ name }}</div>
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
          textBox: 'Text box',
          numTextBox: 'Numeric text box',
          maskTextBox: 'Mask text box',
          calendar: 'Calendar',
          editor: 'Editor',
          zipcodePicker: 'Zip code Picker',
          file: 'File/Multi File',
          chart: 'Chart',
          complex: 'Complex Control',
          map: 'Map'
        },
      }
    },
    mounted() {
      const componentElement = {
        name: 'componentElement',
        control: document.querySelector('#componentList')
      }
      this.$store.commit('findElement', componentElement);
    }
  }
</script>

<style lang="scss" scoped>
  .dews-componentList-wrapper {
    margin-bottom: 1px;
    .componentList-header {
      width: 150px;
      height: 30px;
      background-color: #bfccdd;

      .componentList-header-title {
        display: inline-block;
        height: 19px;
        font-size: 15px;
        font-weight: bold;
        line-height: 1.62;
        text-align: left;
        color: #4f5565;
        margin: 1px 7px;
      }

      .componentList-header-arrow {
        display: inline-block;
        float: right;
        margin: 5px auto;
        width: 16px;
        height: 16px;
        object-fit: contain;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAW0lEQVQ4EWNgGAWDPAT8QlMn+IWk9ONzJjMuSaDGBYyMjOlAbKGhbaxw89q5jdjUYjUAqjkeSYMBLkMYkRSBmQGhqQb/GRjOo4uD+EDFhhtWz76ATW5UbCBDAAAP0hVgqGYaXgAAAABJRU5ErkJggg==');
      }
    }

    .componentList-content {
      .componentList-content-box {
        width: 135px;
        height: 30px;
        border-radius: 4px;
        background-color: #ffffff;

        .componentList-content-title {
          display: inline-block;
          height: 19px;
          font-size: 12.5px;
          font-weight: 600;
          line-height: 1.62;
          color: #000000;
        }

        .componentList-content-icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          object-fit: contain;
          margin: -3px 5px;
        }

        .componentList-button {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAhUlEQVQ4EWNgGPKA0S8kuY2RkamSVJ/8B2n4/6+dwS80Fcwm1QCQen+gXiZGqE4QB90QbGLoapjQBUjlsyBrQLZx4+rZYMfBxEB8GBukByaP4gKQIEwCZjC6GLo8igEwTaTQOL0AMwTmbHSbYfIURSMoCbCAEgOIAYtOuMlEMP6DEtLQBwBTeDW+tVzCawAAAABJRU5ErkJggg==');
        }

        .componentList-textBox {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAXUlEQVQ4EWNgGPKA0S8kuY2RkamSVJ/8B2n4/6+dwS80Fcwm1QCQen+gXiZGqE4QhxxDmMjRhKxn1AAGBiZY0G9cPRsWIchhhJcN0ssCSgygtECybqDm/6CENPQBAPzPF7yhP6FYAAAAAElFTkSuQmCC');
        }

        .componentList-numTextBox {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAXUlEQVQ4EWNgGPKA0S8kuY2RkamSVJ/8B2n4/6+dwS80Fcwm1QCQen+gXiZGqE4QhxxDmMjRhKxn1AAGBiZY0G9cPRsWIchhhJcN0ssCSgygtECybqDm/6CENPQBAPzPF7yhP6FYAAAAAElFTkSuQmCC');
        }

        .componentList-maskTextBox {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAXUlEQVQ4EWNgGPKA0S8kuY2RkamSVJ/8B2n4/6+dwS80Fcwm1QCQen+gXiZGqE4QhxxDmMjRhKxn1AAGBiZY0G9cPRsWIchhhJcN0ssCSgygtECybqDm/6CENPQBAPzPF7yhP6FYAAAAAElFTkSuQmCC');
        }

        .componentList-calendar {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAk0lEQVQ4EWNgoCbwD039QMg8dDWMIA3+oSnHGBgYLQlpRpX/f3zj6jlWTBBBUjWDdEH0QAz4/x/VcGJ4yHqA/iLZBJgeqBeIsRK7GrwGgGyB2YTMRjYKrwHICvGyYbbgVYQmCdOD4QJkp+JiI5uFYQCyJNFsmHOI1gBUCNNDsQtYQLb+Y/jfCjORWFeA9BCrFq86AGdgNgQpGvBlAAAAAElFTkSuQmCC');
        }

        .componentList-editor {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAeklEQVQ4EWNgoBAwgvT7h6b+RzZn4+rZYHFkMVzqWGCKYJpAhqEbCFMDopHVgfhwA0AcGIApgvFhNDaD4QZgk4RpRKZxqsMpgawbykZWy4RFniShUQMYGChOieAQR44WZDZ6dCDLwdjwhISsGCaJLIaLTR0v4DKdGHEAG9Y4bjkAvHsAAAAASUVORK5CYII=');
        }

        .componentList-zipcodePicker {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAxUlEQVQ4EWNgGPKA0S8kuY2RkamSVJ/8B2n4/6+dwS80Fcwm1QCQen+gXhZGInT6haSuYmBkEGb4z/B205rZYchamJA52NhgzQz/H21aPdsZ6OZHED5CJUEDQDZvWjOnBKQFTINcggQIGwB0tl9ISg9ID5BeyPD//18k/QwEDYD4mVEOGNh7gRolgWGmFhCaagAzhAXGwEcjBxxI8z8GhglA9Q4gPSykxuGG1bMvwDSD9LKAEgMoLRATnSAbkcF/UEIa+gAAO/4+T7Rces8AAAAASUVORK5CYII=');
        }

        .componentList-file {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAABHUlEQVQ4Ec1QMY7CMBC0Q4xOgBASDb+BliIQoVx1TYpAzRt4QfpQQB0kDLyBHkRNT3mUXELMbpCtkIt1ka5hpZVnZ8fjXRPydmE7Xg8zP9jwcyww87yRJWzbbYFijYk429PhF4OEMU4obWEK01zrLmV5ZWA53pQS0lVNSnvIqVoDTMnvVnMfsC/33IQB+P0dykAnHTgep5QOZR8fgFhuV3MXObWCFORPI45d+NSj5BEDp1ZLDfr9ryYICkfmfPENIhf6V0zEjNVimGwG9XMC1qidLWvSRqIoeBgcEkKmmIhvt586PDdB7a8/0H3eLgwWRebpCkWNspyc4GR8iP3AGcOUJULA6ok4oTI1MKJodK9UOyWuKknlHl1U8R/wACg7VxKhWX/lAAAAAElFTkSuQmCC');
        }

        .componentList-chart {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAh0lEQVQ4EWNgoBAwgvT7hqa0MDEwVpNi1j+G/62bV8+pAevxD039T4pmkFqYHiZSNaKrx2sAyBaYTegaYXy8BsAU4aMxDCDGVmQDMQxAliSGTbQBuFxGtAG4XENdA5CjjBg2yFUsyE7buHo2OGkjixFiU+wFsAtAGQPZyYRsBcmD9BCjjqAaAPgvKIL3Qup7AAAAAElFTkSuQmCC');
        }

        .componentList-complex {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAtElEQVQ4EWNgGGjA6BeaeoGRgUGfRIdc2Lh6tiFYj39o6n8SNTMg62GCaUYWhInho0Hq/UJSK+EG4FOMTQ7oBUZGRoY2FmySyGK+oakJQFvmg8T+//+/cNOaOQnI8gRdsHn17AX/GBgSsWkGGUTQBSBFIEOAFAhjAIIuwNCBJgA3ABQoaHJEcVmAieAiOAr/A1nAYCUGgPRgqCM1HYAMAOmBB+K//wwVpBry7/+/UgyX0F0AAGyCPAKrThbCAAAAAElFTkSuQmCC');
        }

        .componentList-map {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAABBklEQVQ4EaVTTQ7BUBB+Uw7gJuIEXEBYsO+CNdYs2oS9pUSdAEnpAXACjuAK1pI3Zso0Mq9N/DSZzPdmvu/rvNdXY/58gPXNbm/qGRh/42UNzpJ1NEk1rW4fvxEzVzTlPGG702sgwMAgNtI+wJFGDeP18qL5ni68xAeqtw1AJQ3CNOKZe5rvGFiAuZDorTUOWVMvECzZMSBBVZo6U6+ua44BjXoSEo/Nka0Rd4IlOwZUGEpTZ++TLfBJI2KoxRZx9NFXYOF+EwVqK6dkE2WH+27ubEGa3r3kE75xvDBB9yk0iOPF1VrrczB2pc9K7k0UcrJdxYKLcmrAP4bc7SKirrNG135aPwAI5Vixvw29FQAAAABJRU5ErkJggg==');
        }
      }
    }
  }
</style>
