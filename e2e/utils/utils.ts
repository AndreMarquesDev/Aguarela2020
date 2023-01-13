import { Locator, Page, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { nukaCarouselNextButtonDataTestId } from '../../utils/dataTestIds';
import { TextsInterface, textsPt, textsEn } from '../../utils/texts';

export const isChromium = (browserName: PlaywrightBrowserName): boolean =>
    browserName === PlaywrightBrowserName.Chromium;
export const isFirefox = (browserName: PlaywrightBrowserName): boolean =>
    browserName === PlaywrightBrowserName.Firefox;
export const isSafari = (browserName: PlaywrightBrowserName): boolean =>
    browserName === PlaywrightBrowserName.Webkit;

export const oneAndAHalfMinTimeout = 90000;
export const twoMinTimeout = 120000;
export const twoAndAHalfMinTimeout = 150000;

export const getLocalizedTexts = (locale: Locale): TextsInterface => {
    if (locale === Locale.Pt) {
        return textsPt;
    }

    return textsEn;
};

export const getSlidesImageSize = (
    isMobile: boolean,
    browserName: PlaywrightBrowserName,
    sizeDesktop: number,
    sizeMobileChrome: number,
    sizeMobileSafari: number
): number => {
    if (!isMobile) {
        return sizeDesktop;
    }

    if (isChromium(browserName)) {
        return sizeMobileChrome;
    }

    return sizeMobileSafari;
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

export const clickNextArrowButtonIfMobile = async (
    isMobile: boolean,
    container: Locator
): Promise<void> => {
    if (isMobile) {
        await container.getByTestId(nukaCarouselNextButtonDataTestId).click();
    }
};
