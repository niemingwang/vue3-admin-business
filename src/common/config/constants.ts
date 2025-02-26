const APP_NAME = import.meta.env.VITE_APP_TITLE || 'vue3-admin-business'

export class CacheKeys {
  static readonly ACCESS_TOKEN = `${APP_NAME}-access-token`
  static readonly REFRESH_TOKEN = `${APP_NAME}-refresh-token`
}
