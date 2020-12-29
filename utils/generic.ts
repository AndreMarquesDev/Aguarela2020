import { Locale } from './locales';
import { textsPt, textsEn, TextsInterface } from './texts';

export const capitalize = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);
export const getCurrentLanguagetexts = (language: Locale): TextsInterface => (language === 'pt' ? textsPt : textsEn);
