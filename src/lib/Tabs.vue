<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div class="gulu-tabs-nav-item"
           v-for="(t,index) in titles" :key="index"
           :class="{'selected':t===selected}"
           @click="()=>changeSelected(t)"
           :ref="el => { if (el) divs[index] = el }"
      >{{ t }}</div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component
          class="gulu-tabs-content-item"
          v-for="(c,index) in defaults" :is="c" :key="index"
          :class="{'selected': c.props.title===selected}"/>
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue"
import {onMounted, ref} from "vue";

export default {
  props: {
    selected: String
  },
  setup(props, context) {
    const divs = ref<HTMLDivElement[]>([])
    const indicator = ref<HTMLDivElement>(null)
    onMounted(()=>{
      const navItems = divs.value
      const result = navItems.filter(navItem=>navItem.classList.contains('selected'))[0]
      const {width} = result.getBoundingClientRect()
      indicator.value.style.width=width+'px'
    })
    const defaults = context.slots.default()
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error(" Tabs的子元素必须是Tab组件")
      }
    })
    const titles = defaults.map(tag => {
      return tag.props.title
    })
    const changeSelected = (newValue) => {
      context.emit("update:selected", newValue)
    }
    return {defaults, titles, divs,indicator,changeSelected}
  }
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-indicator{
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item{
    display: none;
    &.selected{
      display: block;
    }
    }
  }
}
</style>