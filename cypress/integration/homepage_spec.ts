import {
    aboutMeSectionDataTestId,
    brandsListSectionDataTestId,
    contactBlockSectionDataTestId,
    footerDataTestId,
    headerDataTestId,
    homepageBannerContainerDataTestId,
    homepageLogoLinkDataTestId,
    letsWorkSectionDataTestId,
    projectsListDoubleSectionDataTestId,
    projectsListNoCarouselDataTestId,
    projectsListSectionDataTestId,
    servicesBlockSectionDataTestId,
    skillsBlockItemWrapperDataTestId,
    skillsBlockSectionDataTestId,
    welcomeSectionDataTestId,
    workflowSectionDataTestId,
} from '../../utils/dataTestIds';
import { textsEn, textsPt } from '../../utils/texts';
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
    myNetwork,
    letsWork,
    letsWorkDescription,
    contact,
    footerInfo,
    about,
    services,
} = textsPt;

const { projects: projectsEn, contact: contactEn, about: aboutEn, services: servicesEn } = textsEn;

describe('homepage', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    it('loads', () => {
        cy.urlIsEqualTo(urls.pt.homepage);
    });

    it('renders the header and navigates properly', () => {
        cy.imageIsVisible(headerDataTestId, 'Logo');

        cy.getByText(headerDataTestId, about).click();
        cy.getByDataTestId(aboutMeSectionDataTestId);
        cy.urlIsEqualTo(urls.pt.about);
        cy.getByDataTestId(homepageLogoLinkDataTestId).click();
        cy.getByDataTestId(homepageBannerContainerDataTestId);
        cy.urlIsEqualTo(urls.pt.homepage);

        cy.getByText(headerDataTestId, projects).click();
        cy.getByDataTestId(projectsListDoubleSectionDataTestId);
        cy.urlIsEqualTo(urls.pt.projects);
        cy.getByDataTestId(homepageLogoLinkDataTestId).click();
        cy.getByDataTestId(homepageBannerContainerDataTestId);
        cy.urlIsEqualTo(urls.pt.homepage);

        cy.getByText(headerDataTestId, services).click();
        cy.getByDataTestId(servicesBlockSectionDataTestId);
        cy.urlIsEqualTo(urls.pt.services);
        cy.getByDataTestId(homepageLogoLinkDataTestId).click();
        cy.getByDataTestId(homepageBannerContainerDataTestId);
        cy.urlIsEqualTo(urls.pt.homepage);

        cy.getByText(headerDataTestId, contact).click();
        cy.getByDataTestId(contactBlockSectionDataTestId);
        cy.urlIsEqualTo(urls.pt.contact);
        cy.getByDataTestId(homepageLogoLinkDataTestId).click();
        cy.getByDataTestId(homepageBannerContainerDataTestId);
        cy.urlIsEqualTo(urls.pt.homepage);

        cy.getByText(headerDataTestId, 'en').click();
        cy.getByText(headerDataTestId, aboutEn);
        cy.getByText(headerDataTestId, projectsEn);
        cy.getByText(headerDataTestId, servicesEn);
        cy.getByText(headerDataTestId, contactEn);
        cy.urlIsEqualTo(urls.en.homepage);
        cy.getByText(headerDataTestId, 'pt').click();
        cy.getByText(headerDataTestId, about);
        cy.getByText(headerDataTestId, projects);
        cy.getByText(headerDataTestId, services);
        cy.getByText(headerDataTestId, contact);
        cy.urlIsEqualTo(urls.pt.homepage);
    });

    it('renders the banner', () => {
        cy.imageIsVisible(homepageBannerContainerDataTestId, 'homepage banner');

        const viewportWidth = 1920;
        const viewportHeight = 1080;
        const navHeight = 160;
        const bannerHeight = viewportHeight * 0.9 - navHeight;

        cy.viewport(viewportWidth, viewportHeight);
        cy.getByDataTestId(homepageBannerContainerDataTestId)
            .find('[alt="homepage banner"]')
            .and($img => {
                expect(($img[0] as HTMLImageElement).naturalWidth).to.equal(viewportWidth);
                expect(($img[0] as HTMLImageElement).scrollHeight).to.equal(bannerHeight);
            });
    });

    it('renders the welcome section', () => {
        cy.getByText(welcomeSectionDataTestId, welcome1);
        cy.getByText(welcomeSectionDataTestId, welcome2);
        cy.getByText(welcomeSectionDataTestId, welcome3);

        cy.getByText(welcomeSectionDataTestId, 'Gestão de redes sociais está no meu ADN');
        cy.getByText(welcomeSectionDataTestId, monitorAndOptimizeProcessAndStrategy);
        cy.getByText(welcomeSectionDataTestId, throughStrategicPlanning);
    });

    it('renders the skills section', () => {
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

    it('renders the workflow section', () => {
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

    it('renders the projects section', () => {
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

    it('renders the brands list section', () => {
        cy.getByText(brandsListSectionDataTestId, myNetwork).scrollIntoView();

        cy.imageIsVisible(brandsListSectionDataTestId, 'guacamole logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'avocado logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'pernod logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'tjela logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'guacamole logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'kaffeehaus logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'taste of india logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'icecream roll logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'marialimao logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'biergarten logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'trattoria logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'a amiga esteticista logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'rice me deli logo');
        cy.imageIsVisible(brandsListSectionDataTestId, '4 patas de 5 estrelas logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'rice me logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'luminous logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'mad mary logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'harpoon logo');
        cy.imageIsVisible(brandsListSectionDataTestId, 'bovine logo');
    });

    it("renders the let's work list section", () => {
        cy.getByText(letsWorkSectionDataTestId, letsWork).scrollIntoView();

        cy.getByText(letsWorkSectionDataTestId, letsWorkDescription);

        cy.getByText(letsWorkSectionDataTestId, contact).click();
        cy.getByDataTestId(contactBlockSectionDataTestId);
        cy.urlIsEqualTo(urls.pt.contact);
    });

    it('renders the footer', () => {
        cy.getByText(footerDataTestId, `${footerInfo} André Marques`).scrollIntoView();

        cy.getByDataTestId(footerDataTestId).find('[href="https://www.andremarquesdev.com"]');
        cy.getByDataTestId(footerDataTestId).find(
            '[aria-label="Aguarela instagram"][href="https://www.instagram.com/aguareladigital"]'
        );
        cy.getByDataTestId(footerDataTestId).find(
            '[aria-label="Aguarela facebook"][href="https://www.facebook.com/aguareladigitalagency"]'
        );

        cy.getByDataTestId(footerDataTestId).find('[aria-label="Go to contact page"]').click();
        cy.getByDataTestId(contactBlockSectionDataTestId);
        cy.urlIsEqualTo(urls.pt.contact);

        cy.visit('/');
    });
});
