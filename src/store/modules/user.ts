import { store } from '@/store'
import { logout, getInfo } from '@/api/auth.ts'
import { useToken } from '@/common/hooks/use-token.ts'
import { deleteUserCache, useStorageCache } from '@/common/hooks/use-storage-cache.ts'
import { CacheKey } from '@/common/constants/cache-key.ts'

interface UserVO {
  id: number
  avatar: string
  nickname: string
  deptId: number
}

interface UserStoreVO {
  user: UserVO
  isSetUser: boolean
  // 角色列表 [admin]
  roles: string[]
  // 权限列表 [*:*:*]
  permissions: Set<string>
}

const { removeToken } = useToken()
const { cache } = useStorageCache()

export const useUserStore = defineStore('user', () => {
  // 用户信息
  const userStore = reactive<UserStoreVO>({
    user: {} as UserVO,
    isSetUser: false,
    roles: [],
    permissions: new Set<string>()
  })

  const setUserInfo = async () => {
    let userInfo = cache.get(CacheKey.USER_INFO)
    if (!userInfo) {
      userInfo = await getInfo()
    }
    userStore.user = userInfo.user as UserVO
    userStore.roles = userInfo.roles || []
    userStore.permissions = userInfo.permissions || []
    cache.set(CacheKey.USER_INFO, userInfo)
    cache.set(CacheKey.USER_ROUTERS, userInfo.menus)
    userStore.isSetUser = true
  }

  const loginOut = async () => {
    await logout()
    // 清除 token
    removeToken()
    // 清除用户信息
    resetUserInfo()
    // 删除用户缓存
    deleteUserCache()
  }

  const resetUserInfo = () => {
    userStore.roles = []
    userStore.permissions = new Set<string>()
    userStore.user = {} as UserVO
    userStore.isSetUser = false
  }

  const isSetUser = computed(() => {
    return userStore.isSetUser
  })

  return { userStore, setUserInfo, loginOut, resetUserInfo, isSetUser }
})

export const useUserStoreWithOut = () => useUserStore(store)
