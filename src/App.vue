<template>
<router-view/>
</template>

<script>
import Home from './Home.vue'
import Doc from './Doc.vue'
import {provide, ref} from "vue"

export default {
  name: 'App',
  components: {
    Home,
    Doc
  },
  setup(){
    const asideVisible = ref(false)
    provide("asideVisible",asideVisible)
  }
}
</script>
