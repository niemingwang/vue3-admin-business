import WebStorageCache from 'web-storage-cache'
import { CacheKey } from '@/common/constants/cache-key.ts'

type StorageCache = 'localStorage' | 'sessionStorage'

let cache: WebStorageCache

export const useStorageCache = (type: StorageCache = 'localStorage') => {
  if (cache) {
    return { cache }
  }

  cache = new WebStorageCache({
    // [可选] 'localStorage', 'sessionStorage', window.localStorage, window.sessionStorage
    // 或者其他实现了 [Storage API] 的storage实例.
    // 默认 'localStorage'.
    storage: type,
    // [可选]  类型Number，公共超时事件设置。默认无限大
    exp: Infinity
  })

  return { cache }
}

export const deleteUserCache = () => {
  if (cache) {
    cache.delete(CacheKey.USER_INFO)
    cache.delete(CacheKey.USER_ROUTERS)
    cache.delete(CacheKey.USER_PERMISSION)
  }
}
