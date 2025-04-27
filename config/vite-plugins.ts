import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import progress from 'vite-plugin-progress'
// @ts-expect-error @ts-ignore
import EslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

export function useVitePlugins() {
  return () => [
    vue(),
    // 支持 JSX、TSX 语法
    VueJsx(),
    // 显示项目打包编译进度
    progress(),
    // 自动按需导入 API
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/types/auto/auto-imports.d.ts',
      resolvers: [ArcoResolver()]
    }),
    // 自动按需导入组件
    Components({
      dts: 'src/types/auto/components.d.ts',
      resolvers: [
        ArcoResolver({
          sideEffect: true
        })
      ]
    }),
    EslintPlugin({
      cache: false,
      // 检查的文件
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue', 'src/**/*.js', 'src/**/*.jsx']
    }),
    // svg图标
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/images/svg')],
      symbolId: 'icon-[name]'
    }),
    vitePluginForArco({
      style: 'css',
      theme: '@arco-themes/vue-awsome-business'
    })
  ]
}
