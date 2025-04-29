import type { InjectionKey } from 'vue'

export const MenuInjectionKey: InjectionKey<MenuContext> = Symbol('MenuInjectionKey')

export type MenuContext = {
  selectedKeys: string[]
  openKeys?: string[]
  prefixCls: string
  collapsed: boolean
  collapsedShowTitle?: boolean
  collapsedWidth: number
  subMenuInLine: boolean
  onMenuItemClick?: (item: AppRouteRecordRaw) => void
}
