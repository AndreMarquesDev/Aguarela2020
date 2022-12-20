// eslint-disable-next-line import/no-extraneous-dependencies
import { Page, expect } from '@playwright/test';
import { getLocalizedTexts } from '../../cypress/utils/utils';
import { Locale } from '../../types/Locale';
import { aboutMeSectionDataTestId } from '../../utils/dataTestIds';
import { catarinaSantiagoInstagramUrl } from '../../utils/urls';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';

const getPictureSizes = (
    isMobile: boolean | undefined,
    browserName: PlaywrightBrowserName
): { pictureWidth: number; pictureHeight: number } => {
    const widthDesktop = 530;
    const widthMobileChrome = 353;
    const widthMobileSafari = 350;

    const heightDesktop = 650;
    const heightMobileChrome = 432.921875;
    const heightMobileSafari = 429.234375;

    if (!isMobile) {
        return { pictureWidth: widthDesktop, pictureHeight: heightDesktop };
    }

    if (browserName === PlaywrightBrowserName.Chromium) {
        return { pictureWidth: widthMobileChrome, pictureHeight: heightMobileChrome };
    }

    return { pictureWidth: widthMobileSafari, pictureHeight: heightMobileSafari };
};

export const aboutMeSectionTest = async (
    page: Page,
    isMobile: boolean | undefined,
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

    const { pictureWidth, pictureHeight } = getPictureSizes(isMobile, browserName);

    const container = await page.getByTestId(aboutMeSectionDataTestId);
    const image = await container.getByAltText('a picture of me, Catarina');
    const imageBoundingBox = await image.boundingBox();

    // renders page title
    await expect(container.getByText(about)).toBeVisible();

    // renders te main image
    await expect(image).toBeVisible();
    await expect(imageBoundingBox?.width).toEqual(pictureWidth);
    await expect(imageBoundingBox?.height).toEqual(pictureHeight);

    // renders block of text
    await expect(container.getByText(hiMyNameIs)).toBeVisible();
    await expect(container.getByText(withMoreThan)).toBeVisible();
    await expect(container.getByText(theSocialMediaCommunicationStrategy)).toBeVisible();

    // 'Get to know me better' links to Catarina Santiago's Instagram
    await expect(container.getByRole('link', { name: getToKnowMeBetter })).toBeVisible();

    const newTabPromise = page.waitForEvent('popup');

    await container.getByRole('link', { name: getToKnowMeBetter }).click();

    const newTab = await newTabPromise;

    await newTab.waitForLoadState();

    await expect(newTab).toHaveURL(catarinaSantiagoInstagramUrl);
};
