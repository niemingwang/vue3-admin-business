import BaseMenu from '@/components/menu/base-menu.vue'
import { MenuInjectionKey } from './context.ts'

export default defineComponent({
  name: 'Menu',
  inheritAttrs: false,
  props: {
    /**
     * 选中的菜单项
     */
    selectedKeys: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    /**
     * 展开的菜单项
     */
    openKeys: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    /**
     * 是否折叠菜单
     * @vModel
     */
    collapsed: {
      type: Boolean,
      default: false
    },
    collapsedShowTitle: {
      type: Boolean,
      default: false
    },
    /**
     * 折叠菜单宽度
     */
    collapsedWidth: {
      type: Number,
      default: 64
    },
    /**
     * 是否内联子菜单
     */
    subMenuInLine: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'nav-first'
    }
  },
  emits: ['menu-item-click'],
  setup(props, { attrs, slots, emit }) {
    const {
      selectedKeys,
      collapsed,
      collapsedShowTitle,
      collapsedWidth,
      subMenuInLine,
      prefixCls,
      openKeys
    } = toRefs(props)

    const menuContext = reactive({
      selectedKeys,
      collapsed,
      collapsedShowTitle,
      collapsedWidth,
      subMenuInLine,
      prefixCls,
      openKeys,
      onMenuItemClick: (item: AppRouteRecordRaw) => {
        emit('menu-item-click', item)
      }
    })
    provide(MenuInjectionKey, menuContext)

    return () => (
      <nav>
        <BaseMenu {...props} {...attrs} v-slots={slots} />
      </nav>
    )
  }
})
