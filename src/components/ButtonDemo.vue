<template>
  <h2>Button组件展示</h2>
  <demo :component="ButtonCode1"/>
  <demo :component="ButtonCode2"/>
  <demo :component="ButtonCode3"/>
  <demo :component="ButtonCode4"/>
</template>

<script>
import Demo from "../code/Demo.vue";
import ButtonCode1 from '../code/ButtonCode1.vue';
import ButtonCode2 from '../code/ButtonCode2.vue';
import ButtonCode3 from '../code/ButtonCode3.vue';
import ButtonCode4 from '../code/ButtonCode4.vue';

export default {
  name:"ButtonDemo",
  components:{Demo},
  setup(){
    return{ButtonCode1,ButtonCode2,ButtonCode3,ButtonCode4}
  }
}
</script>