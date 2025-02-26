import { Message } from '@arco-design/web-vue'
import type { AxiosError, AxiosInstance } from 'axios'
import { useToken } from '@/common/hooks/use-token.ts'
import ErrorCode from '@/common/config/axios/error-code.ts'

const { getToken } = useToken()

export const initInterceptors = (axios: AxiosInstance) => {
  axios.interceptors.request.use(
    (config) => {
      if (getToken() && config.url !== '/api/login') {
        config.headers.Authorization = `Bearer ${getToken()}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    (response) => {
      // data 是接口响应的数据
      const { data } = response
      // 如果是二进制数据，直接返回
      const responseType = response.request?.responseType
      if (responseType === 'blob' || responseType === 'arraybuffer') {
        return data
      }
      // 接口响应的 code
      const code = data.code
      // 接口响应的 msg 提示信息
      const msg = data.msg || ErrorCode[code as keyof typeof ErrorCode] || ErrorCode['default']
      // 如果没有 code 抛出错误
      if (code === undefined) return Promise.reject(new Error(msg))
      if (code === 401) {
        // TODO 处理未授权
        return Promise.reject(new Error(msg))
      } else if (code === 500) {
        return Promise.reject(new Error(msg))
      } else {
        return data
      }
    },
    (error: AxiosError) => {
      const { status } = error
      switch (status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '未授权'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求地址出错'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP 版本不受支持'
          break
      }
      Message.error(error.message)
      return Promise.reject(error)
    }
  )
}
