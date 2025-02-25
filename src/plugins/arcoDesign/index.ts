import type { App } from 'vue'
import ArcoVue from '@arco-design/web-vue'

export const setupArcoDesign = (app: App<Element>) => {
  app.use(ArcoVue)
}
