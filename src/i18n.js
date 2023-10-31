import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptTranslation from '../db.json';
import enTranslation from '../db.json';


i18n
.use(initReactI18next)
.init({
  lng: 'pt', //DEFINIR LINGUAGEM INICIAL
  fallbacklng: 'en', //DEFINIR UM IDIOMA DE FALLBACK
  resources: {
    pt:{
       translation: ptTranslation
    },
    en: {
      translation: enTranslation
   },
   interpolation: {
    escapeValue: false //EVITAR A NECESSIDADE DE ESCAPAR ESSA SEQUENCIA EM TRADUÇÕES
   }
  }
})

export default i18n;