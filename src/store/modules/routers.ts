import { store } from '@/store'
import { CacheKey } from '@/common/constants/cache-key.ts'
import { useStorageCache } from '@/common/hooks/use-storage-cache.ts'

const { cache } = useStorageCache()

export interface RouteStore {
  routers: AppRouteRecordRaw[]
}

/**
 * 路由状态模块
 * 提供路由相关信息、对服务端返回的路由信息生成可访问的路由表
 */
export const useRouterStore = defineStore('router', () => {
  const routerInfo = reactive<RouteStore>({
    routers: []
  })

  const genRoutes = async () => {
    return new Promise<void>((resolve) => {
      let routers: AppCustomRouteRecordRaw[] = []
      const userRouters = cache.get(CacheKey.USER_ROUTERS)
      if (userRouters) {
        routers = userRouters
      }
      console.log(routers)
      resolve()
    })
  }

  const getRouters = computed<AppRouteRecordRaw[]>(() => routerInfo.routers)

  return { routerInfo, genRoutes, getRouters }
})

export const useRouterStoreWithOut = () => useRouterStore(store)
