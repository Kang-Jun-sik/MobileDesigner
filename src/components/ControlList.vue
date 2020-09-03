<template>
  <div class="controlList-wrapper">
    <v-expansion-panels multiple focusable>
      <v-expansion-panel
          v-for="(value, key, idx) in control"
          :key="idx"
      >
        <v-expansion-panel-header>{{ key }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div v-for="(component, idx) in value" :key="idx" class="controlName">
            {{ component }}
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss" scoped>
  div {
    padding: 0;
  }

  .v-expansion-panel-header {
    font-size: 1.3rem;
  }

  .controlList-wrapper {
    min-height: 1000px;
    background-color: #c9c9c9;
    color: #fff;
    border-radius: 5px;
    padding: 15px;
    margin: 20px 0;
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
