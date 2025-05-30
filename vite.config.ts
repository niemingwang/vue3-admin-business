import { defineConfig } from 'vite'
import { useVitePlugins } from './config/vite-plugins.ts'
import { resolve } from 'node:path'

const buildVitePluginsFn = useVitePlugins()

// https://vite.dev/config/
export default defineConfig({
  plugins: buildVitePluginsFn(),

  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss', '.css'],
    alias: {
      // @ 符号指向 src 目录
      '@': resolve(__dirname, 'src')
    }
  }
})
