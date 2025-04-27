import Mock from 'mockjs'
import { MockUtils } from '@/common/utils/mock-utils.ts'

// 登录
export const loginMock = Mock.mock('/api/user/login', 'post', () => {
  const data = {
    accessToken: Mock.mock('@guid'),
    refreshToken: Mock.mock('@guid')
  }
  return MockUtils.buildResponse(data)
})

// 登出
export const logoutMock = Mock.mock('/api/user/logout', 'post', () => {
  return MockUtils.buildResponse(true)
})
