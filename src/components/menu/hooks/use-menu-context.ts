import { inject } from 'vue'
import { MenuInjectionKey } from '../context'
import type { MenuContext } from '../context'

export default function useMenuContext(): Partial<MenuContext> {
  const menuContext = inject(MenuInjectionKey)
  return menuContext || {}
}
