import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/index.css'
import { router } from '@/router'
import { i18n } from '@/i18n'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')