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

export const oneMinTimeout = 60000;
export const oneAndAHalfMinTimeout = oneMinTimeout * 1.5;
export const twoMinTimeout = oneMinTimeout * 2;
export const twoAndAHalfMinTimeout = oneMinTimeout * 2.5;

export const getLocalizedTexts = (locale: Locale): TextsInterface => {
    if (locale === Locale.Pt) {
        return textsPt;
    }

    return textsEn;
};

export const getImageDimension = (
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

// sometimes instagram opens the login page instead of the respective account page
// in cases like that the url looks like this:
// "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Flogin%2F%3Fnext%3Dhttps%253A%252F%252Fwww.instagram.com%252Fcatarinasantiago%252F%26__coig_login%3D1"
// the goal here is to try the standard url and if instagram redirects to the login page,
// assert that at least the url is correct
export const getInstagramFallbackUrl = (url: string): string => {
    const accountHandle = url.split('https://www.instagram.com/')[1].split('/')[0];
    const fallbackUrl = `https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Flogin%2F%3Fnext%3Dhttps%253A%252F%252Fwww.instagram.com%252F${accountHandle}%252F%26__coig_login%3D1`;

    return fallbackUrl;
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
