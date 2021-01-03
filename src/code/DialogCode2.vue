<demo>
动态生成Dialog
</demo>
<template>
  <Button @click="toggle2">动态生成Dialog</Button>
</template>

<script>
import {dynamicCreate} from "../lib/dynamicCreate";
import Button from "../lib/Button.vue";

export default {
  components: {Button},
  setup() {
    const toggle2 = () => {
      dynamicCreate({
        title: "新标题",
        content: "新内容",
        ok() {console.log("ok")},
        cancel() {console.log("cancel")},
        closeOnClickOverlay: true
      })
    }
    return {toggle2}
  }
}
</script>
