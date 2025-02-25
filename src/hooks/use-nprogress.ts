import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import type { NProgressOptions } from 'nprogress'

const showNProgress = import.meta.env.VITE_APP_NPROGRESS === 'true'

export const useNprogress = () => {
  NProgress.configure({ showSpinner: false } as NProgressOptions)

  const start = () => {
    showNProgress && NProgress.start()
  }

  const done = () => {
    showNProgress && NProgress.done()
  }

  return {
    start,
    done
  }
}
