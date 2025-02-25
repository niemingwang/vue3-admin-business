import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia()

// pinia 持久化插件
store.use(piniaPluginPersistedstate)

export const setupStore = (app: App<Element>) => {
  app.use(store)
}
