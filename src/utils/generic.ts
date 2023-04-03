import { Locale } from '../types/Locale';
import { textsPt, textsEn, TextsInterface } from './texts';

export const isDev = process.env.NODE_ENV === 'development';
export const capitalize = (string: string): string =>
    string.charAt(0).toUpperCase() + string.slice(1);
export const getCurrentLanguagetexts = (language: Locale): TextsInterface =>
    language === Locale.Pt ? textsPt : textsEn;

export const resetTimesTouchedAttribute = (): void =>
    document.querySelectorAll('[data-times-touched]').forEach(
        element => ((element as HTMLLIElement).dataset.timesTouched = '0') // eslint-disable-line no-return-assign, no-param-reassign
    );
