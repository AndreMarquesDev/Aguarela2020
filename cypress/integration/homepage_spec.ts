import {
    homepageBannerContainerDataTestId,
    projectsListDoubleSectionDataTestId,
    projectsListNoCarouselDataTestId,
    projectsListSectionDataTestId,
    skillsBlockItemWrapperDataTestId,
    skillsBlockSectionDataTestId,
    welcomeSectionDataTestId,
    workflowSectionDataTestId,
} from '../../utils/dataTestIds';
import { textsPt } from '../../utils/texts';
import { urls } from '../utils/selectors';

const {
    welcome1,
    welcome2,
    welcome3,
    monitorAndOptimizeProcessAndStrategy,
    throughStrategicPlanning,
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
    projects,
    socialMediaManagementAndContentCreation,
    present,
    inPartnershipWith,
    seeMore,
} = textsPt;

describe('homepage', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    it('loads', () => {
        cy.urlIsEqualTo(urls.pt.homepage);
    });

    it('loads the banner', () => {
        cy.imageIsVisible(homepageBannerContainerDataTestId, 'homepage banner');
    });

    it('loads the welcome block', () => {
        cy.getByText(welcomeSectionDataTestId, welcome1);
        cy.getByText(welcomeSectionDataTestId, welcome2);
        cy.getByText(welcomeSectionDataTestId, welcome3);

        cy.getByText(welcomeSectionDataTestId, 'Gestão de redes sociais está no meu ADN');
        cy.getByText(welcomeSectionDataTestId, monitorAndOptimizeProcessAndStrategy);
        cy.getByText(welcomeSectionDataTestId, throughStrategicPlanning);
    });

    it('loads the skills block', () => {
        cy.getByText(skillsBlockSectionDataTestId, skills).scrollIntoView();

        cy.imageIsVisible(skillsBlockItemWrapperDataTestId, socialMediaStrategy);
        cy.getByText(skillsBlockSectionDataTestId, socialMediaStrategy);
        cy.getByText(skillsBlockSectionDataTestId, makingAuditsAndAnalysis);

        cy.imageIsVisible(skillsBlockItemWrapperDataTestId, socialMediaConsulting);
        cy.getByText(skillsBlockSectionDataTestId, socialMediaConsulting);
        cy.getByText(skillsBlockSectionDataTestId, weCanHelpYourTeam);

        cy.imageIsVisible(skillsBlockItemWrapperDataTestId, communityManagement);
        cy.getByText(skillsBlockSectionDataTestId, communityManagement);
        cy.getByText(skillsBlockSectionDataTestId, whenWeSendAMessage);

        cy.imageIsVisible(skillsBlockItemWrapperDataTestId, paidSocialAndSearch);
        cy.getByText(skillsBlockSectionDataTestId, paidSocialAndSearch);
        cy.getByText(skillsBlockSectionDataTestId, planningAndImplementing);

        cy.imageIsVisible(skillsBlockItemWrapperDataTestId, optimizationAndAnalysis);
        cy.getByText(skillsBlockSectionDataTestId, optimizationAndAnalysis);
        cy.getByText(skillsBlockSectionDataTestId, measuringResults);

        cy.imageIsVisible(skillsBlockItemWrapperDataTestId, contentCreation);
        cy.getByText(skillsBlockSectionDataTestId, contentCreation);
        cy.getByText(skillsBlockSectionDataTestId, createAttractiveContent);
    });

    it('loads the workflow block', () => {
        cy.contains(workflow).scrollIntoView();

        cy.getByText(workflowSectionDataTestId, defineTarget);
        cy.isHidden(workflowSectionDataTestId, whatIsTheTarget);
        cy.getByText(workflowSectionDataTestId, defineTarget)
            .parent()
            .find('.backface')
            .forceHover();
        cy.isVisible(workflowSectionDataTestId, whatIsTheTarget);

        cy.getByText(workflowSectionDataTestId, defineGoals);
        cy.isHidden(workflowSectionDataTestId, whatAreYourGoals);
        cy.getByText(workflowSectionDataTestId, defineGoals)
            .parent()
            .find('.backface')
            .forceHover();
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
        cy.getByText(workflowSectionDataTestId, optimization)
            .parent()
            .find('.backface')
            .forceHover();
        cy.isVisible(workflowSectionDataTestId, improvementsAndUpdatesToTheStrategy);
    });

    it('loads the projects block', () => {
        cy.getByText(projectsListSectionDataTestId, projects).scrollIntoView();

        cy.imageIsVisible(projectsListSectionDataTestId, 'tjela logo');
        cy.isHidden(projectsListSectionDataTestId, '@tudonatjela');
        cy.getByDataTestId(projectsListNoCarouselDataTestId)
            .find('[alt="tjela logo"]')
            .parentsUntil('ul', 'li')
            .find('.backface')
            .forceHover();
        cy.isVisible(projectsListSectionDataTestId, '@tudonatjela');
        cy.isVisible(projectsListSectionDataTestId, socialMediaManagementAndContentCreation);
        cy.isVisible(projectsListSectionDataTestId, `2020 - ${present}`);
        cy.isVisible(projectsListSectionDataTestId, `* ${inPartnershipWith}`);

        cy.imageIsVisible(projectsListSectionDataTestId, 'kaffeehaus logo');
        cy.isHidden(projectsListSectionDataTestId, '@kaffeehaus_lisboa');
        cy.getByDataTestId(projectsListNoCarouselDataTestId)
            .find('[alt="kaffeehaus logo"]')
            .parentsUntil('ul', 'li')
            .find('.backface')
            .forceHover();
        cy.isVisible(projectsListSectionDataTestId, '@kaffeehaus_lisboa');
        cy.isVisible(projectsListSectionDataTestId, socialMediaManagementAndContentCreation);
        cy.isVisible(projectsListSectionDataTestId, `2018 - ${present}`);

        cy.imageIsVisible(projectsListSectionDataTestId, 'guacamole logo');
        cy.isHidden(projectsListSectionDataTestId, '@guacamolegmg');
        cy.getByDataTestId(projectsListNoCarouselDataTestId)
            .find('[alt="guacamole logo"]')
            .parentsUntil('ul', 'li')
            .find('.backface')
            .forceHover();
        cy.isVisible(projectsListSectionDataTestId, '@guacamolegmg');
        cy.isVisible(projectsListSectionDataTestId, socialMediaManagementAndContentCreation);
        cy.isVisible(projectsListSectionDataTestId, `2019 - ${present}`);
        cy.isVisible(projectsListSectionDataTestId, `* ${inPartnershipWith}`);

        cy.getByText(projectsListSectionDataTestId, seeMore).click();
        cy.getByDataTestId(projectsListDoubleSectionDataTestId);
        cy.urlIsEqualTo(urls.pt.projects);
    });
});
