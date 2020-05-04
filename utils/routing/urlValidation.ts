import { pagesMap, pagePathRegex } from '../pages';
import { isClientSide } from './config';

export const getPageFromUrl = isClientSide ? pagesMap.filter(page => pagePathRegex(page).test(window.location.pathname)) : [];
export const urlHasPage = !!getPageFromUrl.length;
