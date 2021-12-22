import { createI18n } from 'vue-i18n'
import { en } from '@/i18n/en.js'
export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en
  }
})