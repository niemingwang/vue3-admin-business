export const useUserStore = defineStore('user', () => {
  // 用户信息
  const userInfo = reactive({})
  const getInfo = async () => {}

  return { userInfo, getInfo }
})
