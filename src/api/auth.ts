import request from '@/common/config/axios'

export type LoginResponse = { accessToken: string; refreshToken: string }

/**
 * 登录
 * @param data
 */
export const login = (data: any) => {
  return request.post<LoginResponse>({
    url: '/user/login',
    data
  })
}

/**
 * 获取用户信息
 */
export const getInfo = () => {
  return request.get<any>({
    url: '/user/get'
  })
}

/**
 * 登出
 */
export const logout = () => {
  return request.post({
    url: '/user/logout'
  })
}
