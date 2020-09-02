<template>
  <div>
    <button @click="showTitle">Click</button>
    <span>title</span>
  </div>
</template>

<script>
export default {
  name: 'global-component',
  data () {
    return {
      title: void 0
    }
  },
  methods: {
    showTitle () {
      this.title = 'Global Component!!'
    }
  }
}
</script>

<style lang="scss">
div {
  padding: 20px
}

div span {
  margin: 20px
}
</style>
