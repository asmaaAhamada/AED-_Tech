import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './en.json';
import translationAR from './ar.json';

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

// تحديث اتجاه Document (dir) ولغته (lang) عند تغيير اللغة
const updateDocumentDirection = (lng) => {
  const dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;
};

// تطبيق الاتجاه عند بداية التحميل
updateDocumentDirection(i18n.language || 'en');

// الاستماع لتغيير اللغة لتحديث الاتجاه تلقائياً
i18n.on('languagechanged', (lng) => {
  updateDocumentDirection(lng);
});

export default i18n;