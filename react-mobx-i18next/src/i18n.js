import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './translations/en'
import vi from './translations/vi'

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    lng: 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
