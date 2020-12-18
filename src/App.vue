<template>
  <HelloWorld msg="hi" />
  <Bruce/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Bruce from './components/Bruce.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Bruce
  }
}
</script>
