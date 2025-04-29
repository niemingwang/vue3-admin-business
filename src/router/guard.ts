import type { Router } from 'vue-router'
import { useToken } from '@/common/hooks/use-token.ts'
import { useNProgress } from '@/common/hooks/use-nprogress.ts'
import { useUserStoreWithOut } from '@/store/modules/user.ts'
import { useRouterStoreWithOut } from '@/store/modules/routers.ts'
import { isWhiteList } from '@/router/white-list.ts'
import { setupLayout, unmountLayout } from '@/layout/Aside/index.ts'

const { start, done } = useNProgress()
const { getToken } = useToken()

const LOGIN_PATH = '/login'

/**
 * 路由导航守卫
 * @param router
 */
export const setupRouterGuard = (router: Router) => {
  // 全局前置守卫
  router.beforeEach(async (to) => {
    start()
    const userStore = useUserStoreWithOut()
    const routerStore = useRouterStoreWithOut()
    // 如果没有登录
    if (!getToken()) {
      // 如果在免登录的白名单中，则直接进入
      if (isWhiteList(to)) return true
      // 其他没有访问权限的页面将被重定向到登录页面
      return LOGIN_PATH
    }
    // 如果已经登录，并准备进入 Login 页面，则重定向到主页
    if (to.path === LOGIN_PATH) return '/'
    // 如果已经登录，并且已经设置用户信息，则直接进入
    if (userStore.isSetUser) return true
    // 如果已经登录，但是没有设置用户信息，则先设置用户信息，再进入
    try {
      // 获取用户信息并设置缓存
      await userStore.setUserInfo()
      // 生成动态路由
      await routerStore.genRoutes()
      return { ...to, replace: true }
    } catch {
      userStore.resetUserInfo()
      return LOGIN_PATH
    }
  })

  // 全局后置守卫
  router.afterEach((to) => {
    document.body.title = to.meta.title || 'Vue3-admin-Business'
    if (to.path === LOGIN_PATH) {
      unmountLayout()
    } else {
      setupLayout()
    }
    done()
  })
}
