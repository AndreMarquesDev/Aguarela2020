import { NextRouter } from 'next/router';
import { Locale } from 'multilingual-url/lib';
import { Page } from '../pages';

export const isClientSide = typeof window !== 'undefined';
export const hasNavigator = typeof navigator !== 'undefined';
export const hasDocument = typeof document !== 'undefined';

export const redirectToHomepage = (router: NextRouter, locale: Locale): Promise<boolean> => router.replace(`/${locale}/${'homepage' as Page}`);
