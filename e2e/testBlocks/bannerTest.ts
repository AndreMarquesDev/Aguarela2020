import { Page, expect } from '@playwright/test';
import { homepageBannerContainerDataTestId } from '../../utils/dataTestIds';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { getImageDimension } from '../utils/utils';

export const bannerTest = async (
    page: Page,
    isMobile: boolean,
    browserName: PlaywrightBrowserName
): Promise<void> => {
    const container = page.getByTestId(homepageBannerContainerDataTestId);
    const banner = container.getByAltText('homepage banner');
    const bannerBoundingBox = await banner.boundingBox();
    const imageWidthDesktop = 1280;
    const imageWidthMobileChrome = 393;
    const imageWidthMobileSafari = 390;
    const imageHeightDesktop = 490;
    const imageHeightMobileChrome = 266;
    const imageHeightMobileSafari = 234;
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

    // renders the banner image
    await expect(banner).toBeVisible();
    expect(Math.round(bannerBoundingBox?.width || 0)).toEqual(imageWidth);
    expect(Math.round(bannerBoundingBox?.height || 0)).toEqual(imageHeight);
};
