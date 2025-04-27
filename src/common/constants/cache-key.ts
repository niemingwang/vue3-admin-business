const APP_NAME = import.meta.env.VITE_APP_TITLE || 'vue3-admin-business'

export class CacheKey {
  static readonly ACCESS_TOKEN = `${APP_NAME}-access-token`
  static readonly REFRESH_TOKEN = `${APP_NAME}-refresh-token`
  static readonly USER_INFO = `${APP_NAME}-user-info`
  static readonly USER_PERMISSION = `${APP_NAME}-user-permission`
  static readonly USER_ROUTERS = `${APP_NAME}-user-routers`
}
