import BaseMenu from '@/components/menu/base-menu.vue'

export default defineComponent({
  name: 'Menu',
  inheritAttrs: false,
  props: {
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
  },
  setup(props, { attrs, slots }) {
    const { collapsed } = toRefs(props)
    console.log(collapsed.value)

    return () => <BaseMenu {...props} {...attrs} v-slots={slots} />
  }
})
