import { Page, expect } from '@playwright/test';
import { Locale } from '../../src/types/Locale';
import { aboutMeSectionDataTestId } from '../../src/utils/dataTestIds';
import { catarinaSantiagoInstagramUrl } from '../../src/utils/urls';
import { PlaywrightBrowserName } from '../../src/types/PlaywrightBrowserName';
import { getLocalizedTexts, getImageDimension } from '../utils/utils';

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
    const imageWidthDesktop = 540;
    const imageWidthMobileChrome = 353;
    const imageWidthMobileSafari = 350;
    const imageHeightDesktop = 675;
    const imageHeightMobileChrome = 441;
    const imageHeightMobileSafari = 437;
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
    await expect(anchor).toBeVisible();
    await expect(anchor).toHaveAttribute('href', catarinaSantiagoInstagramUrl);
};
