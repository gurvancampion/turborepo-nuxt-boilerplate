import DefaultTheme from 'vitepress/theme'
import vuetify from '@myturborepo/vuetify-config'
import MyButton from '@myturborepo/ui/components/Button.vue'
import 'uno.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(vuetify)
    app.component('MyButton', MyButton)
  },
}
