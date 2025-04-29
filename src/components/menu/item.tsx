import useMenuContext from '@/components/menu/hooks/use-menu-context.ts'
import useMenu from '@/components/menu/hooks/use-menu.ts'
import { Icon } from '@/components/Icon'

export default defineComponent({
  name: 'MenuItem',
  props: {
    /**
     * @zh 菜单项的标题
     * @en The title of the menu item
     */
    item: {
      type: Object as PropType<AppRouteRecordRaw>,
      default: () => {}
    }
  },
  setup(props) {
    const { key } = useMenu()
    const menuContext = useMenuContext()

    const open = computed(() => {
      return (menuContext?.openKeys || [])?.indexOf(key.value) > -1
    })

    return {
      key,
      open,
      menuItem: props.item,
      menuContext
    }
  },
  render() {
    const { menuContext, menuItem, key, open } = this
    const {
      selectedKeys,
      collapsed,
      onMenuItemClick,
      subMenuInLine,
      prefixCls,
      collapsedShowTitle
    } = menuContext
    const handleItemClick = (e: Event) => {
      if (collapsed && menuItem.children && menuItem.children.length) return
      e.preventDefault()
      onMenuItemClick?.(menuItem)
    }

    const isSelected = computed(() => {
      return menuItem.children
        ? (selectedKeys || []).some((i) => i.startsWith(key))
        : (selectedKeys || []).indexOf(key) > -1
    })

    if (collapsed) {
      return (
        <li
          onClick={handleItemClick}
          class={[
            `${prefixCls}-item`,
            `${prefixCls}-item-collapsed`,
            {
              [`${prefixCls}-item-active`]: isSelected.value,
              'show-title': collapsedShowTitle
            }
          ]}
        >
          <a>
            <icon-face-smile-fill />
            {collapsedShowTitle && <span>{menuItem?.meta.title}</span>}
          </a>
        </li>
      )
    }

    return (
      <li
        onClick={handleItemClick}
        class={[
          `${prefixCls}-item`,
          {
            [`${prefixCls}-item-active`]: isSelected.value,
            [`${prefixCls}-item-fold`]: !!menuItem.children && !open,
            [`${prefixCls}-item-unfold`]: !!menuItem.children && open
          }
        ]}
      >
        <a href={open ? '' : menuItem.children ? '' : menuItem.meta.fullPath}>
          {menuItem.parentId === 0 ? <icon-face-smile-fill /> : <Icon icon={'dot'} />}
          <span>{menuItem?.meta.title}</span>
        </a>
        {menuItem.children && subMenuInLine && (open ? <icon-up /> : <icon-down />)}
      </li>
    )
  }
})
