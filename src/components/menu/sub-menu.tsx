import SubMenuInline from '@/components/menu/sub-menu-inline.vue'
import useMenu from '@/components/menu/hooks/use-menu.ts'

export default defineComponent({
  name: 'SubMenu',
  props: {
    /**
     * 子菜单的标题
     */
    title: {
      type: String
    },
    /**
     * 弹出模式下，是否将多级菜单头也作为一个菜单项，支持点击选中等状态
     */
    selectable: {
      type: Boolean
    }
  },
  setup(_, { slots }) {
    const { key } = useMenu()
    return () => <SubMenuInline key={key.value} v-slots={slots} />
  }
})
