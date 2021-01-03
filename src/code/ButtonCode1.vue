<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="sayHi">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  },
  setup(){
    const sayHi=()=>{
      console.log('hi');
    }
    return {sayHi}
  }
}
</script>