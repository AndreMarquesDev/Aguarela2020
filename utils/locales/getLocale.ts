import { filterUrlLocale, urlHasLocale } from '../routing/urlValidation';

import { Locale } from './localesTypes';
import { defaultLocale, prismicCultures, locales } from './config';

export const isLocale = (tested: string): tested is Locale => locales.some(locale => locale === tested);

export const getInitialLocale = (): Locale => {
    if (!navigator) {
        return defaultLocale;
    }

    if (urlHasLocale) {
        return filterUrlLocale[0];
    }

    const localSetting = localStorage.getItem('locale');

    if (localSetting && isLocale(localSetting)) {
        return localSetting;
    }

    const [browserLanguage] = navigator.language.split('-');

    if (isLocale(browserLanguage)) {
        return browserLanguage;
    }

    return defaultLocale;
};

export const getPrismicLocale = (language: string | string[]): string => {
    const prismicLocale = prismicCultures.find(({ culture }) => culture === language);

    return prismicLocale?.locale || 'en-gb';
};
