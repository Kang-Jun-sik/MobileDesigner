<template>
  <div class="dews-mobile-save dews-mobile-component"></div>
</template>

<script>
  export default {
    name: 'save-button',
    data() {
      return {
        buttonAttr: false
      }
    }
  }
</script>

<style>
  .dews-mobile-save {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 24px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADB/VeXAAAA/UlEQVRIDe1VwQ3CMAxsmKDdhBE7ApsVJgA2KBOEc5Wz0tZuqlDBh0iRnfPlro6FaJpvrRjjBfuOXbMGXGrdb0VRxD9dvgmUx6R+5lfQjWcvgtdiXxPfNrHELKzaxBKzMM9AcPD9TiwxC9sysEyUb4kRK8RBRVICvnQyLYFOS0J2vmW5l4ZlIYQwLjF5P3VcFSuAXG+rgwrp9ZXfGaBN/njY8VZcDZu9TEOSmwJgQDo0YiSWonVXsD1P1AnRWjDtSsZTnb3nZAvL68wtXo7t6YBaVfFvUHw2PtFLmBiO/uEUbzqETOOpFIA9J39g7NVAkmTyOMBANObiM6eDD28pyGgkXgWahAAAAABJRU5ErkJggg==');
  }
</style>
