import qs from 'qs'
import axios, { type AxiosRequestConfig } from 'axios'
import { initInterceptors } from '@/common/config/axios/interceptors.ts'

const request = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  },
  // 自定义参数序列化函数
  paramsSerializer: (params) => {
    return qs.stringify(params, { allowDots: true })
  }
})

// 初始化 Axios 请求拦截器
initInterceptors(request)

// 导出整合后的 Axios 实例
export default {
  get: async <T = any>(options: AxiosRequestConfig): Promise<T> => {
    const res = await request({ method: 'GET', ...options })
    return res.data as T
  },
  post: async <T = any>(options: AxiosRequestConfig): Promise<T> => {
    const res = await request({ method: 'POST', ...options })
    return res.data as T
  },
  put: async <T = any>(options: AxiosRequestConfig): Promise<T> => {
    const res = await request({ method: 'PUT', ...options })
    return res.data as T
  },
  delete: async <T = any>(options: AxiosRequestConfig): Promise<T> => {
    const res = await request({ method: 'DELETE', ...options })
    return res.data as T
  },
  upload: async <T = any>(options: AxiosRequestConfig): Promise<T> => {
    options.headers && (options.headers['Content-Type'] = 'multipart/form-data')
    const res = await request({ method: 'POST', ...options })
    return res.data as Promise<T>
  },
  download: async <T = any>(options: AxiosRequestConfig): Promise<T> => {
    const res = await request({ method: 'GET', responseType: 'blob', ...options })
    return res.data as Promise<T>
  }
}
