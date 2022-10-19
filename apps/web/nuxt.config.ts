// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@myturborepo/ui',
  ],
  tailwindcss: {
    cssPath: '@myturborepo/tailwind-preset/globals.css',
  },
  nitro: {
    preset: 'netlify',
  },
})
