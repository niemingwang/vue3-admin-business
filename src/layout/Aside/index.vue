<template>
  <aside class="app-nav">
    <NavFirst :menus="computedFirstNav" :collapsed="settingStore.collapse" />
    <NavSecond :menus="computedSecondNav" v-if="!settingStore.collapse" />
    <CollapseLine />
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouterStore } from '@/store/modules/routers.ts'
import { useSettingStore } from '@/store/modules/settings.ts'
import NavFirst from './NavFirst.vue'
import NavSecond from './NavSecond.vue'
import { getFirstTwoLevels } from '@/common/utils/tree-utils.ts'
import CollapseLine from '@/layout/Aside/CollapseLine.vue'

defineOptions({ name: 'Aside' })

const routerStore = useRouterStore()
const settingStore = useSettingStore()

const computedFirstNav = computed(() => {
  return getFirstTwoLevels(routerStore.getRouters)
})

const computedSecondNav = computed(() => {
  return computedFirstNav.value
})
</script>

<style scoped>
.app-nav {
  display: flex;
  height: 100%;
  position: relative;
  transition: width 0.15s linear;
}
</style>
