<template>
  <div>
    <Topnav/>
    <div class="content">
      <aside>内容</aside>
      <main>主内容</main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from './components/Topnav.vue';

export default {
  components: {Topnav}
};
</script>