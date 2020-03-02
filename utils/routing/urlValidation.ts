import { locales } from '../locales/config';
import { localePathRegex } from '../locales/localePathRegex';
import { pagePathRegex } from '../pages/pagePathRegex';
import { pagesMap } from '../pages/config';
import { isClientSide } from './config';

export const getLangFromUrl = isClientSide ? locales.filter(lang => localePathRegex(lang).test(window.location.pathname)) : [];
export const getRemainingLang = isClientSide ? locales.filter(lang => !localePathRegex(lang).test(window.location.pathname)) : [];
export const urlHasLocale = !!getLangFromUrl.length;
export const urlHasPage = isClientSide && !!pagesMap.filter(page => pagePathRegex(page).test(window.location.pathname)).length;
