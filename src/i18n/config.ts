import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import kk from './locales/kk.json';
import ru from './locales/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      kk: { translation: kk },
      ru: { translation: ru },
    },
    fallbackLng: 'kk',
    lng: 'kk',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
