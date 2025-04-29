import { store } from '@/store'

export interface SettingStoreState {
  collapse: boolean
}

export const useSettingStore = defineStore('settings', {
  state: (): SettingStoreState => ({
    collapse: false
  }),
  actions: {
    setCollapse(collapse: boolean) {
      this.collapse = collapse
    }
  },
  getters: {
    getCollapse(): boolean {
      return this.collapse
    }
  },
  persist: true
})

export const useSettingStoreWithOut = () => useSettingStore(store)
