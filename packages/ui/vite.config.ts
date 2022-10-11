/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
// Workaround using relative path:
// https://github.com/vitejs/vite/issues/5370
// https://github.com/vitejs/vite/issues/9202
import { shortcuts } from '../common/unocss'

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      mode: 'vue-scoped',
      shortcuts,
    }),
  ],
  test: {
    reporters: ['verbose'],
    include: ['tests/**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
  },
})
