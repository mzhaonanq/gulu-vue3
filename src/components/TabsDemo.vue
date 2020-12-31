<template>
  <div>Tabs组件展示</div>
  <Tabs>
    <Tab title="导航一">Tab组件1</Tab>
    <Tab title="导航二">Tab组件2</Tab>
  </Tabs>
</template>
<script>
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default {
  components:{
    Tabs,Tab
  }
}
</script>