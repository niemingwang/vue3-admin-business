import axios, { type AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: '',
  timeout: 10000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
})

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
