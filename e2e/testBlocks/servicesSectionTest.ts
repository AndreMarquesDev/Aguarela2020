import { Page, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import {
    servicesBlockItemCarouselDataTestId,
    servicesBlockItemWrapperDataTestId,
    servicesBlockSectionDataTestId,
} from '../../utils/dataTestIds';
import { clickNextArrowButtonIfMobile, getLocalizedTexts } from '../utils/utils';

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

    const container = page.getByTestId(servicesBlockSectionDataTestId);
    const pageTitle = container.getByText(services);
    const slidesDataTestId = isMobile
        ? servicesBlockItemCarouselDataTestId
        : servicesBlockItemWrapperDataTestId;
    const slide1 = container.getByTestId(slidesDataTestId).nth(0);
    const slide2 = container.getByTestId(slidesDataTestId).nth(1);
    const slide3 = container.getByTestId(slidesDataTestId).nth(2);
    const slide1BackfaceFirstText = container.getByText(webDesign);
    const slide2BackfaceFirstText = container.getByText(contentCreation);
    const slide3BackfaceFirstText = container.getByText(paidSearchCampaigns);

    // renders page title
    await expect(pageTitle).toBeVisible();

    // renders first slide
    await expect(container.getByText(design, { exact: true })).toBeVisible();
    await expect(slide1BackfaceFirstText).toBeHidden();

    // hover over slide to show backface
    await slide1.hover();
    await expect(slide1BackfaceFirstText).toBeVisible();
    await expect(container.getByText(outdoorsAndFlyers)).toBeVisible();
    await expect(container.getByText(contactCard)).toBeVisible();
    await expect(container.getByText(socialMediaTemplates)).toBeVisible();
    await expect(container.getByText(menus)).toBeVisible();

    // hover away to hide backface again
    await pageTitle.hover();
    await expect(slide1BackfaceFirstText).toBeHidden();

    await clickNextArrowButtonIfMobile(isMobile, container);

    // renders second slide
    await expect(container.getByText(socialMediaEn, { exact: true })).toBeVisible();
    await expect(slide2BackfaceFirstText).toBeHidden();

    // hover over slide to show backface
    await slide2.hover();
    await expect(slide2BackfaceFirstText).toBeVisible();
    await expect(container.getByText(marketAnalysis)).toBeVisible();
    await expect(container.getByText(socialMediaStrategyAndManagement)).toBeVisible();
    await expect(container.getByText(paidSocial)).toBeVisible();
    await expect(container.getByText(consulting)).toBeVisible();

    // hover away to hide backface again
    await pageTitle.hover();
    await expect(slide2BackfaceFirstText).toBeHidden();

    await clickNextArrowButtonIfMobile(isMobile, container);

    // renders third slide
    await expect(container.getByText(digital, { exact: true })).toBeVisible();
    await expect(slide2BackfaceFirstText).toBeHidden();

    // hover over slide to show backface
    await slide3.hover();
    await expect(slide3BackfaceFirstText).toBeVisible();
    await expect(container.getByText(opinionPlatformsManagement)).toBeVisible();

    // hover away to hide backface again
    await pageTitle.hover();
    await expect(slide3BackfaceFirstText).toBeHidden();
};
