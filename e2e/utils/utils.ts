// eslint-disable-next-line import/no-extraneous-dependencies
import { Locator, Page, expect } from '@playwright/test';
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

export const openNewTab = async (
    page: Page,
    anchor: Locator,
    url: string | RegExp,
    timeout = 5000
): Promise<void> => {
    await expect(anchor).toBeVisible();

    const newTabPromise = page.waitForEvent('popup');

    await anchor.click();

    const newTab = await newTabPromise;

    await newTab.waitForLoadState();

    await expect(newTab).toHaveURL(url, { timeout });
};
