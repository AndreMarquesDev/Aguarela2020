import { brandsListSectionDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../types/Locale';
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
import {
    brandLogosHeight,
    brandLogosHeightMobile,
    brandLogosWidth,
    brandLogosWidthMobile,
    Viewport,
} from '../utils/variables';
import { defaultFailureThreshold, matchSnapshot } from './matchSnapshot';

const testLogo = (brand: string, instagramUrl: string, isMobile: boolean): void => {
    const isFirefox = Cypress.isBrowser('firefox');
    const logoWidthMobile = isFirefox ? brandLogosWidthMobile + 1 : brandLogosWidthMobile;
    const logoHeightMobile = isFirefox ? brandLogosHeightMobile + 1 : brandLogosHeightMobile;
    const logoWidth = isMobile ? logoWidthMobile : brandLogosWidth;
    const logoHeight = isMobile ? logoHeightMobile : brandLogosHeight;

    cy.imageIsVisible(brandsListSectionDataTestId, `${brand} logo`);
    cy.imageWidthIs(brandsListSectionDataTestId, `${brand} logo`, logoWidth);
    cy.imageHeightIs(brandsListSectionDataTestId, `${brand} logo`, logoHeight);
    cy.getByHref(brandsListSectionDataTestId, instagramUrl);
};

export const brandsListTest = (locale: Locale, viewport: Viewport = Viewport.desktop): void => {
    const { myNetwork } = getLocalizedTexts(locale);
    const isMobile = viewport === Viewport.mobile;
    const isFirefox = Cypress.isBrowser('firefox');
    const snapshotFailureThreshold = isFirefox ? 0.009 : defaultFailureThreshold;

    cy.getByText(brandsListSectionDataTestId, myNetwork).scrollIntoView();

    testLogo('avocado', avocadoInstagramUrl, isMobile);
    testLogo('pernod', pernodWebsiteUrl, isMobile);
    testLogo('tjela', tjelaInstagramUrl, isMobile);
    testLogo('guacamole', guacamoleInstagramUrl, isMobile);
    testLogo('kaffeehaus', kaffeehausInstagramUrl, isMobile);
    testLogo('taste of india', tasteOfIndiaInstagramUrl, isMobile);
    testLogo('icecream roll', icecreamRollInstagramUrl, isMobile);
    testLogo('marialimao', mariaLimaoInstagramUrl, isMobile);
    testLogo('biergarten', biergartenInstagramUrl, isMobile);
    testLogo('trattoria', trattoriaInstagramUrl, isMobile);
    testLogo('a amiga esteticista', aAmigaEsteticistaInstagramUrl, isMobile);
    testLogo('rice me deli', riceMeDeliInstagramUrl, isMobile);
    testLogo('4 patas de 5 estrelas', quatroPatasDe5EstrelasInstagramUrl, isMobile);
    testLogo('rice me', riceMeInstagramUrl, isMobile);
    testLogo('luminous', luminousInstagramUrl, isMobile);
    testLogo('mad mary', madMaryInstagramUrl, isMobile);
    testLogo('harpoon', harpoonLinkedInUrl, isMobile);
    testLogo('bovine', bovineInstagramUrl, isMobile);

    cy.getByText(brandsListSectionDataTestId, myNetwork).scrollIntoView();

    matchSnapshot('brandsList', locale, viewport, snapshotFailureThreshold);
};
