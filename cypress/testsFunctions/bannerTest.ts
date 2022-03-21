import { homepageBannerContainerDataTestId } from '../../utils/dataTestIds';
import { bannerHeight, bannerWidth } from '../utils/variables';

export const bannerTest = (): void => {
    cy.imageIsVisible(homepageBannerContainerDataTestId, 'homepage banner');

    cy.imageWidthIsBetween(homepageBannerContainerDataTestId, 'homepage banner', bannerWidth);
    cy.imageHeightIs(homepageBannerContainerDataTestId, 'homepage banner', bannerHeight);
};
