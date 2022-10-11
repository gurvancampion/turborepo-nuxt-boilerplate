import DefaultTheme from 'vitepress/theme'
import MyButton from '@myturborepo/ui/components/Button.vue'
import 'uno.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyButton', MyButton)
  },
}
