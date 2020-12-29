<template>
  <div class="gulu-dialog-overlay"></div>
  <div class="gulu-dialog-wrapper">
    <div class="gulu-dialog">
    <header>标题</header>
    <main>
      <p>
        段落一
      </p>
      <p>
        段落二
      </p>
    </main>
    <footer>
    <Button>OK</Button>
      <Button>Cancel</Button>
    </footer>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components:{Button}
}
</script>