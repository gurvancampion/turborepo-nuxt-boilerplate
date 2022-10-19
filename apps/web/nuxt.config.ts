// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { shortcuts } from '@myturborepo/common/unocss'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@myturborepo/ui',
  ],
  unocss: {
    uno: true,
    shortcuts,
  },
  nitro: {
    preset: 'netlify',
  },
})
