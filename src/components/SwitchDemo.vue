<template>
<div>
  <h1>Switch 组件示例 </h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Switch v-model:checked-show="value1"/>
    </div>
    <h2>支持disabled</h2>
    <div class="demo-component">
      <Switch v-model:checked-show="value2" disabled/>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  name: 'SwitchDemo',
  components: {Switch, Button},
  setup() {
    const value1 = ref(false);
    const value2 = ref(false);

    return {value1,value2};
  }
};
</script>
<style lang="scss" scoped>

</style>