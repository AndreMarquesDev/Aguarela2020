import { locales } from '../locales/config';
import { localePathRegex } from '../locales/localePathRegex';
import { pagePathRegex } from '../pages/pagePathRegex';
import { pagesMap } from '../pages/config';
import { isClientSide } from './config';

export const filterUrlLocale = isClientSide ? locales.filter(lang => localePathRegex(lang).test(window.location.pathname)) : [];
export const urlHasLocale = !!filterUrlLocale.length;
export const urlHasPage = isClientSide && !!pagesMap.filter(page => pagePathRegex(page).test(window.location.pathname)).length;
