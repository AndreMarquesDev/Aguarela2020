import { NextRouter } from 'next/router';
import { getLangFromUrl } from 'multilingual-url/lib';
import { Page } from '../pages';
import { locales } from '../locales';

// TODO: review if this is still being used/ it still applies because I don't think so, maybe since the switch to Next's Static Paths
export const addLocaleToPageUrl = (page: Page, locale: string, router: NextRouter): void => {
    // example: /cenas/about --> /en/about
    const urlHasLocale = !!getLangFromUrl(locales).length;

    if (!urlHasLocale) {
        router.replace(`/${locale}/${page}`);
    }
};
