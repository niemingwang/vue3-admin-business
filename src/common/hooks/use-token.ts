import { CacheKey } from '@/common/constants/cache-key.ts'
import { useStorageCache } from '@/common/hooks/use-storage-cache.ts'

const { cache } = useStorageCache()

export const useToken = () => {
  const getToken = () => {
    return cache.get(CacheKey.ACCESS_TOKEN)
  }

  const getRefreshToken = () => {
    return cache.get(CacheKey.REFRESH_TOKEN)
  }

  const setToken = (token: string) => {
    cache.set(CacheKey.ACCESS_TOKEN, token)
  }

  const setRefreshToken = (token: string) => {
    cache.set(CacheKey.REFRESH_TOKEN, token)
  }

  const removeToken = () => {
    cache.delete(CacheKey.ACCESS_TOKEN)
    cache.delete(CacheKey.REFRESH_TOKEN)
  }

  return {
    getToken,
    getRefreshToken,
    setToken,
    setRefreshToken,
    removeToken
  }
}
