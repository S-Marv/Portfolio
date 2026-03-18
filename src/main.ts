import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import App from './App.vue'
import Tooltip from 'primevue/tooltip'
import { router } from './router'

const app = createApp(App)
app.use(router).use(PrimeVue, {
  // Default theme configuration
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
})
app.directive('tooltip', Tooltip)
app.mount('#app')
