<template>
  <div>Tabs组件</div>
  <div v-for="(t,index) in titles" :key="index">{{t}}</div>
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
    const titles =defaults.map(tag=>{
      return tag.props.title
    })
    return {defaults,titles}

  }
}
</script>