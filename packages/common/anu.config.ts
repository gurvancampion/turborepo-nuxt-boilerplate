import { presetCore, presetThemeDefault } from 'anu-vue'
import type { defineConfig } from 'unocss'
import { presetIcons, presetUno } from 'unocss'

const config: ReturnType<typeof defineConfig> = {
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'height': '1.5em',
        'flex-shrink': '0',
        'display': 'inline-block',
      },
    }),

    // anu-vue presets
    presetCore(),
    presetThemeDefault(),
  ],
  include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
}

export default config
