<template>
  <div :uid="uid" v-show="mainButtons['btn-delete']" class="dews-mobile-delete"></div>
</template>

<script>
import CreateService from "@/service/CreateService";
import {mapGetters} from "vuex";

export default {
  name: 'delete-button',
  data() {
    return {
      uid: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('btn-delete');
  },
  computed: {
    ...mapGetters({
      mainButtons: "getMainButtons"
    }),
  }
}
</script>

<style lang="scss" scoped>
  .dews-mobile-delete {
    display: inline-block;
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-height: 24px;
    width: 24px;
    height: 24px;
    margin-right: 24px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGKADAAQAAAABAAAAGQAAAAD8nX4nAAAA40lEQVRIDe1VCw6CMAxF44G4oRyBm6knWLwBnmC2Y4vlrVsXRIOJS2C07/X1MwhdZyzv/UiXowuXI8fZCK/DJMDi1hrqKhWUlKeo3iON/H3EHGLNdhTwpQAL57gj34h4TWS5M8ZL+uTzjBbxC+MhQSJuvB8yvVRdBjQ6tPhPdhDK2kcCap1fgnBoXBbajRN8vQ0YgLNFO/E1/z5GlCpcs/87MKf2+yM6mT3OhBvw0Aa4YGofSoGqurX4r5/Bg0ujSrJfpFqycIqYu3AvH4k0pjbf2IelKlgxybQiAcfUxSHXJuYT8H2RblEzlLoAAAAASUVORK5CYII=');
  }
</style>
