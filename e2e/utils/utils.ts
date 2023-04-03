import { Locator } from '@playwright/test';
import { Locale } from '../../src/types/Locale';
import { PlaywrightBrowserName } from '../../src/types/PlaywrightBrowserName';
import { nukaCarouselNextButtonDataTestId } from '../../src/utils/dataTestIds';
import { TextsInterface, textsPt, textsEn } from '../../src/utils/texts';

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

export const clickNextArrowButtonIfMobile = async (
    isMobile: boolean,
    container: Locator
): Promise<void> => {
    if (isMobile) {
        await container.getByTestId(nukaCarouselNextButtonDataTestId).click();
    }
};

export const getScreenshotPath = (
    screenshotName: string,
    locale: Locale,
    componentName?: string
): string[] => {
    if (componentName) {
        return [componentName, `${locale}-${screenshotName}.png`];
    }

    return ['fullPage', `${locale}-full-page-${screenshotName}.png`];
};

// this technique is recommended by Playwright (https://playwright.dev/docs/pages#handling-popups)
// but was very buggy so I decided to ditch it
// export const openNewTab = async (
//     page: Page,
//     anchor: Locator,
//     url: string | RegExp,
//     timeout = 5000
// ): Promise<void> => {
//     await expect(anchor).toBeVisible();

//     const newTabPromise = page.waitForEvent('popup');

//     await anchor.click();

//     const newTab = await newTabPromise;

//     await newTab.waitForLoadState();

//     await expect(newTab).toHaveURL(url, { timeout });
// };
