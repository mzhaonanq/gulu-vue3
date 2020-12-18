<template>
  <span>导航栏：</span>
  <router-link to="/">首页</router-link>
  <span> | </span>
  <router-link to="/hello">下一页</router-link>
<router-view/>
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
