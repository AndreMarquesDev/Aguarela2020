import { isClientSide } from 'multilingual-url/lib';
import { pagesMap, pagePathRegex } from '../pages';

export const getPageFromUrl = isClientSide ? pagesMap.filter(page => pagePathRegex(page).test(window.location.pathname)) : [];
export const urlHasPage = !!getPageFromUrl.length;
