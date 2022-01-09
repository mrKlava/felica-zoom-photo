import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import {enData} from './data/en/enData.js'
import {frData} from './data/fr/frData.js'


i18n
	.use(LanguageDetector)
  	.use(initReactI18next)
  	.init({
    	debug: true,
		detection: {
      		order: ['cookie','htmlTag', 'localStorage', 'path', 'subdomain'],
      		caches: ['cookie'],
    	},
    	fallbackLng: 'en',
    	interpolation: {
    	  	escapeValue: false, // not needed for react as it escapes by default
    	},
		returnObjects: true,
    	resources: {
      		en: {
        		translation: {
          			data: enData
        		}
      		},
			fr: {
				translation: {
					data: frData
				}
			}
    	}
  	});

export default i18n;