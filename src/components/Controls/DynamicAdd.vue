<template>
  <div>
    <component
        :is="getComponentName(child.type)"
        v-bind="child.props"
    >
    </component>
  </div>
</template>

<script>
export default{
  props:{
    child: Object
  },
  methods:{
    getComponentName(type){
      switch(type){
        case 'button':
          return require('./Button.vue')
      }
    }
  }
}
</script>
