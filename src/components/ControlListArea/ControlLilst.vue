<template>
  <div class="control-list">
    <div class="dews-container-list">
      <div class="container-list-header" v-b-toggle.mobileContainer role="tab">
        <div class="header-title">Container</div>
        <div class="header-icon"></div>
      </div>
      <b-collapse id="mobileContainer" class="container-list-content" accordion="dews-control" role="tabpanel">
        <div v-for="(name, key, idx) in containerControl" :key="idx"
            :class="'dews-mobile-' + key"
            class="content-box"
        >
          <div :class="'content-icon-' + key" class="content-icon"></div>
          <div class="content-title">{{ name }}</div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'control-list',
    data() {
      return {
        containerControl: {
          searchContainer: 'Search Container',
          listContainer: 'List Container',
          formContainer: 'Form Container',
          infoBoxContainer: 'InfoBox Container'
        },
        componentControl: {
          button: 'Button',
          textBox: 'Text box',
          numTextBox: 'Numeric text box',
          maskTextBox: 'Mask text box',
          checkBox: 'Check box',
          radioButton: 'Radio Button',
          dropdownList: 'Dropdown List'
        },
        etcControl: {
          messageBox: 'Message box',
          snackBar: 'Snack Bar',
          tooltipBox: 'Tooltip',
          loadingBox: 'Loading',
          progressBar: 'Progress Bar',
          slider: 'Slider'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 0
  }

  .control-list {
    .dews-container-list {
      .container-list-header {
        width: 150px;
        height: 30px;
        background-color: #bfccdd;

        .header-title {
          display: inline-block;
          height: 19px;
          font-size: 15px;
          font-weight: bold;
          line-height: 1.62;
          text-align: left;
          color: #4f5565;
          margin: 1px 7px;
        }

        .header-icon {
          display: inline-block;
          float: right;
          margin: 5px auto;
          width: 16px;
          height: 16px;
          object-fit: contain;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAW0lEQVQ4EWNgGAWDPAT8QlMn+IWk9ONzJjMuSaDGBYyMjOlAbKGhbaxw89q5jdjUYjUAqjkeSYMBLkMYkRSBmQGhqQb/GRjOo4uD+EDFhhtWz76ATW5UbCBDAAAP0hVgqGYaXgAAAABJRU5ErkJggg==');
        }
      }

      .container-list-content {
        .content-box {
          width: 135px;
          height: 30px;
          border-radius: 4px;
          background-color: #ffffff;
          margin: 4px auto;

          .content-title {
            display: inline-block;
            height: 19px;
            font-size: 12.5px;
            font-weight: 600;
            line-height: 1.62;
            color: #000000;
          }

          .content-icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            object-fit: contain;
            margin: -3px 5px;
          }

          .content-icon-searchContainer {
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAABMklEQVQ4EZ1TMU7DQBC8vZxreELyA/gBfMBckfQgiESXUNJBAyUukaBIaigs5QPhBZgf+AkpI3HxMmvF1nGXxj7J8mhnZ7w71lE6vn4i0veq42Hp5+pZpZNpjTvq6/YLaDX1UXoa7eFe0BxSWXs75GT3Au5kzxf0O7jL89cy7I8mqMXGfVfMXxCdy8PMPzAshAsNogkq4zKk+rj6fM+85od0fKMYHGrWq6toAiI6Gzi38JsEa2cWCLxZqaUjg5aJwHajiI7DcmSAfdc7Yy7DxsqYObg8rEcZYNS5BIadj4CXSm03EM8w/gzBXoUG0QTyq5C87HqK0NacJCXwSMSaKLOT6b8cognkC/v/bQX7B+ISRlIvmvpBg4YM3/nHmwhbsfC6902CWLRGrqTcSITU+TC0fxIEc8/S8pUbAAAAAElFTkSuQmCC');
          }

          .content-icon-listContainer {
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAhElEQVQ4EWP0C0luY2RkqmQgEfwHqf//r53BLzQVzCZRP1i5P1AvEyM5OpH0sCCxGUAmIvNxsTeung23F8UAkAZkSWwGoFvChE0RKWIYLkC3gZBhGAaMeoFQkGHKYwQiRbFAKAYw7WdgYCIq7WLTCRQD6WUBZUlQjoQnbhyKsQn/B+oFABhNK+i0PW3WAAAAAElFTkSuQmCC');
          }

          .content-icon-formContainer {
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAAAo0lEQVQ4Ea1TwQ2AIAwEwnz60QmMQ7iADuEIvlxQtCZnro2QYOTTo727tgn4phtm78PkKk8SfjoW1/TjjSv1N729tMF/UZImElZQ3FWCLvu2Pn2VAUQgIJLWgYNcAPga1QS2o+321kQZMMGacY3xvyuwc2l8nk6tABEIiCXjf1ewHTERT2CxWoGL1oxrjEP2vTIrg0Ub5UvKj3wed4b8lk6X9gS/lzfIR3t2BwAAAABJRU5ErkJggg==');
          }

          .content-icon-infoBoxContainer {
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAABdElEQVQ4EZ1TwUoDMRCdyWbtfxRa6s0fEBQPYguVRb1pKZZ+g6hn9R/cWrAnZVHblbaUXvXqvYL+R93djJnFXZIehDYw5M3kvclkkmD9sHWNKM5hyUHMJ3UD9aN2ipfUp/R9rRW4itLQSAPn0PPa5cShC0DY5SARjJ1YXPX7t1856Q+IxUDNO1lXkoagyIc5bKSGqqtcNa16jfIi30rAOzuyEA6CTil8vnuHAj7iGjy8Bt23MOgUXVmY1A5Oi2YSK0EidNkJNU0CIeZtUnHcdNC5NNftHgh95jmeZYQw8LcyzHMiaeYS7JkxqwJzgTFfE9ti3PStBNxtclTJJJhYRLKiiEZmzDoCX5VycaoJVqMygXChFye0mfk8I5c4CPy8UVV9E1LCJIK4iUAzJgmSFQeh9xNF2+P+ff4W0pfIBHOMXvzPRCU7LsmGS+4HmyA4jvTOpjjTWEfIgsOn7rfGrcz/b9bJVx+slfwl+UfmTVgiH2ntLx3VjLOS1LfoAAAAAElFTkSuQmCC');
          }
        }
      }
    }
  }
</style>
