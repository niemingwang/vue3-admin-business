<template>
  <div v-show="open">
    <BaseMenu>
      <slot></slot>
    </BaseMenu>
  </div>
</template>

<script lang="ts">
import useMenu from '@/components/menu/hooks/use-menu.ts'
import useMenuContext from '@/components/menu/hooks/use-menu-context.ts'

export default defineComponent({
  name: 'SubMenuInline',
  setup() {
    const { key } = useMenu()
    const menuContext = useMenuContext()

    const open = computed(() => {
      return (menuContext?.openKeys || [])?.indexOf(key.value) > -1
    })

    return { open }
  }
})
</script>

<style scoped></style>
