<template>
  <span>导航栏：</span>
  <router-link to="/">首页</router-link>
  <span> | </span>
  <router-link to="/doc">文档</router-link>
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
