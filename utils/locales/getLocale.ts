/* eslint-disable no-console */
import Cookies from 'js-cookie';
import { filterUrlLocale, urlHasLocale } from '../routing/urlValidation';
import { Locale } from './localesTypes';
import { defaultLocale, prismicCultures, locales } from './config';
import { hasNavigator } from '../routing/config';

export const isLocale = (tested: string): tested is Locale => locales.some(locale => locale === tested);

export const getInitialLocale = (): Locale => {
    if (!hasNavigator) {
        console.log('Read lang from default locale (no navigator)');

        return defaultLocale;
    }

    if (urlHasLocale) {
        const locale = filterUrlLocale[0];

        console.log('Read lang from url, will set cookie', locale);
        Cookies.set('lang', locale, { expires: 60 });

        return locale;
    }

    const localSetting = Cookies.get('lang');

    if (localSetting && isLocale(localSetting)) {
        console.log('Read lang from cookie');

        return localSetting;
    }

    const [browserLanguage] = navigator.language.split('-');

    if (isLocale(browserLanguage)) {
        console.log('Read lang from browser language');

        return browserLanguage;
    }

    console.log('Read lang from default locale');

    return defaultLocale;
};

export const getPrismicLocale = (language: string | string[]): string => {
    const prismicLocale = prismicCultures.find(({ culture }) => culture === language);

    return prismicLocale?.locale || 'en-gb';
};
