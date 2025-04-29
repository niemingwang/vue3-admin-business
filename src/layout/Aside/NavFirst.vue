<template>
  <Menu
    class="nav-first"
    prefix-cls="nav-first"
    :collapsed="collapsed"
    :open-keys="openKeys"
    :selected-keys="selectedKeys"
    :collapsed-show-title="false"
    :sub-menu-in-line="subMenuInLine"
    @menu-item-click="onMenuItemClick"
  >
    <RenderItem v-for="item in menus" :key="item.path" :item="item" />
  </Menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'
import { Menu } from '@/components/menu'
import RenderItem from '@/components/menu/render-item.tsx'
import router from '@/router'
import { findParentNode } from '@/common/utils/tree-utils.ts'
import { useMenuHelper } from '@/common/hooks/use-menu-helper.ts'

defineOptions({ name: 'NavFirst' })

const props = defineProps({
  menus: {
    type: Array as PropType<AppRouteRecordRaw[]>,
    default: () => []
  },
  collapsed: {
    type: Boolean,
    default: false
  },
  subMenuInLine: {
    type: Boolean,
    default: true
  }
})

const { defaultSelectKey, defaultOpenKey } = useMenuHelper()
const selectedKeys = ref<string[]>([defaultSelectKey()])
const openKeys = ref<string[]>([defaultOpenKey()])

const onMenuItemClick = (menuItem: AppRouteRecordRaw) => {
  if (menuItem.children && menuItem.children.length) {
    if (openKeys.value.includes(menuItem.path)) {
      // 收起
      openKeys.value = openKeys.value.filter((item) => item !== menuItem.path)
    } else {
      // 展开
      openKeys.value = [menuItem.path]
    }
  } else {
    const pn = findParentNode(props.menus, menuItem.path)
    if (pn) {
      openKeys.value = [pn.path]
    }
    selectedKeys.value = [menuItem.meta.fullPath]
    router.push(menuItem.meta.url || menuItem.meta.fullPath)
  }
}
</script>

<style scoped></style>
