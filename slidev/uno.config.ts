import { defineConfig, presetAttributify, presetWind } from 'unocss'
import { presetFlex } from 'unocss-preset-vunk'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetWind(),
    presetFlex({
      prefix: 'sk',
    }),
  ],
})
