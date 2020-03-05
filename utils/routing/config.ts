import { NextRouter } from 'next/router';
import { Locale } from '../locales/localesTypes';

export const isClientSide = typeof window !== 'undefined';
export const hasNavigator = typeof navigator !== 'undefined';
export const hasDocument = typeof document !== 'undefined';

export const redirectToHomepage = (router: NextRouter, locale: Locale): Promise<boolean> => router.replace(`/${locale}/home`);
