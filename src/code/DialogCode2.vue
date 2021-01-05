<demo>
动态生成Dialog
</demo>
<template>
  <Button @click="toggle2">动态生成Dialog</Button>
</template>

<script>
import Button from "../lib/Button.vue";
import {openDialog} from "../lib";

export default {
  components: {Button},
  setup() {
    const toggle2 = () => {
      openDialog({
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
