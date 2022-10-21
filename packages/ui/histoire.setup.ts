import { defineSetupVue3 } from '@histoire/plugin-vue'
import vuetify from '@myturborepo/vuetify-config'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(vuetify)
})
