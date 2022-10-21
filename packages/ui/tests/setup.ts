import { config } from '@vue/test-utils'
import vuetify from '@myturborepo/vuetify-config'

global.CSS = { supports: () => false }

config.global.plugins = [vuetify]
