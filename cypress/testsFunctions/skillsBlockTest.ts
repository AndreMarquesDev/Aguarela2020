import { Locale } from '../../utils/locales';
import {
    skillsBlockSectionDataTestId,
    skillsBlockItemWrapperDataTestId,
    skillsBlockItemCarouselDataTestId,
    nukaCarouselNextButtonDataTestId,
} from '../../utils/dataTestIds';
import { skillsBlockImagesWidth, skillsBlockImagesHeight, Viewport } from '../utils/variables';
import { getLocalizedTexts } from '../utils/getTexts';
import { matchSnapshot } from './matchSnapshot';

const clickNextArrowButtonIfMobile = (isMobile: boolean, skillsText: string): void => {
    const isFirefox = Cypress.isBrowser('firefox');

    if (isMobile) {
        cy.getByDataTestIdParent(
            skillsBlockSectionDataTestId,
            nukaCarouselNextButtonDataTestId
        ).click({ force: isFirefox });

        cy.getByText(skillsBlockSectionDataTestId, skillsText).scrollIntoView();
    }
};

export const skillsBlockTest = (locale: Locale, viewport: Viewport): void => {
    const {
        skills,
        socialMediaStrategy,
        makingAuditsAndAnalysis,
        socialMediaConsulting,
        weCanHelpYourTeam,
        communityManagement,
        whenWeSendAMessage,
        paidSocialAndSearch,
        planningAndImplementing,
        optimizationAndAnalysis,
        measuringResults,
        contentCreation,
        createAttractiveContent,
    } = getLocalizedTexts(locale);
    const isFirefox = Cypress.isBrowser('firefox');
    const isMobile = viewport === Viewport.mobile;
    const skillsBlockItemDataTestId = isMobile
        ? skillsBlockItemCarouselDataTestId
        : skillsBlockItemWrapperDataTestId;

    cy.getByText(skillsBlockSectionDataTestId, skills).scrollIntoView();

    cy.imageIsVisible(skillsBlockItemDataTestId, socialMediaStrategy);
    cy.imageWidthIs(skillsBlockItemDataTestId, socialMediaStrategy, skillsBlockImagesWidth);
    cy.imageHeightIs(skillsBlockItemDataTestId, socialMediaStrategy, skillsBlockImagesHeight);
    cy.getByText(skillsBlockSectionDataTestId, socialMediaStrategy);
    cy.getByText(skillsBlockSectionDataTestId, makingAuditsAndAnalysis);

    clickNextArrowButtonIfMobile(isMobile, skills);

    cy.imageIsVisible(skillsBlockItemDataTestId, socialMediaConsulting);
    cy.imageWidthIs(skillsBlockItemDataTestId, socialMediaConsulting, skillsBlockImagesWidth);
    cy.imageHeightIs(skillsBlockItemDataTestId, socialMediaConsulting, skillsBlockImagesHeight);
    cy.getByText(skillsBlockSectionDataTestId, socialMediaConsulting);
    cy.getByText(skillsBlockSectionDataTestId, weCanHelpYourTeam);

    clickNextArrowButtonIfMobile(isMobile, skills);

    cy.imageIsVisible(skillsBlockItemDataTestId, communityManagement);
    cy.imageWidthIs(skillsBlockItemDataTestId, communityManagement, skillsBlockImagesWidth);
    cy.imageHeightIs(skillsBlockItemDataTestId, communityManagement, skillsBlockImagesHeight);
    cy.getByText(skillsBlockSectionDataTestId, communityManagement);
    cy.getByText(skillsBlockSectionDataTestId, whenWeSendAMessage);

    clickNextArrowButtonIfMobile(isMobile, skills);

    cy.imageIsVisible(skillsBlockItemDataTestId, paidSocialAndSearch, isFirefox);
    cy.imageWidthIs(skillsBlockItemDataTestId, paidSocialAndSearch, skillsBlockImagesWidth);
    cy.imageHeightIs(skillsBlockItemDataTestId, paidSocialAndSearch, skillsBlockImagesHeight);
    cy.getByText(skillsBlockSectionDataTestId, paidSocialAndSearch);
    cy.getByText(skillsBlockSectionDataTestId, planningAndImplementing);

    clickNextArrowButtonIfMobile(isMobile, skills);

    cy.imageIsVisible(skillsBlockItemDataTestId, optimizationAndAnalysis, isFirefox);
    cy.imageWidthIs(skillsBlockItemDataTestId, optimizationAndAnalysis, skillsBlockImagesWidth);
    cy.imageHeightIs(skillsBlockItemDataTestId, optimizationAndAnalysis, skillsBlockImagesHeight);
    cy.getByText(skillsBlockSectionDataTestId, optimizationAndAnalysis);
    cy.getByText(skillsBlockSectionDataTestId, measuringResults);

    clickNextArrowButtonIfMobile(isMobile, skills);

    cy.imageIsVisible(skillsBlockItemDataTestId, contentCreation, isFirefox);
    cy.imageWidthIs(skillsBlockItemDataTestId, contentCreation, skillsBlockImagesWidth);
    cy.imageHeightIs(skillsBlockItemDataTestId, contentCreation, skillsBlockImagesHeight);
    cy.getByText(skillsBlockSectionDataTestId, contentCreation);
    cy.getByText(skillsBlockSectionDataTestId, createAttractiveContent);

    clickNextArrowButtonIfMobile(isMobile, skills);

    matchSnapshot('skillsBlock', locale, viewport);
};
