/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  test: {
    reporters: ['verbose'],
    include: ['tests/**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
  },
})
