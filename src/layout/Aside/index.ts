import type { App } from 'vue'
import { createApp } from 'vue'

let app: App<Element> | null

export const setupLayout = () => {
  if (!app) {
    const Layout = defineAsyncComponent(() => import('./index.vue'))
    app = createApp(Layout)
    app.mount('#app-aside')
  }
}

export const unmountLayout = () => {
  if (app) {
    app.unmount()
    app = null
  }
}
