<template>
  <h1>Dialog组件展示</h1>
  <Demo :component="DialogCode1"/>
  <Demo :component="DialogCode2"/>
</template>
<script>
import Demo from "../code/Demo.vue";
import DialogCode1 from "../code/DialogCode1.vue";
import DialogCode2 from "../code/DialogCode2.vue";

export default {
  components: {Demo},
  setup() {
    return {DialogCode1, DialogCode2}
  }
}
</script>
