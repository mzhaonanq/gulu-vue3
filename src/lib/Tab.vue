<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props:{
    title:{
      type:String
    }
  }
}
</script>