import { getLocalizedTexts } from '../utils/utils';
import { workflowSectionDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../types/Locale';
import { matchSnapshot } from './matchSnapshot';
import { Viewport } from '../utils/variables';

export const workflowSectionTest = (locale: Locale, viewport: Viewport): void => {
    const {
        contentCreation,
        workflow,
        defineTarget,
        whatIsTheTarget,
        defineGoals,
        whatAreYourGoals,
        platformStrategy,
        whatPlatforms,
        relevantContentCreation,
        paidSocialAndInfluencers,
        promotePostsAndCollaborate,
        insightsAndReports,
        detailedAnalysis,
        optimization,
        improvementsAndUpdatesToTheStrategy,
    } = getLocalizedTexts(locale);

    cy.contains(workflow).scrollIntoView();

    matchSnapshot('workflow', locale, viewport);

    cy.getByText(workflowSectionDataTestId, defineTarget);
    cy.isHidden(workflowSectionDataTestId, whatIsTheTarget);
    cy.getByText(workflowSectionDataTestId, defineTarget).parent().find('.backface').forceHover();
    cy.isVisible(workflowSectionDataTestId, whatIsTheTarget);

    cy.getByText(workflowSectionDataTestId, defineGoals);
    cy.isHidden(workflowSectionDataTestId, whatAreYourGoals);
    cy.getByText(workflowSectionDataTestId, defineGoals).parent().find('.backface').forceHover();
    cy.isVisible(workflowSectionDataTestId, whatAreYourGoals);

    cy.getByText(workflowSectionDataTestId, platformStrategy);
    cy.isHidden(workflowSectionDataTestId, whatPlatforms);
    cy.getByText(workflowSectionDataTestId, platformStrategy)
        .parent()
        .find('.backface')
        .forceHover();
    cy.isVisible(workflowSectionDataTestId, whatPlatforms);

    cy.getByText(workflowSectionDataTestId, contentCreation);
    cy.isHidden(workflowSectionDataTestId, relevantContentCreation);
    cy.getByText(workflowSectionDataTestId, contentCreation)
        .parent()
        .find('.backface')
        .forceHover();
    cy.isVisible(workflowSectionDataTestId, relevantContentCreation);

    cy.getByText(workflowSectionDataTestId, paidSocialAndInfluencers);
    cy.isHidden(workflowSectionDataTestId, promotePostsAndCollaborate);
    cy.getByText(workflowSectionDataTestId, paidSocialAndInfluencers)
        .parent()
        .find('.backface')
        .forceHover();
    cy.isVisible(workflowSectionDataTestId, promotePostsAndCollaborate);

    cy.getByText(workflowSectionDataTestId, insightsAndReports);
    cy.isHidden(workflowSectionDataTestId, detailedAnalysis);
    cy.getByText(workflowSectionDataTestId, insightsAndReports)
        .parent()
        .find('.backface')
        .forceHover();
    cy.isVisible(workflowSectionDataTestId, detailedAnalysis);

    cy.getByText(workflowSectionDataTestId, optimization);
    cy.isHidden(workflowSectionDataTestId, improvementsAndUpdatesToTheStrategy);
    cy.getByText(workflowSectionDataTestId, optimization).parent().find('.backface').forceHover();
    cy.isVisible(workflowSectionDataTestId, improvementsAndUpdatesToTheStrategy);

    cy.contains(workflow).scrollIntoView();

    matchSnapshot('workflow_backface', locale, viewport);
};
