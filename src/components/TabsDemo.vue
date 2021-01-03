<template>
  <h2>Tabs组件展示</h2>
  <Demo :component="TabCode"/>
</template>
<script>
import Demo from "../code/Demo.vue";
import TabCode from "../code/TabCode.vue";
export default {
  components:{
    Demo,
  },
  setup(){
    return {TabCode}
  }
}
</script>