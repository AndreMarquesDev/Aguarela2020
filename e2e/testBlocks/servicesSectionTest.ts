import { Page, expect } from '@playwright/test';
import { Locale } from '../../src/types/Locale';
import {
    servicesBlockItemCarouselDataTestId,
    servicesBlockItemWrapperDataTestId,
    servicesBlockSectionDataTestId,
} from '../../src/utils/dataTestIds';
import {
    clickNextArrowButtonIfMobile,
    getLocalizedTexts,
    getScreenshotPath,
    nukaCarouselVisibleSlide,
} from '../utils/utils';

export const servicesSectionTest = async (
    page: Page,
    isMobile: boolean,
    locale: Locale
): Promise<void> => {
    const {
        services,
        design,
        webDesign,
        outdoorsAndFlyers,
        contactCard,
        socialMediaTemplates,
        menus,
        socialMediaEn,
        contentCreation,
        marketAnalysis,
        socialMediaStrategyAndManagement,
        paidSocial,
        consulting,
        digital,
        paidSearchCampaigns,
        opinionPlatformsManagement,
    } = getLocalizedTexts(locale);

    const componentName = 'servicesSection';
    const container = page.getByTestId(servicesBlockSectionDataTestId);
    const pageTitle = container.getByText(services);
    const slidesDataTestId = isMobile
        ? servicesBlockItemCarouselDataTestId
        : servicesBlockItemWrapperDataTestId;

    // renders page title
    await expect(pageTitle).toBeVisible();

    // renders first slide
    const slide1 = isMobile
        ? container.locator(`${nukaCarouselVisibleSlide} [data-testid="${slidesDataTestId}"]`)
        : container.getByTestId(slidesDataTestId).nth(0);
    const slide1BackfaceFirstText = slide1.getByText(webDesign);

    await expect(slide1.getByText(design, { exact: true })).toBeVisible();
    await expect(slide1BackfaceFirstText).toBeHidden();

    // hover over slide to show backface
    await slide1.hover();
    await expect(slide1BackfaceFirstText).toBeVisible();
    await expect(slide1.getByText(outdoorsAndFlyers)).toBeVisible();
    await expect(slide1.getByText(contactCard)).toBeVisible();
    await expect(slide1.getByText(socialMediaTemplates)).toBeVisible();
    await expect(slide1.getByText(menus)).toBeVisible();

    // take screenshot of slide 1's backface
    await expect(container).toHaveScreenshot(
        getScreenshotPath('slide1-backface', locale, componentName)
    );

    // hover away to hide backface again
    await pageTitle.hover();
    await expect(slide1BackfaceFirstText).toBeHidden();

    await clickNextArrowButtonIfMobile(isMobile, container);

    // renders second slide
    const slide2 = isMobile
        ? container.locator(`${nukaCarouselVisibleSlide} [data-testid="${slidesDataTestId}"]`)
        : container.getByTestId(slidesDataTestId).nth(1);
    const slide2BackfaceFirstText = slide2.getByText(contentCreation);

    await expect(slide2.getByText(socialMediaEn, { exact: true })).toBeVisible();
    await expect(slide2BackfaceFirstText).toBeHidden();

    // hover over slide to show backface
    await slide2.hover();
    await expect(slide2BackfaceFirstText).toBeVisible();
    await expect(slide2.getByText(marketAnalysis)).toBeVisible();
    await expect(slide2.getByText(socialMediaStrategyAndManagement)).toBeVisible();
    await expect(slide2.getByText(paidSocial)).toBeVisible();
    await expect(slide2.getByText(consulting)).toBeVisible();

    // take screenshot of slide 2's backface
    await expect(container).toHaveScreenshot(
        getScreenshotPath('slide2-backface', locale, componentName)
    );

    // hover away to hide backface again
    await pageTitle.hover();
    await expect(slide2BackfaceFirstText).toBeHidden();

    await clickNextArrowButtonIfMobile(isMobile, container);

    // renders third slide
    const slide3 = isMobile
        ? container.locator(`${nukaCarouselVisibleSlide} [data-testid="${slidesDataTestId}"]`)
        : container.getByTestId(slidesDataTestId).nth(2);
    const slide3BackfaceFirstText = slide3.getByText(paidSearchCampaigns);

    await expect(slide3.getByText(digital, { exact: true })).toBeVisible();
    await expect(slide3BackfaceFirstText).toBeHidden();

    // hover over slide to show backface
    await slide3.hover();
    await expect(slide3BackfaceFirstText).toBeVisible();
    await expect(slide3.getByText(opinionPlatformsManagement)).toBeVisible();

    // take screenshot of slide 3's backface
    await expect(container).toHaveScreenshot(
        getScreenshotPath('slide3-backface', locale, componentName)
    );

    // hover away to hide backface again
    await pageTitle.hover();
    await expect(slide3BackfaceFirstText).toBeHidden();
};
