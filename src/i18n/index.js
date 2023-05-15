import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en';
import ua from './ua';
import tu from './tu';

export const resources = {
  ua: { translation: ua },
  tu: { translation: tu },
  en: { translation: en }
};

export const appLocales = Object.keys(resources);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: appLocales,
    react: {
      useSuspense: true,
    },
  });

export default i18n;

export const availableLang = [
  {
    id: 1,
    label: 'En',
    value: 'en',
  },
  {
    id: 2,
    label: 'Ua',
    value: 'ua',
  },
  {
    id: 3,
    label: 'Tu',
    value: 'tu',
  },
];
