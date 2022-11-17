import {
    projectsListDoubleSectionDataTestId,
    projectItemTouchDivDataTestId,
    nukaCarouselNextButtonDataTestId,
} from '../../utils/dataTestIds';
import { Locale } from '../../types/Locale';
import {
    tjelaInstagramUrl,
    tasteOfIndiaInstagramUrl,
    kaffeehausInstagramUrl,
    avocadoInstagramUrl,
    guacamoleInstagramUrl,
    mariaLimaoIndustriaCriativaUrl,
    jamesonInstagramUrl,
    beefeaterWebsiteUrl,
    biergartenInstagramUrl,
    madMaryInstagramUrl,
    bovineInstagramUrl,
    icecreamRollInstagramUrl,
    riceMeInstagramUrl,
    riceMeDeliInstagramUrl,
    harpoonLinkedInUrl,
    catarinaSantiagoInstagramUrl,
    quatroPatasDe5EstrelasInstagramUrl,
    luminousInstagramUrl,
    aAmigaEsteticistaIndustriaCriativaUrl,
    anaroIndustriaCriativaUrl,
} from '../../utils/urls';
import { clickNextArrowButtonIfMobile, getLocalizedTexts } from '../utils/utils';
import {
    projectsListDoubleCarouselImagesWidth,
    projectsListDoubleCarouselImagesHeight,
    Viewport,
    projectsListDoubleCarouselImagesWidthMobile,
    projectsListDoubleCarouselImagesHeightMobile,
    projectsListDoubleCarouselImagesHeightFirefoxMobile,
    projectsListDoubleCarouselImagesWidthFirefoxMobile,
} from '../utils/variables';
import { matchSnapshot } from './matchSnapshot';

const testSlide = (
    locale: Locale,
    isMobile: boolean,
    brand: string,
    handle: string,
    instagramUrl: string,
    title: string,
    year: string,
    isInPartnership: boolean
): void => {
    const isFirefox = Cypress.isBrowser('firefox');
    const { inPartnershipWith } = getLocalizedTexts(locale);

    const container = projectsListDoubleSectionDataTestId;

    const slideWidthMobile = isFirefox
        ? projectsListDoubleCarouselImagesWidthFirefoxMobile
        : projectsListDoubleCarouselImagesWidthMobile;
    const slideImageWidth = isMobile ? slideWidthMobile : projectsListDoubleCarouselImagesWidth;

    const slideHeightMobile = isFirefox
        ? projectsListDoubleCarouselImagesHeightFirefoxMobile
        : projectsListDoubleCarouselImagesHeightMobile;
    const slideImageHeight = isMobile ? slideHeightMobile : projectsListDoubleCarouselImagesHeight;

    cy.imageInCurrentSlideIsVisible(container, brand);
    cy.imageWidthIs(container, brand, slideImageWidth);
    cy.imageHeightIs(container, brand, slideImageHeight);
    cy.isHidden(container, handle);
    cy.getBackfaceProjectsListDouble(container, brand).forceHover();
    cy.getByHref(container, instagramUrl);
    cy.isTextInBackfaceVisible(container, brand, handle);
    cy.isTextInBackfaceVisible(container, brand, title);

    if (year) {
        cy.isTextInBackfaceVisible(container, brand, year);
    }

    if (isInPartnership) {
        cy.isTextInBackfaceVisible(container, brand, `* ${inPartnershipWith}`);
    }
};

