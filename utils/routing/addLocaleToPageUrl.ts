import { NextRouter } from 'next/router';
import { Locale } from '../locales/localesTypes';
import { urlHasLocale } from './urlValidation';
import { Page } from '../pages';

export const addLocaleToPageUrl = (page: Page, locale: Locale, router: NextRouter): void => {
    // example: /cenas/about --> /en/about
    if (!urlHasLocale) {
        router.replace(`/${locale}/${page}`);
    }
};
