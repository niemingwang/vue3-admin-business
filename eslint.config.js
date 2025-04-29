import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/** 忽略文件 */
const ignores = {
  ignores: ['dist', 'public', 'node_modules', '*.yaml', '*.json']
}

/** 全局生效配置 */
const globalConfig = {
  files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,vue}'],
  languageOptions: { globals: globals.browser },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off'
  }
}

/** vue规则 */
const vueConfig = {
  files: ['**/*.vue'],
  languageOptions: {
    parserOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      /** 允许在.vue 文件中使用 JSX */
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  rules: {
    'no-undef': 'off',
    'no-console': 'warn',
    'vue/no-mutating-props': 'error',
    'no-debugger': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-deprecated-slot-scope-attribute': 'off',
    'vue/no-deprecated-v-is': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
}

/** ts配置 */
const tsConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  rules: {
    'no-console': 'warn',
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off'
  }
}

/** @type {import('eslint').Linter.Config[]} */
export default [
  /** js推荐配置 */
  pluginJs.configs.recommended,
  /** ts推荐配置 */
  ...tseslint.configs.recommended,
  /** vue推荐配置 */
  ...pluginVue.configs['flat/essential'],
  /** Prettier推荐配置 */
  eslintPluginPrettierRecommended,

  ignores,

  globalConfig,

  vueConfig,

  tsConfig
]
