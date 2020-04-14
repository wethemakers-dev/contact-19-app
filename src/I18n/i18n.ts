import i18n from 'i18next';
import _ from 'lodash';
import {initReactI18next} from 'react-i18next';

import ar from './ar.json';
import en from './en.json';

const resources = {
  en,
  ar,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export interface Language {
  value: string;
  label: string;
  isRtl: boolean;
}

const languagesData: Language[] = [
  {value: 'ar', label: 'العربية', isRtl: true},
  {value: 'en', label: 'English', isRtl: false},
];

export const languages: Language[] = _.orderBy(
  languagesData,
  ['value'],
  ['asc'],
);

export default i18n;
