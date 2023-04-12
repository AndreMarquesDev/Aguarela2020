import { Page, expect } from '@playwright/test';
import { Locale } from '../../src/types/Locale';
import { PlaywrightBrowserName } from '../../src/types/PlaywrightBrowserName';
import { projectsListSectionDataTestId } from '../../src/utils/dataTestIds';
import {
    guacamoleInstagramUrl,
    kaffeehausInstagramUrl,
    tjelaInstagramUrl,
} from '../../src/utils/urls';
import { urls } from '../utils/selectors';
import {
    clickNextArrowButtonIfMobile,
    getLocalizedTexts,
    getImageDimension,
    getScreenshotPath,
    nukaCarouselVisibleSlide,
} from '../utils/utils';

export const projectsSectionTest = async (
    page: Page,
    isMobile: boolean,
    browserName: PlaywrightBrowserName,
    locale: Locale
): Promise<void> => {
    const {
        socialMediaManagementAndContentCreation,
        projects,
        present,
        inPartnershipWith,
        seeMore,
    } = getLocalizedTexts(locale);

    const componentName = 'projectsSection';
    const container = page.getByTestId(projectsListSectionDataTestId);
    const pageTitle = container.getByText(projects);
    const seeMoreAnchor = container.getByRole('link', { name: seeMore });

    const testSlide = async (
        number: number,
        brand: string,
        instagramHandle: string,
        url: string,
        title: string,
        isInPartnership: boolean,
        year?: string
    ): Promise<void> => {
        // nukaCarousel adds two extra slides, a '.prev-cloned' and a '.next-cloned'
        const slide = isMobile
            ? container.locator(nukaCarouselVisibleSlide)
            : container.locator('li').nth(number - 1);
        const anchor = slide.getByRole('link', { name: instagramHandle });
        const image = slide.getByAltText(`${brand} logo`, { exact: true });
        const imageBoundingBox = await image.boundingBox();
        const imageSizeDesktop = 384;
        const imageSizeMobileChrome = 293;
        const imageSizeMobileSafari = 290;
        const imageSize = getImageDimension(
            isMobile,
            browserName,
            imageSizeDesktop,
            imageSizeMobileChrome,
            imageSizeMobileSafari
        );

        // renders the image
        await expect(image).toBeVisible();
        expect(Math.round(imageBoundingBox?.width || 0)).toEqual(imageSize);
        expect(Math.round(imageBoundingBox?.height || 0)).toEqual(imageSize);

        // hovers over the image to show backface
        await expect(anchor).toBeHidden();
        await slide.hover();
        await expect(anchor).toBeVisible();

        // clicks on link to instagram
        await expect(anchor).toBeVisible();
        await expect(anchor).toHaveAttribute('href', url);

        // after the click, the backface is hidden again sometimes
        await slide.hover();
        await expect(slide.getByText(title)).toBeVisible();

        if (year) {
            await expect(slide.getByText(year)).toBeVisible();
        }

        if (isInPartnership) {
            await expect(slide.getByText(`* ${inPartnershipWith}`)).toBeVisible();
        }

        // take screenshot of slide backface
        await expect(container).toHaveScreenshot(
            getScreenshotPath(`slide${number}-backface`, locale, componentName)
        );
    };

    // renders page title
    await expect(pageTitle).toBeVisible();

    // renders slides
    await testSlide(
        1,
        'tjela',
        '@tudonatjela',
        tjelaInstagramUrl,
        socialMediaManagementAndContentCreation,
        true,
        `2020 - ${present}`
    );

    await clickNextArrowButtonIfMobile(isMobile, container);

    await testSlide(
        2,
        'kaffeehaus',
        '@kaffeehaus_lisboa',
        kaffeehausInstagramUrl,
        socialMediaManagementAndContentCreation,
        false,
        `2018 - ${present}`
    );

    // remove focus from slide to hide backface before screenshot
    await pageTitle.click();
    // take screenshot of slide 2
    await expect(container).toHaveScreenshot(getScreenshotPath('slide2', locale, componentName));

    await clickNextArrowButtonIfMobile(isMobile, container);

    await testSlide(
        3,
        'guacamole',
        '@guacamolegmg',
        guacamoleInstagramUrl,
        socialMediaManagementAndContentCreation,
        true,
        `2019 - ${present}`
    );

    // remove focus from slide to hide backface before screenshot
    await pageTitle.click();
    // take screenshot of slide 3
    await expect(container).toHaveScreenshot(getScreenshotPath('slide3', locale, componentName));

    // click on button redirects to projects page
    await expect(seeMoreAnchor).toBeVisible();
    await seeMoreAnchor.click();
    await expect(page).toHaveURL(urls[locale].projects);
};
