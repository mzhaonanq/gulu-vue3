<demo>
常规用法
</demo>
<template>
  <Tabs v-model:selected="selectedValue">
    <Tab title="导航一">Tab组件1</Tab>
    <Tab title="导航二">Tab组件2</Tab>
  </Tabs>
</template>
<script>
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {ref} from "vue";
export default {
  components:{
    Tabs,Tab
  },
  setup(){
    const selectedValue = ref("导航一")
    return {selectedValue}
  }
}
</script>