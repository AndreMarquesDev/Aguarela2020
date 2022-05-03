import { Locale } from '../../utils/locales';
import {
    skillsBlockSectionDataTestId,
    skillsBlockItemWrapperDataTestId,
} from '../../utils/dataTestIds';
import { skillsBlockImagesWidth, skillsBlockImagesHeight } from '../utils/variables';
import { getLocalizedTexts } from '../utils/getTexts';

export const skillsBlockTest = (locale: Locale): void => {
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

    cy.getByText(skillsBlockSectionDataTestId, skills).scrollIntoView();

    cy.imageIsVisible(skillsBlockItemWrapperDataTestId, socialMediaStrategy);
    cy.imageWidthIs(skillsBlockItemWrapperDataTestId, socialMediaStrategy, skillsBlockImagesWidth);
    cy.imageHeightIs(
        skillsBlockItemWrapperDataTestId,
        socialMediaStrategy,
        skillsBlockImagesHeight
    );
    cy.getByText(skillsBlockSectionDataTestId, socialMediaStrategy);
    cy.getByText(skillsBlockSectionDataTestId, makingAuditsAndAnalysis);

    cy.imageIsVisible(skillsBlockItemWrapperDataTestId, socialMediaConsulting);
    cy.imageWidthIs(
        skillsBlockItemWrapperDataTestId,
        socialMediaConsulting,
        skillsBlockImagesWidth
    );
    cy.imageHeightIs(
        skillsBlockItemWrapperDataTestId,
        socialMediaConsulting,
        skillsBlockImagesHeight
    );
    cy.getByText(skillsBlockSectionDataTestId, socialMediaConsulting);
    cy.getByText(skillsBlockSectionDataTestId, weCanHelpYourTeam);

    cy.imageIsVisible(skillsBlockItemWrapperDataTestId, communityManagement);
    cy.imageWidthIs(skillsBlockItemWrapperDataTestId, communityManagement, skillsBlockImagesWidth);
    cy.imageHeightIs(
        skillsBlockItemWrapperDataTestId,
        communityManagement,
        skillsBlockImagesHeight
    );
    cy.getByText(skillsBlockSectionDataTestId, communityManagement);
    cy.getByText(skillsBlockSectionDataTestId, whenWeSendAMessage);

    cy.imageIsVisible(skillsBlockItemWrapperDataTestId, paidSocialAndSearch, isFirefox);
    cy.imageWidthIs(skillsBlockItemWrapperDataTestId, paidSocialAndSearch, skillsBlockImagesWidth);
    cy.imageHeightIs(
        skillsBlockItemWrapperDataTestId,
        paidSocialAndSearch,
        skillsBlockImagesHeight
    );
    cy.getByText(skillsBlockSectionDataTestId, paidSocialAndSearch);
    cy.getByText(skillsBlockSectionDataTestId, planningAndImplementing);

    cy.imageIsVisible(skillsBlockItemWrapperDataTestId, optimizationAndAnalysis, isFirefox);
    cy.imageWidthIs(
        skillsBlockItemWrapperDataTestId,
        optimizationAndAnalysis,
        skillsBlockImagesWidth
    );
    cy.imageHeightIs(
        skillsBlockItemWrapperDataTestId,
        optimizationAndAnalysis,
        skillsBlockImagesHeight
    );
    cy.getByText(skillsBlockSectionDataTestId, optimizationAndAnalysis);
    cy.getByText(skillsBlockSectionDataTestId, measuringResults);

    cy.imageIsVisible(skillsBlockItemWrapperDataTestId, contentCreation, isFirefox);
    cy.imageWidthIs(skillsBlockItemWrapperDataTestId, contentCreation, skillsBlockImagesWidth);
    cy.imageHeightIs(skillsBlockItemWrapperDataTestId, contentCreation, skillsBlockImagesHeight);
    cy.getByText(skillsBlockSectionDataTestId, contentCreation);
    cy.getByText(skillsBlockSectionDataTestId, createAttractiveContent);
};
