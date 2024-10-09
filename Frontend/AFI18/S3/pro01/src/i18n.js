// src/i18n.js
import { createI18n } from 'vue-i18n'

// Define messages for each locale
const messages = {
  en: {
    welcome: 'Welcome',
    message: 'Hello World'
  },
  fr: {
    welcome: 'Bienvenue',
    message: 'Bonjour le monde'
  }
}

// Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n