<template>
  <div>Button组件</div>
  <Button theme="button">我是按钮</Button>
  <Button theme="link">我是按钮</Button>
  <Button theme="text">我是按钮</Button>
  <Button >我是按钮</Button>



</template>

<script>
import Button from '../lib/Button.vue'
export default {
  name:"ButtonDemo",
  components:{Button}
}
</script>