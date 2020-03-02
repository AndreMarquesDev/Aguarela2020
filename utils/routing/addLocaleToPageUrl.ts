import { NextRouter } from 'next/router';
import { Locale } from '../locales/localesTypes';
import { Page } from '../pages/pagesTypes';
import { urlHasLocale } from './urlValidation';

export const addLocaleToPageUrl = (page: Page, locale: Locale, router: NextRouter): void => {
    // example: /cenas/about --> /en/about
    if (!urlHasLocale) {
        router.replace(`/${locale}/${page}`);
    }
};
