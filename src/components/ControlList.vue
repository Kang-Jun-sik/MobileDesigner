<template>
  <div class="controlList-wrapper">
    <b-card no-body>
      <b-card-header header-tag="header" role="tab">
        <b-button block v-b-toggle.mobileContainer variant="secondary">Container</b-button>
      </b-card-header>
      <b-collapse id="mobileContainer" visible accordion="my-accordion" role="tabpanel">
        <div :class="'component-' + key"
                  class="controlName"
                  v-for="(name, key, idx) in mobileContainer"
                  :key="idx"
        >{{ name }}</div>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header" role="tab">
        <b-button block v-b-toggle.mobileComponent variant="secondary">Component</b-button>
      </b-card-header>
      <b-collapse id="mobileComponent" visible accordion="my-accordion" role="tabpanel">
        <div :class="'component-' + key"
                  class="controlName"
                  v-for="(name, key, idx) in mobileComponent"
                  :key="idx"
        >{{ name }}</div>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header" role="tab">
        <b-button block v-b-toggle.mobileEtc variant="secondary">Etc</b-button>
      </b-card-header>
      <b-collapse id="mobileEtc" visible accordion="my-accordion" role="tabpanel">
        <div :class="'component-' + key"
             class="controlName"
             v-for="(name, key, idx) in mobileEtc"
             :key="idx"
        >{{ name }}</div>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'controlList-wrapper',
    data () {
      return {
        mobileContainer: this.$store.state.containerControl,
        mobileComponent: this.$store.state.componentControl,
        mobileEtc: this.$store.state.etcControl,
      }
    },
    mounted() {
      const mobileControl = [
        {
          name: 'containerElement',
          control: document.querySelector('#mobileContainer')
        },
        {
          name: 'componentElement',
          control: document.querySelector('#mobileComponent')
        },
        {
          name: 'etcElement',
          control: document.querySelector('#mobileEtc')
        }
      ]
      mobileControl.forEach(control => {
        this.$store.commit('findElement', control)
      })
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 0;
  }

  .controlList-wrapper {
    background-color: #c9c9c9;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;

    .controlName {
      display: inline-block;
      height: 45px;
      color: black;
      text-align: center;
      padding: 5px;
      margin: 10px;
      border-radius: 100px;
      border: 2px solid #ececec;
      background: darkgray;
      transition: all .5s ease;
      font-size: 14px;
    }
  }
</style>
