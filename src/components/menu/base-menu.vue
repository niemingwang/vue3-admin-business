<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineOptions({ name: 'BaseMenu' })

const props = defineProps({
  /**
   * 选中的菜单项
   */
  selectedKeys: {
    type: Array as PropType<string[]>
  },
  /**
   * 是否折叠菜单
   * @vModel
   */
  collapsed: {
    type: Boolean,
    default: undefined
  },
  /**
   * 折叠菜单宽度
   */
  collapsedWidth: {
    type: Number
  }
})

console.log(props)
</script>

<style scoped></style>
