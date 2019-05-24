import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from 'translations/en'
import ja from 'translations/ja'

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      ja: { translation: ja },
    },
    lng: 'ja',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
