<template>
  <div class="controlList-wrapper">
    <b-card no-body>
      <b-card-header header-tag="header" role="tab">
        <b-button block v-b-toggle.mobileContainer variant="secondary">Container</b-button>
      </b-card-header>
      <b-collapse id="mobileContainer" visible accordion="my-accordion" role="tabpanel">
        <div :class="'dews-mobile-' + key"
             class="controlName"
             v-for="(name, key, idx) in containerControl"
             :key="idx"
        >{{ name }}</div>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header" role="tab">
        <b-button block v-b-toggle.mobileComponent variant="secondary">Component</b-button>
      </b-card-header>
      <b-collapse id="mobileComponent" visible accordion="my-accordion" role="tabpanel">
        <div :class="'dews-mobile-' + key"
             class="controlName"
             v-for="(name, key, idx) in componentControl"
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
             v-for="(name, key, idx) in etcControl"
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
      containerControl: {
        searchContainer: 'Search Container',
        listContainer: 'List Container',
        formContainer: 'Form Container',
        infoBoxContainer: 'Info box Container'
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
  width: 140px;
  background-color: #e9ecef;
  color: #fff;
  border-radius: 5px;
  margin: 10px 0;

  .controlName {
    display: block;
    width: 80%;
    margin: 15px auto;
    height: 45px;
    color: black;
    text-align: center;
    padding: 10px;
    border-radius: 100px;
    border: 1px solid #a9a9a9;
    background: #c9c9c9;
    transition: all .5s ease;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
  }
}
</style>
