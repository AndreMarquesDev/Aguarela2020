import { Page, expect, test } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { projectsListSectionDataTestId } from '../../utils/dataTestIds';
import { guacamoleInstagramUrl, kaffeehausInstagramUrl, tjelaInstagramUrl } from '../../utils/urls';
import { urls } from '../utils/selectors';
import {
    clickNextArrowButtonIfMobile,
    getLocalizedTexts,
    getImageDimension,
    openNewTab,
    isSafari,
    oneMinTimeout,
    isFirefox,
} from '../utils/utils';

export const projectsSectionTest = async (
    page: Page,
    isMobile: boolean,
    browserName: PlaywrightBrowserName,
    locale: Locale
): Promise<void> => {
    if (isSafari(browserName) || isFirefox(browserName)) {
        test.setTimeout(oneMinTimeout);
    }

    const {
        socialMediaManagementAndContentCreation,
        projects,
        present,
        inPartnershipWith,
        seeMore,
    } = getLocalizedTexts(locale);

    const container = page.getByTestId(projectsListSectionDataTestId);
    const seeMoreAnchor = container.getByRole('link', { name: seeMore });

    const testSlide = async (
        number: number,
        brand: string,
        instagramHandle: string,
        url: string | RegExp,
        title: string,
        isInPartnership: boolean,
        year?: string
    ): Promise<void> => {
        const slide = isMobile
            ? container.locator('.slide-visible')
            : container.locator('li').nth(number - 1);
        const anchor = slide.getByRole('link', { name: instagramHandle });
        const image = container.getByAltText(`${brand} logo`, { exact: true });
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
        await openNewTab(page, anchor, url);

        // after the click, the backface is hidden again sometimes
        await slide.hover();
        await expect(slide.getByText(title)).toBeVisible();

        if (year) {
            await expect(slide.getByText(year)).toBeVisible();
        }

        if (isInPartnership) {
            await expect(slide.getByText(`* ${inPartnershipWith}`)).toBeVisible();
        }
    };

    // renders page title
    await expect(container.getByText(projects)).toBeVisible();

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

    // click on button redirects to projects page
    await expect(seeMoreAnchor).toBeVisible();
    await seeMoreAnchor.click();
    await expect(page).toHaveURL(urls[locale].projects);
};
