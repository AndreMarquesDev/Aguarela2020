import { Locale } from './localesTypes';

export const localePathRegex = (lang: Locale): RegExp => RegExp(`^/${lang}`);
