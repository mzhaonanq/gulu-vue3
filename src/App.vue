<template>
<router-view/>
</template>

<script>
import Home from './Home.vue'
import Doc from './Doc.vue'

export default {
  name: 'App',
  components: {
    Home,
    Doc
  }
}
</script>
