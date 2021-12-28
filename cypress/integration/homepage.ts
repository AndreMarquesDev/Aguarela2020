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
        cy.imageIsVisible('homepage banner');
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

        cy.imageIsVisible(textsPt.socialMediaStrategy);
        cy.contains(textsPt.socialMediaStrategy);
        cy.contains(textsPt.makingAuditsAndAnalysis);

        cy.imageIsVisible(textsPt.socialMediaConsulting);
        cy.contains(textsPt.socialMediaConsulting);
        cy.contains(textsPt.weCanHelpYourTeam);

        cy.imageIsVisible(textsPt.communityManagement);
        cy.contains(textsPt.communityManagement);
        cy.contains(textsPt.whenWeSendAMessage);

        cy.imageIsVisible(textsPt.paidSocialAndSearch);
        cy.contains(textsPt.paidSocialAndSearch);
        cy.contains(textsPt.planningAndImplementing);

        cy.imageIsVisible(textsPt.optimizationAndAnalysis);
        cy.contains(textsPt.optimizationAndAnalysis);
        cy.contains(textsPt.measuringResults);

        cy.imageIsVisible(textsPt.contentCreation);
        cy.contains(textsPt.contentCreation);
        cy.contains(textsPt.createAttractiveContent);
    });
});
