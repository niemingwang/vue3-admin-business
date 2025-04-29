import { Menu, MenuItem } from '@/components/menu'

export default defineComponent({
  name: 'SubMenu',
  props: {
    /**
     * @zh 子菜单的标题
     * @en The title of the submenu
     */
    title: {
      type: String
    },
    /**
     * @zh 弹出模式下，是否将多级菜单头也作为一个菜单项，支持点击选中等状态
     * @en In the pop-up mode, whether the multi-level menu header is also used as a menu item to support the state such as click to select
     */
    selectable: {
      type: Boolean
    }
  },
  setup(props) {
    return () => (
      <div>
        <MenuItem {...props} />
        <Menu>
          <MenuItem {...props} />
        </Menu>
      </div>
    )
  }
})
