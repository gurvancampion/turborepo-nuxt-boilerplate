import vuetifyConfig from '@myturborepo/vuetify-config'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vuetifyConfig)
})
