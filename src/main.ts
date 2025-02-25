import { createApp } from 'vue'
import App from './App.vue'

// 引入 arco-design
import { setupArcoDesign } from '@/plugins/arcoDesign'

// 引入 svgIcon
import { setupSvgIcon } from '@/plugins/svgIcon'

// 引入全局样式
import '@/styles/index.css'

const setupAll = () => {
  const app = createApp(App)

  setupArcoDesign(app)

  setupSvgIcon(app)

  app.mount('#app')
}

setupAll()
