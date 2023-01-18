import { Page, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { aboutMeSectionDataTestId } from '../../utils/dataTestIds';
import { catarinaSantiagoInstagramUrl } from '../../utils/urls';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { getLocalizedTexts, getImageDimension, openNewTab } from '../utils/utils';

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

    const container = page.getByTestId(aboutMeSectionDataTestId);
    const anchor = container.getByRole('link', { name: getToKnowMeBetter });
    const image = container.getByAltText('a picture of me, Catarina');
    const imageBoundingBox = await image.boundingBox();
    const imageWidthDesktop = 530;
    const imageWidthMobileChrome = 353;
    const imageWidthMobileSafari = 350;
    const imageHeightDesktop = 650;
    const imageHeightMobileChrome = 433;
    const imageHeightMobileSafari = 429;
    const imageWidth = getImageDimension(
        isMobile,
        browserName,
        imageWidthDesktop,
        imageWidthMobileChrome,
        imageWidthMobileSafari
    );
    const imageHeight = getImageDimension(
        isMobile,
        browserName,
        imageHeightDesktop,
        imageHeightMobileChrome,
        imageHeightMobileSafari
    );

    // renders page title
    await expect(container.getByText(about)).toBeVisible();

    // renders the main image
    await expect(image).toBeVisible();
    expect(Math.round(imageBoundingBox?.width || 0)).toEqual(imageWidth);
    expect(Math.round(imageBoundingBox?.height || 0)).toEqual(imageHeight);

    // renders block of text
    await expect(container.getByText(hiMyNameIs)).toBeVisible();
    await expect(container.getByText(withMoreThan)).toBeVisible();
    await expect(container.getByText(theSocialMediaCommunicationStrategy)).toBeVisible();

    // 'Get to know me better' links to Catarina Santiago's Instagram
    await openNewTab(page, anchor, catarinaSantiagoInstagramUrl);
};
