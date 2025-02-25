import type { App } from 'vue'
import 'virtual:svg-icons-register'
import Icon from '@/components/Icon/Icon.vue'

export const setupSvgIcon = (app: App<Element>) => {
  app.component('Icon', Icon)
}
