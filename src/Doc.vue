<template>
  <div class="layout">
    <Topnav class="nav" toggle-aside-button-visible/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/introduction">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from './components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  name: "Doc",
  components: {Topnav},
  setup(){
    const asideVisible = inject<Ref<boolean>>("asideVisible")
    return {asideVisible}
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 1;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    display: flex;
    @media (max-width: 500px) {
      padding-left: 0;
    }
    > aside {
      background: lightblue;
      width: 150px;
      flex-shrink: 0;
      position: fixed;
      top: 0;
      left: 0;
      padding: 70px 0 16px;
      height: 100%;
      z-index: 10;
      > h2 {
        margin-bottom: 4px;
        padding: 0 16px;
      }
      > ol {
        > li {
          > a {
            padding: 4px 16px;
            display: block;
          }
          > .router-link-active {
            background: #ffffff;
          }
        }
      }
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      overflow: auto;
    }
  }
}

</style>