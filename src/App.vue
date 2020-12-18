<template>
<router-view/>
</template>

<script>
import Home from './components/Home.vue'
import Doc from './components/Doc.vue'

export default {
  name: 'App',
  components: {
    Home,
    Doc
  }
}
</script>
