import type { App } from 'vue'
import { defaultRoutes } from '@/router/routes.ts'
import { setupRouterGuard } from '@/router/guard.ts'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: defaultRoutes
})

export const setupRouter = (app: App<Element>) => {
  // 注册路由
  app.use(router)

  // 路由导航守卫
  setupRouterGuard(router)
}

export default router