export const projectsListDoubleSectionTest = (locale: Locale, viewport: Viewport): void => {
    const {
        projects,
        socialMediaAndContentCreation,
        present,
        socialMediaManagement,
        contentCreation,
        consultingAndContentCreation,
        socialMediaAndPaidSocial,
    } = getLocalizedTexts(locale);

    const isMobile = viewport === Viewport.mobile;

    const container = projectsListDoubleSectionDataTestId;
    const numberOfActiveSlides = isMobile ? 1 : 3;
    const numberOfVisibleSlides = isMobile ? 2 : 6;

    cy.getByText(container, projects).scrollIntoView();

    matchSnapshot('projectsListDouble', locale, viewport);

    cy.getByDataTestId(container)
        .find('.slide-visible')
        .should('have.length', numberOfActiveSlides);
    cy.getByDataTestId(container)
        .find(`.slide-visible [data-testid="${projectItemTouchDivDataTestId}"]`)
        .should('have.length', numberOfVisibleSlides);

    testSlide(
        locale,
        isMobile,
        'tjela',
        '@tudonatjela',
        tjelaInstagramUrl,
        socialMediaAndContentCreation,
        `2020 - ${present}`,
        true
    );
    testSlide(
        locale,
        isMobile,
        'taste of india',
        '@tasteofindia',
        tasteOfIndiaInstagramUrl,
        socialMediaAndContentCreation,
        `2020 - ${present}`,
        true
    );

    clickNextArrowButtonIfMobile(isMobile, container, projects);

    testSlide(
        locale,
        isMobile,
        'kaffeehaus',
        '@kaffeehaus_lisboa',
        kaffeehausInstagramUrl,
        socialMediaAndContentCreation,
        `2018 - ${present}`,
        false
    );
    testSlide(
        locale,
        isMobile,
        'avocado',
        '@avocadohouselisbon',
        avocadoInstagramUrl,
        socialMediaAndContentCreation,
        `2020 - ${present}`,
        true
    );

    clickNextArrowButtonIfMobile(isMobile, container, projects);

    testSlide(
        locale,
        isMobile,
        'guacamole',
        '@guacamolegmg',
        guacamoleInstagramUrl,
        socialMediaAndContentCreation,
        `2019 - ${present}`,
        true
    );
    testSlide(
        locale,
        isMobile,
        'marialimao',
        '@bebemarialimao',
        mariaLimaoIndustriaCriativaUrl,
        socialMediaAndContentCreation,
        '2019 - 2020',
        false
    );

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    testSlide(
        locale,
        isMobile,
        'jameson',
        '@jamesonportugal',
        jamesonInstagramUrl,
        socialMediaManagement,
        `2019 - ${present}`,
        false
    );
    testSlide(
        locale,
        isMobile,
        'beefeater',
        '@beefeater',
        beefeaterWebsiteUrl,
        socialMediaManagement,
        `2019 - ${present}`,
        false
    );

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    testSlide(
        locale,
        isMobile,
        'biergarten',
        '@biergarten',
        biergartenInstagramUrl,
        socialMediaAndContentCreation,
        '2019',
        false
    );
    testSlide(
        locale,
        isMobile,
        'mad mary',
        '@madmarycuisine',
        madMaryInstagramUrl,
        socialMediaAndContentCreation,
        '2019',
        false
    );

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    testSlide(
        locale,
        isMobile,
        'bovine',
        '@bovinelisboa',
        bovineInstagramUrl,
        socialMediaAndContentCreation,
        '2020',
        false
    );
    testSlide(
        locale,
        isMobile,
        'icecream roll',
        '@icecreamroll.pt',
        icecreamRollInstagramUrl,
        socialMediaAndContentCreation,
        '2018',
        false
    );

    cy.getByText(container, projects).scrollIntoView();

    matchSnapshot('projectsListDouble_slide_4_to_6', locale, viewport);

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    testSlide(
        locale,
        isMobile,
        'rice me',
        '@ricemerestaurante',
        riceMeInstagramUrl,
        socialMediaAndContentCreation,
        '2020',
        false
    );
    testSlide(
        locale,
        isMobile,
        'rice me deli',
        '@ricemedeli',
        riceMeDeliInstagramUrl,
        socialMediaAndContentCreation,
        '2020',
        false
    );

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    testSlide(
        locale,
        isMobile,
        'harpoon',
        '@harpoonjobs',
        harpoonLinkedInUrl,
        socialMediaAndContentCreation,
        '2020 - 2021',
        false
    );
    testSlide(
        locale,
        isMobile,
        'catarina santiago',
        '@catarinasantiago',
        catarinaSantiagoInstagramUrl,
        contentCreation,
        '',
        false
    );

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    testSlide(
        locale,
        isMobile,
        '4 patas de 5 estrelas',
        '@4patasde5estrelas',
        quatroPatasDe5EstrelasInstagramUrl,
        socialMediaManagement,
        `2020 - ${present}`,
        false
    );
    testSlide(
        locale,
        isMobile,
        'luminous',
        '@becomeluminous',
        luminousInstagramUrl,
        socialMediaAndPaidSocial,
        '2020',
        true
    );

    cy.getByText(container, projects).scrollIntoView();

    matchSnapshot('projectsListDouble_slide_7_to_9', locale, viewport);

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    testSlide(
        locale,
        isMobile,
        'a amiga esteticista',
        '@aamigaesteticista',
        aAmigaEsteticistaIndustriaCriativaUrl,
        consultingAndContentCreation,
        `2017 - ${present}`,
        false
    );
    testSlide(
        locale,
        isMobile,
        'AnaRo',
        '@anaro.artistpage',
        anaroIndustriaCriativaUrl,
        consultingAndContentCreation,
        '2019',
        false
    );

    cy.getByText(container, projects).scrollIntoView();

    matchSnapshot('projectsListDouble_slide_10_to_11', locale, viewport);

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();
};
