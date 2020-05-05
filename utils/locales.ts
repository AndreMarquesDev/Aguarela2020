import { IPrismicCultures } from 'multilingual-url/lib';

export type Locale = 'pt' | 'en';
export const locales: Locale[] = ['pt', 'en'];
export const defaultLocale: Locale = 'pt';

export const prismicCultures: IPrismicCultures[] = [
    {
        culture: 'pt',
        locale: 'pt-pt',
    },
    {
        culture: 'en',
        locale: 'en-gb',
    },
];
