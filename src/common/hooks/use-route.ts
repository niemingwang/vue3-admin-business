import router from '@/router'

export const useRoute = () => {
  return router.currentRoute.value
}
