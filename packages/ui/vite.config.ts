/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import { presetIcons, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'
// Workaround using relative path:
// https://github.com/vitejs/vite/issues/5370
// https://github.com/vitejs/vite/issues/9202
import { shortcuts } from '../common/unocss'

export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
    Unocss({
      mode: 'vue-scoped',
      presets: [
        presetUno(),
        presetIcons(),
      ],
      shortcuts,
    }),
  ],
  test: {
    reporters: ['verbose'],
    include: ['tests/**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    deps: {
      inline: ['vuetify'],
    },
  },
})
