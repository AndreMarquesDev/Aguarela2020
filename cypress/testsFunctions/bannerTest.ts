import { homepageBannerContainerDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../utils/locales';
import { bannerHeight, bannerWidth } from '../utils/variables';
import { matchSnapshot } from './matchSnapshot';

export const bannerTest = (locale: Locale): void => {
    cy.imageIsVisible(homepageBannerContainerDataTestId, 'homepage banner');

    cy.imageWidthIsBetween(homepageBannerContainerDataTestId, 'homepage banner', bannerWidth);
    cy.imageHeightIs(homepageBannerContainerDataTestId, 'homepage banner', bannerHeight);

    matchSnapshot('banner', locale);
};
