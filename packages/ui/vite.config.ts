/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetIcons, presetUno } from 'unocss'
import Components from 'unplugin-vue-components/vite'
import { AnuComponentResolver, presetCore, presetThemeDefault } from 'anu-vue'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(), // Required for anu-vue
    Unocss({
      mode: 'vue-scoped',
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
    }),
    Components({
      resolvers: [
        AnuComponentResolver(),
      ],
    }),
  ],
  test: {
    reporters: ['verbose'],
    include: ['tests/**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
  },
})
