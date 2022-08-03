import { aboutMeSectionDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../utils/locales';
import { catarinaSantiagoInstagramUrl } from '../../utils/urls';
import { getLocalizedTexts } from '../utils/getTexts';
import { Viewport } from '../utils/variables';
import { matchSnapshot } from './matchSnapshot';

export const aboutMeSectionTest = (locale: Locale, viewport: Viewport = Viewport.desktop): void => {
    const {
        about,
        hiMyNameIs,
        withMoreThan,
        theSocialMediaCommunicationStrategy,
        getToKnowMeBetter,
    } = getLocalizedTexts(locale);

    const isMobile = viewport === Viewport.mobile;
    const isFirefox = Cypress.isBrowser('firefox');

    const pictureWidthMobile = isFirefox ? 338 : 335;
    const pictureHeightMobile = isFirefox ? 415 : 411;
    const pictureWidth = isMobile ? pictureWidthMobile : 476;
    const pictureHeight = isMobile ? pictureHeightMobile : 584;

    cy.getByText(aboutMeSectionDataTestId, about).scrollIntoView();

    cy.imageIsVisible(aboutMeSectionDataTestId, 'a picture of me, Catarina');
    cy.imageWidthIs(aboutMeSectionDataTestId, 'a picture of me, Catarina', pictureWidth);
    cy.imageHeightIs(aboutMeSectionDataTestId, 'a picture of me, Catarina', pictureHeight);

    cy.getByText(aboutMeSectionDataTestId, hiMyNameIs);
    cy.getByText(aboutMeSectionDataTestId, withMoreThan);
    cy.getByText(aboutMeSectionDataTestId, theSocialMediaCommunicationStrategy);

    cy.getByText(aboutMeSectionDataTestId, getToKnowMeBetter);
    cy.getByHref(aboutMeSectionDataTestId, catarinaSantiagoInstagramUrl);

    matchSnapshot('aboutMe', locale, viewport);
};
