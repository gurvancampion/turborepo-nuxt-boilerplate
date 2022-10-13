import DefaultTheme from 'vitepress/theme'
import MyButton from '@myturborepo/ui/components/Button.vue'
import '@myturborepo/tailwind-preset/globals.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyButton', MyButton)
  },
}
