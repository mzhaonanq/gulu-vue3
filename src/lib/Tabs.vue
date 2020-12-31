<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class="gulu-tabs-nav-item"
           v-for="(t,index) in titles" :key="index"
           :class="{'selected':t===selected}"
           @click="()=>changeSelected(t)"
           :ref="el => { if (t===selected) selectedItem = el }"
      >{{ t }}
      </div>
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
import Tab from './Tab.vue';
import {onMounted,onUpdated, ref} from 'vue';

export default {
  props: {
    selected: String
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      const {width, left: selectedItemLeft} = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const {left: containerLeft} = container.value.getBoundingClientRect();
      indicator.value.style.left = (selectedItemLeft - containerLeft) + 'px';
    });
    onUpdated(()=>{
      const {width, left: navItemLeft} = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const {left: containerLeft} = container.value.getBoundingClientRect();
      indicator.value.style.left = (navItemLeft - containerLeft) + 'px';
    });
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error(' Tabs的子元素必须是Tab组件');
      }
    });
    const titles = defaults.map(tag => {
      return tag.props.title;
    });
    const changeSelected = (newValue) => {
      context.emit("update:selected", newValue)
    }
    return {defaults, titles, selectedItem, indicator, container, changeSelected};
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
      transition: all 250ms;
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