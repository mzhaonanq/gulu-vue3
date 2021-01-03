<template>
  <Switch v-model:checked-show="value1" />
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
export default{
  components:{Switch},
  setup() {
    const value1 = ref(false);
    return {value1};
  }
}
</script>