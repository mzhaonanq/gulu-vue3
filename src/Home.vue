<template>
  <div class="topnavAndBanner">
  <Topnav/>
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-vue"></use>
  </svg>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-ts"></use>
  </svg>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-light"></use>
  </svg>
  </div>
</template>

<script lang="ts">
import Topnav from "./components/Topnav.vue";
export default {
  name: 'Home',
  components: {Topnav},
}
</script>

<style lang="scss" scoped>
.topnavAndBanner{
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner{
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color:#007974;
  > .actions{
    padding:8px 0;
    a{
      margin: 0 8px;
      background: #02bcb0;
      color: #ffffff;
      display: inline-block;
      padding: 8px 24px;
      border-radius: 4px;
    }
  }
}
.features{
  > .icon{
    height: 64px;
    width: 64px;
  }
}
</style>