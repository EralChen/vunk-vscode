import { LIB_ALIAS, LIB_NAME } from './name'

export const libExternal = [
  'vue',
  /^@vunk\/core/,
  /^@vunk\/form/,
  /^element-plus/,
  /^@vueuse\/core/,
  new RegExp(`^${LIB_NAME}`),
  new RegExp(`^${LIB_ALIAS}`),
]

export const filePathIgnore = [
  'gulpfile.ts',
  'package.json',
  'node_modules',
  '**/README.md',
  '**/__tests__/**.ts',
]
