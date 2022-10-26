import vuetify from 'vite-plugin-vuetify'
import Unocss from 'unocss/vite'
import { presetIcons, presetUno } from 'unocss'
import { defineConfig } from 'vitepress'
// Workaround using relative path:
// https://github.com/vitejs/vite/issues/5370
// https://github.com/vitejs/vite/issues/9202
import { shortcuts } from '../../../../packages/common/unocss'

export default defineConfig({
  title: 'VitePress',
  description: 'Just playing around with turborepo',
  themeConfig: {
    siteTitle: 'My Custom Title',
    nav: [
      { text: 'Index', link: '/index' },
      { text: 'Getting started', link: '/getting-started' },
      { text: 'Github', link: 'https://' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Index', link: '/index' },
          { text: 'Getting started', link: '/getting-started' },
        ],
      },
    ],
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    plugins: [
      vuetify(),
      Unocss({
        presets: [
          presetUno(),
          presetIcons(),
        ],
        shortcuts,
      }),
    ],
  },
})
