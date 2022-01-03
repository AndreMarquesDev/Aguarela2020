import {
    projectsListNoCarouselDataTestId,
    skillsBlockItemWrapperDataTestId,
} from '../../utils/dataTestIds';
import { textsPt } from '../../utils/texts';
import { urls } from '../utils/selectors';

describe('homepage', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    it('loads', () => {
        cy.url().should('eq', urls.pt.homepage);
    });

    it('loads banner', () => {
        cy.imageIsVisible('.homepageBanner', 'homepage banner');
    });

    it('loads the welcome block', () => {
        cy.contains(textsPt.welcome1);
        cy.contains(textsPt.welcome2);
        cy.contains(textsPt.welcome3);

        cy.contains('Gestão de redes sociais está no meu ADN');
        cy.contains(textsPt.monitorAndOptimizeProcessAndStrategy);
        cy.contains(textsPt.throughStrategicPlanning);
    });

    it('loads the skills block', () => {
        cy.contains(textsPt.skills).scrollIntoView();

        cy.imageIsVisible(
            `[data-testid="${skillsBlockItemWrapperDataTestId}"]`,
            textsPt.socialMediaStrategy
        );
        cy.contains(textsPt.socialMediaStrategy);
        cy.contains(textsPt.makingAuditsAndAnalysis);

        cy.imageIsVisible(
            `[data-testid="${skillsBlockItemWrapperDataTestId}"]`,
            textsPt.socialMediaConsulting
        );
        cy.contains(textsPt.socialMediaConsulting);
        cy.contains(textsPt.weCanHelpYourTeam);

        cy.imageIsVisible(
            `[data-testid="${skillsBlockItemWrapperDataTestId}"]`,
            textsPt.communityManagement
        );
        cy.contains(textsPt.communityManagement);
        cy.contains(textsPt.whenWeSendAMessage);

        cy.imageIsVisible(
            `[data-testid="${skillsBlockItemWrapperDataTestId}"]`,
            textsPt.paidSocialAndSearch
        );
        cy.contains(textsPt.paidSocialAndSearch);
        cy.contains(textsPt.planningAndImplementing);

        cy.imageIsVisible(
            `[data-testid="${skillsBlockItemWrapperDataTestId}"]`,
            textsPt.optimizationAndAnalysis
        );
        cy.contains(textsPt.optimizationAndAnalysis);
        cy.contains(textsPt.measuringResults);

        cy.imageIsVisible(
            `[data-testid="${skillsBlockItemWrapperDataTestId}"]`,
            textsPt.contentCreation
        );
        cy.contains(textsPt.contentCreation);
        cy.contains(textsPt.createAttractiveContent);
    });

    it('loads the workflow block', () => {
        cy.contains(textsPt.workflow).scrollIntoView();

        cy.contains(textsPt.defineTarget);
        cy.contains(textsPt.whatIsTheTarget).should('be.hidden');
        cy.contains(textsPt.defineTarget).parent().find('.backface').invoke('show');
        cy.contains(textsPt.whatIsTheTarget).should('be.visible');

        cy.contains(textsPt.defineGoals);
        cy.contains(textsPt.whatAreYourGoals).should('be.hidden');
        cy.contains(textsPt.defineGoals).parent().find('.backface').invoke('show');
        cy.contains(textsPt.whatAreYourGoals).should('be.visible');

        cy.contains(textsPt.platformStrategy);
        cy.contains(textsPt.whatPlatforms).should('be.hidden');
        cy.contains(textsPt.platformStrategy).parent().find('.backface').invoke('show');
        cy.contains(textsPt.whatPlatforms).should('be.visible');

        cy.contains(textsPt.workflow).next().contains(textsPt.contentCreation);
        cy.contains(textsPt.relevantContentCreation).should('be.hidden');
        cy.contains(textsPt.workflow)
            .next()
            .contains(textsPt.contentCreation)
            .parent()
            .find('.backface')
            .invoke('show');
        cy.contains(textsPt.relevantContentCreation).should('be.visible');

        cy.contains(textsPt.paidSocialAndInfluencers);
        cy.contains(textsPt.promotePostsAndCollaborate).should('be.hidden');
        cy.contains(textsPt.paidSocialAndInfluencers).parent().find('.backface').invoke('show');
        cy.contains(textsPt.promotePostsAndCollaborate).should('be.visible');

        cy.contains(textsPt.insightsAndReports);
        cy.contains(textsPt.detailedAnalysis).should('be.hidden');
        cy.contains(textsPt.insightsAndReports).parent().find('.backface').invoke('show');
        cy.contains(textsPt.detailedAnalysis).should('be.visible');

        cy.contains(textsPt.workflow).next().contains(textsPt.optimization);
        cy.contains(textsPt.improvementsAndUpdatesToTheStrategy).should('be.hidden');
        cy.contains(textsPt.workflow)
            .next()
            .contains(textsPt.optimization)
            .parent()
            .find('.backface')
            .invoke('show');
        cy.contains(textsPt.improvementsAndUpdatesToTheStrategy).should('be.visible');
    });

    it('loads the projects block', () => {
        const ulSelector = `[data-testid="${projectsListNoCarouselDataTestId}"]`;

        cy.contains('section', textsPt.projects).scrollIntoView();

        cy.imageIsVisible(ulSelector, 'tjela logo');
        cy.get(ulSelector).contains('@tudonatjela').should('be.hidden');
        cy.get(`${ulSelector} [alt="tjela logo"]`)
            .parentsUntil('ul', 'li')
            .find('.backface')
            .invoke('show');
        cy.get(ulSelector).contains('@tudonatjela').should('be.visible');
        cy.get(ulSelector)
            .contains(textsPt.socialMediaManagementAndContentCreation)
            .should('be.visible');
        cy.get(ulSelector).contains(`2020 - ${textsPt.present}`).should('be.visible');
        cy.get(ulSelector).contains(`* ${textsPt.inPartnershipWith}`).should('be.visible');

        cy.imageIsVisible(ulSelector, 'kaffeehaus logo');
        cy.get(ulSelector).contains('@kaffeehaus_lisboa').should('be.hidden');
        cy.get(`${ulSelector} [alt="kaffeehaus logo"]`)
            .parentsUntil('ul', 'li')
            .find('.backface')
            .invoke('show');
        cy.get(ulSelector).contains('@kaffeehaus_lisboa').should('be.visible');
        cy.get(ulSelector)
            .contains(textsPt.socialMediaManagementAndContentCreation)
            .should('be.visible');
        cy.get(ulSelector).contains(`2018 - ${textsPt.present}`).should('be.visible');

        cy.imageIsVisible(ulSelector, 'guacamole logo');
        cy.get(ulSelector).contains('@guacamolegmg').should('be.hidden');
        cy.get(`${ulSelector} [alt="guacamole logo"]`)
            .parentsUntil('ul', 'li')
            .find('.backface')
            .invoke('show');
        cy.get(ulSelector).contains('@guacamolegmg').should('be.visible');
        cy.get(ulSelector)
            .contains(textsPt.socialMediaManagementAndContentCreation)
            .should('be.visible');
        cy.get(ulSelector).contains(`2019 - ${textsPt.present}`).should('be.visible');
        cy.get(ulSelector).contains(`* ${textsPt.inPartnershipWith}`).should('be.visible');

        cy.contains(textsPt.seeMore).click();

        cy.url().should('eq', urls.pt.homepage);
    });
});
