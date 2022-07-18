import { brandsListSectionDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../utils/locales';
import {
    avocadoInstagramUrl,
    pernodWebsiteUrl,
    tjelaInstagramUrl,
    guacamoleInstagramUrl,
    kaffeehausInstagramUrl,
    tasteOfIndiaInstagramUrl,
    icecreamRollInstagramUrl,
    mariaLimaoInstagramUrl,
    biergartenInstagramUrl,
    trattoriaInstagramUrl,
    aAmigaEsteticistaInstagramUrl,
    riceMeDeliInstagramUrl,
    quatroPatasDe5EstrelasInstagramUrl,
    riceMeInstagramUrl,
    luminousInstagramUrl,
    madMaryInstagramUrl,
    harpoonLinkedInUrl,
    bovineInstagramUrl,
} from '../../utils/urls';
import { getLocalizedTexts } from '../utils/getTexts';
import { brandLogosHeight, brandLogosWidth } from '../utils/variables';
import { matchSnapshot } from './matchSnapshot';

export const brandsListTest = (locale: Locale): void => {
    const { myNetwork } = getLocalizedTexts(locale);

    cy.getByText(brandsListSectionDataTestId, myNetwork).scrollIntoView();

    cy.imageIsVisible(brandsListSectionDataTestId, 'avocado logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'avocado logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'avocado logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, avocadoInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'pernod logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'pernod logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'pernod logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, pernodWebsiteUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'tjela logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'tjela logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'tjela logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, tjelaInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'guacamole logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'guacamole logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'guacamole logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, guacamoleInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'kaffeehaus logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'kaffeehaus logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'kaffeehaus logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, kaffeehausInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'taste of india logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'taste of india logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'taste of india logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, tasteOfIndiaInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'icecream roll logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'icecream roll logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'icecream roll logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, icecreamRollInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'marialimao logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'marialimao logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'marialimao logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, mariaLimaoInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'biergarten logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'biergarten logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'biergarten logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, biergartenInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'trattoria logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'trattoria logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'trattoria logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, trattoriaInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'a amiga esteticista logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'a amiga esteticista logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'a amiga esteticista logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, aAmigaEsteticistaInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'rice me deli logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'rice me deli logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'rice me deli logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, riceMeDeliInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, '4 patas de 5 estrelas logo');
    cy.imageWidthIs(brandsListSectionDataTestId, '4 patas de 5 estrelas logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, '4 patas de 5 estrelas logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, quatroPatasDe5EstrelasInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'rice me logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'rice me logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'rice me logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, riceMeInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'luminous logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'luminous logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'luminous logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, luminousInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'mad mary logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'mad mary logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'mad mary logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, madMaryInstagramUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'harpoon logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'harpoon logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'harpoon logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, harpoonLinkedInUrl);

    cy.imageIsVisible(brandsListSectionDataTestId, 'bovine logo');
    cy.imageWidthIs(brandsListSectionDataTestId, 'bovine logo', brandLogosWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, 'bovine logo', brandLogosHeight);
    cy.getByHref(brandsListSectionDataTestId, bovineInstagramUrl);

    matchSnapshot('brandsList', locale);
};
