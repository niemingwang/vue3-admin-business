import type { Router } from 'vue-router'
import { useToken } from '@/hooks/use-token.ts'
import { useNprogress } from '@/hooks/use-nprogress.ts'

const { start, done } = useNprogress()
const { getToken, removeToken } = useToken()

/**
 * 路由导航守卫
 * @param router
 */
export const setupRouterGuard = (router: Router) => {
  // 全局前置守卫
  router.beforeEach(async (to, from, next) => {
    start()
    console.log('token ====> ', getToken())
    console.log(to, from)
    next()
  })

  // 全局后置守卫
  router.afterEach((to, from) => {
    console.log(from)
    console.log(to.path)
    removeToken()
    done()
  })
}
