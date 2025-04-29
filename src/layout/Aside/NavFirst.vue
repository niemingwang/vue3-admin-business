<template>
  <nav>
    <Menu collapsed>
      <SubMenu title="菜单目录" />
      <MenuItem title="菜单标题" />
      <MenuItem title="菜单标题" />
      <MenuItem title="菜单标题" />
      <MenuItem title="菜单标题" />
    </Menu>
  </nav>
</template>

<script setup lang="ts">
import { Menu } from '@/components/menu'
import SubMenu from '@/components/menu/sub-menu.tsx'
import MenuItem from '@/components/menu/item.tsx'

defineOptions({ name: 'NavFirst' })
</script>

<style scoped></style>
