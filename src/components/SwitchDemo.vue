<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch v-model:checked-show="value1" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{SwitchCode1.__sourceCode}}</pre>
      </div>
    </div>
  </div>
  <div>
  <div class="demo">
    <h2>支持 disabled </h2>
    <div class="demo-component">
      <Switch v-model:checked-show="value2" disabled/>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{SwitchCode2.__sourceCode}}</pre>
    </div>
  </div>
  </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue';
import Button from '../lib/Button.vue';
import SwitchCode1  from './SwitchCode1.vue';
import SwitchCode2 from './SwitchCode2.vue';
import {ref} from 'vue';

export default {
  name: 'SwitchDemo',
  components: {Switch, Button},
  setup() {
    const value1 = ref(false);
    const value2 = ref(false);

    return {value1,value2,SwitchCode1,SwitchCode2};
  }
};
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
    }
  }
}
</style>