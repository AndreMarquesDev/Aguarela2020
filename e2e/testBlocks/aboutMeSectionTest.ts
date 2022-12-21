import { Page, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { aboutMeSectionDataTestId } from '../../utils/dataTestIds';
import { catarinaSantiagoInstagramUrl } from '../../utils/urls';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { getLocalizedTexts, openNewTab } from '../utils/utils';

const getImageSizes = (
    isMobile: boolean | undefined,
    browserName: PlaywrightBrowserName
): { imageWidth: number; imageHeight: number } => {
    const widthDesktop = 530;
    const widthMobileChrome = 353;
    const widthMobileSafari = 350;

    const heightDesktop = 650;
    const heightMobileChrome = 432.921875;
    const heightMobileSafari = 429.234375;

    if (!isMobile) {
        return { imageWidth: widthDesktop, imageHeight: heightDesktop };
    }

    if (browserName === PlaywrightBrowserName.Chromium) {
        return { imageWidth: widthMobileChrome, imageHeight: heightMobileChrome };
    }

    return { imageWidth: widthMobileSafari, imageHeight: heightMobileSafari };
};

export const aboutMeSectionTest = async (
    page: Page,
    isMobile: boolean,
    browserName: PlaywrightBrowserName,
    locale: Locale
): Promise<void> => {
    const {
        about,
        hiMyNameIs,
        withMoreThan,
        theSocialMediaCommunicationStrategy,
        getToKnowMeBetter,
    } = getLocalizedTexts(locale);
    const { imageWidth, imageHeight } = getImageSizes(isMobile, browserName);

    const container = page.getByTestId(aboutMeSectionDataTestId);
    const anchor = container.getByRole('link', { name: getToKnowMeBetter });
    const image = container.getByAltText('a picture of me, Catarina');
    const imageBoundingBox = await image.boundingBox();

    // renders page title
    await expect(container.getByText(about)).toBeVisible();

    // renders the main image
    await expect(image).toBeVisible();
    expect(imageBoundingBox?.width).toEqual(imageWidth);
    expect(imageBoundingBox?.height).toEqual(imageHeight);

    // renders block of text
    await expect(container.getByText(hiMyNameIs)).toBeVisible();
    await expect(container.getByText(withMoreThan)).toBeVisible();
    await expect(container.getByText(theSocialMediaCommunicationStrategy)).toBeVisible();

    // 'Get to know me better' links to Catarina Santiago's Instagram
    await openNewTab(page, anchor, catarinaSantiagoInstagramUrl);
};
