<demo>
常规用法
</demo>
<template>
    <Button @click="toggle">点击显示Dialog</Button>
    <Dialog v-model:visible="visibleValue" :ok="okFunction" :cancel="cancelFunction" :close-on-click-overlay="false">
      <template v-slot:title>
        <strong>加粗标题</strong>
      </template>
      <template v-slot:content>
        <div>内容一</div>
        <div>内容二</div>
      </template>
    </Dialog>
</template>

<script>
import Dialog from "../lib/Dialog.vue"
import Button from "../lib/Button.vue";
import {ref} from "vue";

export default {
  components: {Dialog, Button},
  setup() {
    const visibleValue = ref(false)
    const toggle = () => {
      visibleValue.value = !visibleValue.value
    }
    const okFunction = () => {console.log("ok");}
    const cancelFunction = () => {console.log("cancel");}
    return {visibleValue, toggle, okFunction,cancelFunction}
  }
}
</script>