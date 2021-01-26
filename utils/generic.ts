import { Locale } from './locales';
import { textsPt, textsEn, TextsInterface } from './texts';

export const capitalize = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);
export const getCurrentLanguagetexts = (language: Locale): TextsInterface => (language === 'pt' ? textsPt : textsEn);

// eslint-disable-next-line no-return-assign, no-param-reassign
export const resetTimesTouchedAttribute = (): void => document.querySelectorAll('[data-times-touched]').forEach((element: HTMLLIElement) => element.dataset.timesTouched = '0');
