import {
    servicesBlockSectionDataTestId,
    servicesBlockItemWrapperDataTestId,
    servicesBlockItemCarouselDataTestId,
} from '../../utils/dataTestIds';
import { Locale } from '../../types/Locale';
import { clickNextArrowButtonIfMobile, getLocalizedTexts } from '../utils/utils';
import { matchSnapshot } from './matchSnapshot';
import { Viewport } from '../utils/variables';

export const servicesSectionTest = (locale: Locale, viewport: Viewport): void => {
    const isMobile = viewport === Viewport.mobile;
    const slideDataTestId = isMobile
        ? servicesBlockItemCarouselDataTestId
        : servicesBlockItemWrapperDataTestId;
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

    cy.getByText(servicesBlockSectionDataTestId, services).scrollIntoView();

    matchSnapshot('services', locale, viewport);

    cy.getByText(servicesBlockSectionDataTestId, design);
    cy.isHidden(servicesBlockSectionDataTestId, `- ${webDesign}`);
    cy.getByText(servicesBlockSectionDataTestId, design).next().forceHover();
    cy.isVisible(servicesBlockSectionDataTestId, `- ${webDesign}`);
    cy.isVisible(servicesBlockSectionDataTestId, `- ${outdoorsAndFlyers}`);
    cy.isVisible(servicesBlockSectionDataTestId, `- ${contactCard}`);
    cy.isVisible(servicesBlockSectionDataTestId, `- ${socialMediaTemplates}`);
    cy.isVisible(servicesBlockSectionDataTestId, `- ${menus}`);

    clickNextArrowButtonIfMobile(isMobile, servicesBlockSectionDataTestId, services);

    cy.get(`[data-testid="${slideDataTestId}"] > p`).contains(socialMediaEn);
    cy.isHidden(servicesBlockSectionDataTestId, `- ${contentCreation}`);
    cy.get(`[data-testid="${slideDataTestId}"] > p`).contains(socialMediaEn).next().forceHover();
    cy.isVisible(servicesBlockSectionDataTestId, `- ${contentCreation}`);
    cy.isVisible(servicesBlockSectionDataTestId, `- ${marketAnalysis}`);
    cy.isVisible(servicesBlockSectionDataTestId, `- ${socialMediaStrategyAndManagement}`);
    cy.isVisible(servicesBlockSectionDataTestId, `- ${paidSocial}`);
    cy.isVisible(servicesBlockSectionDataTestId, `- ${consulting}`);

    clickNextArrowButtonIfMobile(isMobile, servicesBlockSectionDataTestId, services);

    cy.getByText(servicesBlockSectionDataTestId, digital);
    cy.isHidden(servicesBlockSectionDataTestId, `- ${paidSearchCampaigns}`);
    cy.getByText(servicesBlockSectionDataTestId, digital).next().forceHover();
    cy.isVisible(servicesBlockSectionDataTestId, `- ${paidSearchCampaigns}`);
    cy.isVisible(servicesBlockSectionDataTestId, `- ${opinionPlatformsManagement}`);

    matchSnapshot('service_backface', locale, viewport);
};
