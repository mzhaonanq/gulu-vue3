<template>
  <div>Button组件</div>
  <div>
  <Button theme="button">我是按钮</Button>
  <Button theme="link">我是按钮</Button>
  <Button theme="text">我是按钮</Button>
  <Button >我是按钮</Button>
  </div>
  <hr>
  <div>
    <Button size="small">我是按钮</Button>
    <Button size="normal">我是按钮</Button>
    <Button size="big" >我是按钮</Button>
    <Button >我是按钮</Button>
  </div>
  <hr>
  <div>
    <Button level="main">我是按钮</Button>
    <Button level="danger">我是按钮</Button>
    <Button >我是按钮</Button>
    <hr>
    <Button theme="button" level="main">我是按钮</Button>
    <Button theme="link" level="main">我是按钮</Button>
    <Button theme="link" >我是按钮</Button>
    <Button theme="text" level="main">我是按钮</Button>
    <hr>
    <Button theme="button" level="danger">我是按钮</Button>
    <Button theme="link" level="danger">我是按钮</Button>
    <Button theme="text" level="danger">我是按钮</Button>
  </div>





</template>

<script>
import Button from '../lib/Button.vue'
export default {
  name:"ButtonDemo",
  components:{Button}
}
</script>