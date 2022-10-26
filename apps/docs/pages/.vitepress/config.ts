import { presetIcons, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { AnuComponentResolver, presetCore, presetThemeDefault } from 'anu-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vitepress'

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
    plugins: [
      vueJsx(), // Required for anu-vue
      Unocss({
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
  },
})
