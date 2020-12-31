<template>
  <button class="gulu-switch" :class="{'gulu-checked':checkedShow}" @click="toggle"><span></span></button>
</template>

<script lang="ts">

export default {
  props:{
    checkedShow:Boolean
  },
setup(props,context){
  const toggle =()=>{
    context.emit("update:checkedShow",!props.checkedShow)
  }
  return {toggle}
}
}
</script>

<style lang="scss">
$h:22px;
$h2: $h - 4px;
.gulu-switch{
  height: $h;
  width: $h*2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  &:active{
    > span {width: $h2 + 4px;}
  }
  &.gulu-checked{
    background: #1890ff;
    &:active{
      >span{
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  > span {
    left: calc(100% - #{$h2} - 2px)
  }
}
  > span {
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all 250ms;
  }
}
</style>