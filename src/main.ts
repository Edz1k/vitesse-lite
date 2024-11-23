import * as amplitude from '@amplitude/analytics-browser'
import * as Sentry from '@sentry/vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

// Стили
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

// Создание приложения
const app = createApp(App)

// Инициализация Sentry
Sentry.init({
  app,
  dsn: 'https://930188e558e38d7e0fa9722917033cfe@o4508326028640256.ingest.de.sentry.io/4508326032769104',
  integrations: [],
})

amplitude.init('b3bc74ae33143c2a5317d35994bdceb4', { autocapture: true })

window.addEventListener('appinstalled', () => {
  amplitude.track('PWA Installed')
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

app.use(router)
app.mount('#app')
