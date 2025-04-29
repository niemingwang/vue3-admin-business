<template>
  <Menu
    class="nav-second"
    prefix-cls="nav-second"
    :collapsed="false"
    sub-menu-in-line
    @menu-item-click="onMenuItemClick"
  >
    <RenderItem v-for="item in menus" :key="item.id" :item="item" />
  </Menu>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { Menu } from '@/components/menu'
import RenderItem from '@/components/menu/render-item.tsx'

defineOptions({ name: 'NavSecond' })

defineProps({
  menus: {
    type: Array as PropType<AppRouteRecordRaw[]>,
    default: () => []
  }
})

const onMenuItemClick = (key: string) => {
  console.log(key)
}
</script>

<style scoped></style>
