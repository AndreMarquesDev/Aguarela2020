import { aboutMeSectionDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../utils/locales';
import { catarinaSantiagoInstagramUrl } from '../../utils/urls';
import { getLocalizedTexts } from '../utils/getTexts';
import { matchSnapshot } from './matchSnapshot';

export const aboutMeSectionTest = (locale: Locale): void => {
    const {
        about,
        hiMyNameIs,
        withMoreThan,
        theSocialMediaCommunicationStrategy,
        getToKnowMeBetter,
    } = getLocalizedTexts(locale);

    cy.getByText(aboutMeSectionDataTestId, about).scrollIntoView();

    cy.imageIsVisible(aboutMeSectionDataTestId, 'a picture of me, Catarina');
    cy.imageWidthIs(aboutMeSectionDataTestId, 'a picture of me, Catarina', 476);
    cy.imageHeightIs(aboutMeSectionDataTestId, 'a picture of me, Catarina', 584);

    cy.getByText(aboutMeSectionDataTestId, hiMyNameIs);
    cy.getByText(aboutMeSectionDataTestId, withMoreThan);
    cy.getByText(aboutMeSectionDataTestId, theSocialMediaCommunicationStrategy);

    cy.getByText(aboutMeSectionDataTestId, getToKnowMeBetter);
    cy.getByHref(aboutMeSectionDataTestId, catarinaSantiagoInstagramUrl);

    matchSnapshot('aboutMe', locale);
};
