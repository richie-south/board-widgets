import 'react-i18next'
import {resources} from '../i18n/config'

declare module 'react-i18next' {
  export interface Resources {
    translation: typeof resources['en']['translation']
  }
}
