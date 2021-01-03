<template>
  <h1>Switch组件展示</h1>
  <Demo :component="SwitchCode1"/>
  <Demo :component="SwitchCode2"/>
</template>
<script lang="ts">
import SwitchCode1 from './SwitchCode1.vue';
import SwitchCode2 from './SwitchCode2.vue';
import Demo from './Demo.vue';

export default {
  name: 'SwitchDemo',
  components: {Demo},
  setup() {
    return {SwitchCode1, SwitchCode2};
  }
};
</script>
