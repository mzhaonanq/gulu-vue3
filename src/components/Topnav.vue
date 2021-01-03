<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-circle"></use>
      </svg>
    </router-link>
    <span v-if="toggleAsideButtonVisible" class="toggleAside" @click="toggleAsideVisible">
          <svg class="icon">
        <use xlink:href="#icon-open"></use>
      </svg>
    </span>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'Topnav',
  props: {
    toggleAsideButtonVisible: {
      type: Boolean,
      default: false
    }
  },
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: fixed;
  width: 100%;
  top: 0;
  left:0;
  color:#007974;
  z-index: 20;
  > .logo {
    margin-right: auto;
    max-width: 6em;
    > .icon{
      height: 32px;
      width: 32px;
    }
  }
  > .toggleAside{
    display: none;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left:16px;
    > .icon{
      height: 24px;
      width: 24px;
      transition: all linear 250ms;
      &:hover{
        transform: rotate(90deg);
      }
    }
  }
  @media (max-width: 500px) {
    > .logo {margin: 0 auto;}
    > .toggleAside{display: inline-block;}
  }
}

</style>