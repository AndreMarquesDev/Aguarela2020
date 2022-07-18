import {
    projectsListDoubleSectionDataTestId,
    projectItemTouchDivDataTestId,
    nukaCarouselNextButtonDataTestId,
} from '../../utils/dataTestIds';
import { Locale } from '../../utils/locales';
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
import { getLocalizedTexts } from '../utils/getTexts';
import {
    projectsListDoubleCarouselImagesWidth,
    projectsListDoubleCarouselImagesHeight,
} from '../utils/variables';
import { matchSnapshot } from './matchSnapshot';

export const projectsLisDoubleSectionTest = (locale: Locale): void => {
    const {
        projects,
        socialMediaAndContentCreation,
        present,
        inPartnershipWith,
        socialMediaManagement,
        contentCreation,
        consultingAndContentCreation,
        socialMediaAndPaidSocial,
    } = getLocalizedTexts(locale);

    const container = projectsListDoubleSectionDataTestId;

    cy.getByText(container, projects).scrollIntoView();

    matchSnapshot('projectsListDouble', locale);

    cy.getByDataTestId(container).find('.slide-visible').should('have.length', 3);
    cy.getByDataTestId(container)
        .find(`.slide-visible [data-testid="${projectItemTouchDivDataTestId}"]`)
        .should('have.length', 6);

    cy.imageInCurrentSlideIsVisible(container, 'tjela');
    cy.imageWidthIs(container, 'tjela', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'tjela', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@tudonatjela');
    cy.getBackfaceProjectsListDouble(container, 'tjela').forceHover();
    cy.getByHref(container, tjelaInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'tjela', '@tudonatjela');
    cy.isTextInBackfaceVisible(container, 'tjela', socialMediaAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'tjela', `2020 - ${present}`);
    cy.isTextInBackfaceVisible(container, 'tjela', `* ${inPartnershipWith}`);

    cy.imageInCurrentSlideIsVisible(container, 'taste of india');
    cy.imageWidthIs(container, 'taste of india', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'taste of india', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@tasteofindia');
    cy.getBackfaceProjectsListDouble(container, 'taste of india').forceHover();
    cy.getByHref(container, tasteOfIndiaInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'taste of india', '@tasteofindia');
    cy.isTextInBackfaceVisible(container, 'taste of india', socialMediaAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'taste of india', `2020 - ${present}`);
    cy.isTextInBackfaceVisible(container, 'taste of india', `* ${inPartnershipWith}`);

    cy.imageInCurrentSlideIsVisible(container, 'kaffeehaus');
    cy.imageWidthIs(container, 'kaffeehaus', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'kaffeehaus', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@kaffeehaus_lisboa');
    cy.getBackfaceProjectsListDouble(container, 'kaffeehaus').forceHover();
    cy.getByHref(container, kaffeehausInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'kaffeehaus', '@kaffeehaus_lisboa');
    cy.isTextInBackfaceVisible(container, 'kaffeehaus', socialMediaAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'kaffeehaus', `2018 - ${present}`);

    cy.imageInCurrentSlideIsVisible(container, 'avocado');
    cy.imageWidthIs(container, 'avocado', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'avocado', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@avocadohouselisbon');
    cy.getBackfaceProjectsListDouble(container, 'avocado').forceHover();
    cy.getByHref(container, avocadoInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'avocado', '@avocadohouselisbon');
    cy.isTextInBackfaceVisible(container, 'avocado', socialMediaAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'avocado', `2020 - ${present}`);
    cy.isTextInBackfaceVisible(container, 'avocado', `* ${inPartnershipWith}`);

    cy.imageInCurrentSlideIsVisible(container, 'guacamole');
    cy.imageWidthIs(container, 'guacamole', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'guacamole', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@guacamolegmg');
    cy.getBackfaceProjectsListDouble(container, 'guacamole').forceHover();
    cy.getByHref(container, guacamoleInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'guacamole', '@guacamolegmg');
    cy.isTextInBackfaceVisible(container, 'guacamole', socialMediaAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'guacamole', `2019 - ${present}`);
    cy.isTextInBackfaceVisible(container, 'guacamole', `* ${inPartnershipWith}`);

    cy.imageInCurrentSlideIsVisible(container, 'marialimao');
    cy.imageWidthIs(container, 'marialimao', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'marialimao', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@bebemarialimao');
    cy.getBackfaceProjectsListDouble(container, 'marialimao').forceHover();
    cy.getByHref(container, mariaLimaoIndustriaCriativaUrl);
    cy.isTextInBackfaceVisible(container, 'marialimao', '@bebemarialimao');
    cy.isTextInBackfaceVisible(container, 'marialimao', socialMediaAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'marialimao', '2019 - 2020');

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    cy.imageInCurrentSlideIsVisible(container, 'jameson');
    cy.imageWidthIs(container, 'jameson', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'jameson', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@jamesonportugal');
    cy.getBackfaceProjectsListDouble(container, 'jameson').forceHover();
    cy.getByHref(container, jamesonInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'jameson', '@jamesonportugal');
    cy.isTextInBackfaceVisible(container, 'jameson', socialMediaManagement);
    cy.isTextInBackfaceVisible(container, 'jameson', `2019 - ${present}`);

    cy.imageInCurrentSlideIsVisible(container, 'beefeater');
    cy.imageWidthIs(container, 'beefeater', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'beefeater', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@beefeater');
    cy.getBackfaceProjectsListDouble(container, 'beefeater').forceHover();
    cy.getByHref(container, beefeaterWebsiteUrl);
    cy.isTextInBackfaceVisible(container, 'beefeater', '@beefeater');
    cy.isTextInBackfaceVisible(container, 'beefeater', socialMediaManagement);
    cy.isTextInBackfaceVisible(container, 'beefeater', `2019 - ${present}`);

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    cy.imageInCurrentSlideIsVisible(container, 'biergarten');
    cy.imageWidthIs(container, 'biergarten', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'biergarten', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@biergarten');
    cy.getBackfaceProjectsListDouble(container, 'biergarten').forceHover();
    cy.getByHref(container, biergartenInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'biergarten', '@biergarten');
    cy.isTextInBackfaceVisible(container, 'biergarten', socialMediaAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'biergarten', '2019');

    cy.imageInCurrentSlideIsVisible(container, 'mad mary');
    cy.imageWidthIs(container, 'mad mary', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'mad mary', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@madmarycuisine');
    cy.getBackfaceProjectsListDouble(container, 'mad mary').forceHover();
    cy.getByHref(container, madMaryInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'mad mary', '@madmarycuisine');
    cy.isTextInBackfaceVisible(container, 'mad mary', socialMediaAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'mad mary', '2019');

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    cy.imageInCurrentSlideIsVisible(container, 'bovine');
    cy.imageWidthIs(container, 'bovine', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'bovine', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@bovinelisboa');
    cy.getBackfaceProjectsListDouble(container, 'bovine').forceHover();
    cy.getByHref(container, bovineInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'bovine', '@bovinelisboa');
    cy.isTextInBackfaceVisible(container, 'bovine', socialMediaAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'bovine', '2020');

    cy.imageInCurrentSlideIsVisible(container, 'icecream roll');
    cy.imageWidthIs(container, 'icecream roll', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'icecream roll', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@icecreamroll.pt');
    cy.getBackfaceProjectsListDouble(container, 'icecream roll').forceHover();
    cy.getByHref(container, icecreamRollInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'icecream roll', '@icecreamroll.pt');
    cy.isTextInBackfaceVisible(container, 'icecream roll', socialMediaAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'icecream roll', '2018');

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    cy.imageInCurrentSlideIsVisible(container, 'rice me');
    cy.imageWidthIs(container, 'rice me', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'rice me', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@ricemerestaurante');
    cy.getBackfaceProjectsListDouble(container, 'rice me').forceHover();
    cy.getByHref(container, riceMeInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'rice me', '@ricemerestaurante');
    cy.isTextInBackfaceVisible(container, 'rice me', socialMediaAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'rice me', '2020');

    cy.imageInCurrentSlideIsVisible(container, 'rice me deli');
    cy.imageWidthIs(container, 'rice me deli', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'rice me deli', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@ricemedeli');
    cy.getBackfaceProjectsListDouble(container, 'rice me deli').forceHover();
    cy.getByHref(container, riceMeDeliInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'rice me deli', '@ricemedeli');
    cy.isTextInBackfaceVisible(container, 'rice me deli', socialMediaAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'rice me deli', '2020');

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    cy.imageInCurrentSlideIsVisible(container, 'harpoon');
    cy.imageWidthIs(container, 'harpoon', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'harpoon', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@harpoonjobs');
    cy.getBackfaceProjectsListDouble(container, 'harpoon').forceHover();
    cy.getByHref(container, harpoonLinkedInUrl);
    cy.isTextInBackfaceVisible(container, 'harpoon', '@harpoonjobs');
    cy.isTextInBackfaceVisible(container, 'harpoon', socialMediaAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'harpoon', '2020 - 2021');

    cy.imageInCurrentSlideIsVisible(container, 'catarina santiago');
    cy.imageWidthIs(container, 'catarina santiago', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'catarina santiago', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@catarinasantiago');
    cy.getBackfaceProjectsListDouble(container, 'catarina santiago').forceHover();
    cy.getByHref(container, catarinaSantiagoInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'catarina santiago', '@catarinasantiago');
    cy.isTextInBackfaceVisible(container, 'catarina santiago', contentCreation);

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    cy.imageInCurrentSlideIsVisible(container, '4 patas de 5 estrelas');
    cy.imageWidthIs(container, '4 patas de 5 estrelas', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, '4 patas de 5 estrelas', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@4patasde5estrelas');
    cy.getBackfaceProjectsListDouble(container, '4 patas de 5 estrelas').forceHover();
    cy.getByHref(container, quatroPatasDe5EstrelasInstagramUrl);
    cy.isTextInBackfaceVisible(container, '4 patas de 5 estrelas', '@4patasde5estrelas');
    cy.isTextInBackfaceVisible(container, '4 patas de 5 estrelas', socialMediaManagement);
    cy.isTextInBackfaceVisible(container, '4 patas de 5 estrelas', `2020 - ${present}`);

    cy.imageInCurrentSlideIsVisible(container, 'luminous');
    cy.imageWidthIs(container, 'luminous', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'luminous', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@becomeluminous');
    cy.getBackfaceProjectsListDouble(container, 'luminous').forceHover();
    cy.getByHref(container, luminousInstagramUrl);
    cy.isTextInBackfaceVisible(container, 'luminous', '@becomeluminous');
    cy.isTextInBackfaceVisible(container, 'luminous', socialMediaAndPaidSocial);
    cy.isTextInBackfaceVisible(container, 'luminous', '2020');
    cy.isTextInBackfaceVisible(container, 'luminous', `* ${inPartnershipWith}`);

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();

    cy.imageInCurrentSlideIsVisible(container, 'a amiga esteticista');
    cy.imageWidthIs(container, 'a amiga esteticista', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'a amiga esteticista', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@aamigaesteticista');
    cy.getBackfaceProjectsListDouble(container, 'a amiga esteticista').forceHover();
    cy.getByHref(container, aAmigaEsteticistaIndustriaCriativaUrl);
    cy.isTextInBackfaceVisible(container, 'a amiga esteticista', '@aamigaesteticista');
    cy.isTextInBackfaceVisible(container, 'a amiga esteticista', consultingAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'a amiga esteticista', `2017 - ${present}`);

    cy.imageInCurrentSlideIsVisible(container, 'AnaRo');
    cy.imageWidthIs(container, 'AnaRo', projectsListDoubleCarouselImagesWidth);
    cy.imageHeightIs(container, 'AnaRo', projectsListDoubleCarouselImagesHeight);
    cy.isHidden(container, '@anaro.artistpage');
    cy.getBackfaceProjectsListDouble(container, 'AnaRo').forceHover();
    cy.getByHref(container, anaroIndustriaCriativaUrl);
    cy.isTextInBackfaceVisible(container, 'AnaRo', '@anaro.artistpage');
    cy.isTextInBackfaceVisible(container, 'AnaRo', consultingAndContentCreation);
    cy.isTextInBackfaceVisible(container, 'AnaRo', '2019');

    cy.getByDataTestId(nukaCarouselNextButtonDataTestId).click();
};
