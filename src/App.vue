<template>
<router-view/>
</template>

<script>
import Home from "./Home.vue"
import Doc from "./Doc.vue"
import {provide, ref} from "vue"
import {router} from "./router";

export default {
  name: "App",
  components: {
    Home,
    Doc
  },
  setup() {
    const screenWidth = document.documentElement.clientWidth
    // ref(screenWidth>= 500?true:false） 简化成如下
    const asideVisible = ref(screenWidth > 500)
    provide("asideVisible", asideVisible)
    router.afterEach(() => {
      if (screenWidth <= 500) {
        asideVisible.value = false
      }
    })
  }
}
</script>
