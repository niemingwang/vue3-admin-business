import { CacheKeys } from '@/common/config/constants.ts'
import { useStorageCache } from '@/common/hooks/use-storage-cache.ts'

const { cache } = useStorageCache()

export const useToken = () => {
  const getToken = () => {
    return cache.get(CacheKeys.ACCESS_TOKEN)
  }

  const getRefreshToken = () => {
    return cache.get(CacheKeys.REFRESH_TOKEN)
  }

  const setToken = (token: string) => {
    cache.set(CacheKeys.ACCESS_TOKEN, token)
  }

  const setRefreshToken = (token: string) => {
    cache.set(CacheKeys.REFRESH_TOKEN, token)
  }

  const removeToken = () => {
    cache.delete(CacheKeys.ACCESS_TOKEN)
    cache.delete(CacheKeys.REFRESH_TOKEN)
  }

  return {
    getToken,
    getRefreshToken,
    setToken,
    setRefreshToken,
    removeToken
  }
}
