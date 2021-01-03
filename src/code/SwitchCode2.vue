<demo>
支持 disabled
</demo>
<template>
  <Switch v-model:checked-show="value2" disabled />
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default{
  components:{Switch},
  setup() {
    const value2 = ref(false);
    return {value2};
  }
}
</script>