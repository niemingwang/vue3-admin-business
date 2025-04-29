export interface MenuProps {
  selectedKeys?: string[]
  collapsed?: boolean
  collapsedWidth?: number
}

export interface MenuGroupProps {
  title: string | undefined
}

export interface MenuItemProps {
  key: string | undefined
  disabled?: boolean
}

export interface MenuDataItem {
  key: string
  children?: MenuData
}

export type MenuData = MenuDataItem[]
