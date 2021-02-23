import { createI18n } from 'vue-i18n'

const messages = {
  en: {

  },
  fr: {

  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'fr',
  messages
});

export default i18n;