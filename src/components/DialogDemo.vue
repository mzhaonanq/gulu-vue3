<template>
  <div>
    <div>Dialog示例</div>
    <h1>示例一</h1>
    <Button @click="toggle">点击显示Dialog</Button>
    <!--:visible="x" @update:visible="x=$event" 这两句可以简写成  v-model:visible="x"  -->
    <Dialog v-model:visible="x" :ok="f1" :cancel="f2" :close-on-click-overlay="false">
      <template v-slot:title>
        <strong>加粗标题</strong>
      </template>
      <template v-slot:content>
        <div>内容一</div>
        <div>内容二</div>
      </template>
    </Dialog>
    <h1>示例二</h1>
    <Button @click="toggle2">动态生成Dialog</Button>
  </div>
</template>
<script>
import Dialog from "../lib/Dialog.vue"
import Button from "../lib/Button.vue";
import {ref} from "vue";
import {dynamicCreate} from "../lib/dynamicCreate";

export default {
  components: {Dialog, Button},
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {}
    const f2 = () => {}
    const toggle2 = () => {
      dynamicCreate({
        title:'标题3333',
        content:'内容111',
        ok(){console.log("ok");},
        cancel(){console.log("cancel");},
        closeOnClickOverlay: false,
      })
    }
    return {x, toggle, f1, f2, toggle2}
  }
}
</script>
