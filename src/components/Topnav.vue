<template>
  <div class="topnav" >
    <div class="logo" @click="toggleAsideVisible">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside"/>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'Topnav',
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAsideVisible = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleAsideVisible};
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    margin-right: auto;
    max-width: 6em;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside{
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left:16px;
  }
  @media (max-width: 500px) {
    > .logo {margin: 0 auto;}
    > .menu {display: none;}
    > .toggleAside{display: inline-block;}
  }
}

</style>