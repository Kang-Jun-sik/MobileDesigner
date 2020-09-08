<template>
  <div class="controlList-wrapper">
    <v-expansion-panels multiple focusable>
      <v-expansion-panel
          v-for="(value, key, idx) in control"
          :key="idx"
      >
        <v-expansion-panel-header @click="open">{{ key }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div ref="element">
            <div v-for="(component, idx) in value" :key="idx" class="controlName">
              {{ component }}
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  import dragula from 'dragula';

  export default {
    name: 'controlList-wrapper',
    data () {
      return {
        control: {
          'Container': ['Container', 'Form'],
          'Component': ['Button', 'TextBox'],
          'ETC': ['Message']
        }
      }
    },
    mounted() {
      console.log(this)
    },
    methods: {
      open() {
        console.log('open', this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    padding: 0;
  }

  .v-expansion-panel-header {
    font-size: 1rem;
    padding: 2px 20px;
  }

  .controlList-wrapper {
    background-color: #c9c9c9;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
  }

  .controlName {
    height: 45px;
    background-color: rgba(0, 0, 0, 0.6);
    margin: 20px 0;
    text-align: center;
    padding: 10px;
    border-radius: 20px;
    color: white;
  }
</style>
