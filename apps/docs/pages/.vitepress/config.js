export default {
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

}
