import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationFR from './locales/fr.json';
import translationEN from './locales/en.json';
import translationAR from './locales/ar.json';

const resources = {
    fr: { translation: translationFR.translation },
    en: { translation: translationEN.translation },
    ar: { translation: translationAR.translation },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'fr', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
