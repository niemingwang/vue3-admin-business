<template>
  <ul class="app-menu-list">
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineOptions({ name: 'BaseMenu' })

defineProps({
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
</script>

<style scoped></style>
