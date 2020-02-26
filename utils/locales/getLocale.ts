import { Locale } from '../../typings/localeTypes';
import { defaultLocale, prismicCultures, locales } from './config';

export const isLocale = (tested: string): tested is Locale => locales.some(locale => locale === tested);

export const getInitialLocale = (): Locale => {
    if (!navigator) {
        return defaultLocale;
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
