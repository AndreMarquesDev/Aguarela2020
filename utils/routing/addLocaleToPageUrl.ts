import { NextRouter } from 'next/router';
import { Locale, urlHasLocale } from 'multilingual-url/lib';
import { Page } from '../pages';

export const addLocaleToPageUrl = (page: Page, locale: Locale, router: NextRouter): void => {
    // example: /cenas/about --> /en/about
    if (!urlHasLocale) {
        router.replace(`/${locale}/${page}`);
    }
};
