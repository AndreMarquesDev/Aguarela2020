// eslint-disable-next-line import/no-extraneous-dependencies
import { Page } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { TextsInterface, textsPt, textsEn } from '../../utils/texts';

export const getLocalizedTexts = (locale: Locale): TextsInterface => {
    if (locale === Locale.Pt) {
        return textsPt;
    }

    return textsEn;
};

export const openMenuMobile = (page: Page, isMobile: boolean): void => {
    if (isMobile) {
        page.getByRole('button', { name: 'toggle menu' }).click();
    }
};
