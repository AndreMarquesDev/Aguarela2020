import { NextRouter } from 'next/router';
import { Page } from '../pages';

export const hasDocument = typeof document !== 'undefined';

export const redirectToHomepage = (router: NextRouter, locale: string): Promise<boolean> => router.replace(`/${locale}/${'homepage' as Page}`);
