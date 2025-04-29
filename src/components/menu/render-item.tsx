import SubMenu from '@/components/menu/sub-menu'
import { MenuItem } from '@/components/menu/index.ts'
import useMenuContext from '@/components/menu/hooks/use-menu-context.ts'
import { useMenuHelper } from '@/common/hooks/use-menu-helper.ts'
// import RenderItem from '@/components/menu/render-item.tsx'
import useMenu from '@/components/menu/hooks/use-menu.ts'

export default defineComponent({
  name: 'RenderItem',
  props: {
    item: {
      type: Object as PropType<AppRouteRecordRaw>,
      default: () => {}
    }
  },
  setup(props) {
    const { item } = toRefs(props)
    const { key } = useMenu()
    const menuContext = useMenuContext()

    return {
      menuItem: item,
      menuContext,
      key: key.value
    }
  },
  render() {
    const { menuItem, menuContext } = this
    const { subMenuInLine, collapsed } = menuContext

    const { pathResolve } = useMenuHelper()

    if (menuItem.children) {
      return (
        <>
          <MenuItem item={menuItem} key={pathResolve('/', menuItem.path)} />
          {subMenuInLine && !collapsed && (
            <SubMenu key={pathResolve('/', menuItem.path)}>
              {menuItem.children.map((item: AppRouteRecordRaw) => (
                <MenuItem item={item} key={pathResolve(menuItem.path, item.path)} />
              ))}
            </SubMenu>
          )}
        </>
      )
    } else {
      return <MenuItem item={menuItem} key={pathResolve('/', menuItem.path)} />
    }
  }
})
