<template>
<div>
<div class="demo">
  <h2>{{component.__sourceCodeTitle}}</h2>
  <div class="demo-component">
    <component :is="component"/>
  </div>
  <div class="demo-actions">
    <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
    <Button @click="showCode" v-else>查看代码</Button>

  </div>
  <div v-if="codeVisible" class="demo-code">
    <pre>{{component.__sourceCode}}</pre>
  </div>
</div>
</div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  props:{
    component:Object
  },
  components:{ Button},
  setup(){
    const codeVisible = ref(false)
    const hideCode = ()=>{
      codeVisible.value=false
    }
    const showCode=()=>{
      codeVisible.value=true
    }
    return{codeVisible,hideCode,showCode}
  }
}
</script>
<style lang="scss" scoped>

$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      overflow: auto;
    }
  }
}
</style>