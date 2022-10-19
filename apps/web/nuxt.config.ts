// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { AnuComponentResolver } from 'anu-vue'
import anuConfig from '@myturborepo/common/anu.config'

export default defineNuxtConfig({
  modules: [
    '@myturborepo/ui',
  ],
  vite: {
    plugins: [
      Unocss({
        ...anuConfig,
      }),
      Components({
        resolvers: [
          AnuComponentResolver(),
        ],
      }),
    ],
  },
  nitro: {
    preset: 'netlify',
  },
})
