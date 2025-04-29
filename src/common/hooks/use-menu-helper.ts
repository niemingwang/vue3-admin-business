import { useRoute } from '@/common/hooks/use-route.ts'
const route = useRoute()

export const useMenuHelper = () => {
  // 路径拼接
  const pathResolve = (parentPath: string, path: string) => {
    const childPath = path.startsWith('/') || !path ? path : `/${path}`
    return `${parentPath}${childPath}`.replace(/\/\//g, '/')
  }

  const defaultSelectKey = () => {
    return '/' + route.path.split('/').filter(Boolean).join('/')
  }

  const defaultOpenKey = () => {
    return '/' + route.path.split('/').filter(Boolean)[0]
  }
  return { pathResolve, defaultSelectKey, defaultOpenKey }
}
