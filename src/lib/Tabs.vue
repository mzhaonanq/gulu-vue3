<template>
  <div>Tabs组件</div>
 <component v-for="(c,index) in defaults" :is="c" :key="index"></component>
</template>
<script>
import Tab from './Tab.vue'
export default {

  setup(props,context){
    const defaults = context.slots.default()
    defaults.forEach(tag=>{
      if(tag.type!==Tab){
        throw new Error(" Tabs的子元素必须是Tab组件")
      }
    })
    return {defaults}

  }
}
</script>