// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@myturborepo/ui',
  ],
  tailwindcss: {
    cssPath: '@myturborepo/tailwind-preset/globals.css',
  },
  vite: {
    plugins: [
      Components({ resolvers: [HeadlessUiResolver()] }),
    ],
  },
  nitro: {
    preset: 'netlify',
  },
})
