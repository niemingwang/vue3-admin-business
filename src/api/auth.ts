import request from '@/common/config/axios'

export type LoginResponse = { accessToken: string; refreshToken: string }

/**
 * 登录
 * @param data
 */
export const login = (data: any) => {
  return request.post<LoginResponse>({
    url: '/api/login',
    data
  })
}

/**
 * 登出
 */
export const logout = () => {
  return request.post({
    url: '/api/logout'
  })
}
