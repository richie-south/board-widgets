import i18n from 'i18next'

import {initReactI18next} from 'react-i18next'
import translation from './en/translation.json'

export const resources = {
  en: {
    translation,
  },
} as const

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources,
  })

export default i18n
