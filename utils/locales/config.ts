import { IPrismicCultures, Locale } from './localesTypes'; // eslint-disable-line import/no-cycle

export const defaultLocale = 'pt';

export const locales: Locale[] = ['pt', 'en'];

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
