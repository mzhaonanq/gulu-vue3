<template>
  <div>
   <div>Dialog示例</div>
    <h1>示例一</h1>
    <Button @click="toggle">触发Dialog</Button>
    <Dialog :visible="x" @update:visible="x=$event" :ok="f1" :cancel="f2" :close-on-click-overlay="false"/>
  </div>
</template>
<script>
import Dialog from '../lib/Dialog.vue'
import Button from "../lib/Button.vue";
import {ref} from "vue";
export default {
  components:{Dialog,Button},
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    const f1=()=>{}
    const f2=()=>{}
    return {x,toggle,f1,f2}
  }
}
</script>
