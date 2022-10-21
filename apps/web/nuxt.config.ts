// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { shortcuts } from '@myturborepo/common/unocss'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  modules: [
    async (options, nuxt) => {
      // @ts-expect-error: remove ts error
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify(),
      ))
    },
    '@unocss/nuxt',
    '@myturborepo/ui',
  ],
  unocss: {
    uno: true,
    icons: true,
    shortcuts,
  },
  build: {
    transpile: ['vuetify'],
  },
  nitro: {
    preset: 'netlify',
  },
})
