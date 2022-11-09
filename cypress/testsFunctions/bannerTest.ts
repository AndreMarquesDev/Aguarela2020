import { homepageBannerContainerDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../types/Locale';
import {
    bannerHeight,
    bannerHeightMobile,
    bannerWidth,
    bannerWidthMobile,
    Viewport,
} from '../utils/variables';
import { matchSnapshot } from './matchSnapshot';

export const bannerTest = (locale: Locale, viewport: Viewport): void => {
    const isMobile = viewport === Viewport.mobile;
    const bannerImageWidth = isMobile ? bannerWidthMobile : bannerWidth;
    const bannerImageHeight = isMobile ? bannerHeightMobile : bannerHeight;

    cy.imageIsVisible(homepageBannerContainerDataTestId, 'homepage banner');

    cy.imageWidthIsBetween(homepageBannerContainerDataTestId, 'homepage banner', bannerImageWidth);
    cy.imageHeightIs(homepageBannerContainerDataTestId, 'homepage banner', bannerImageHeight);

    matchSnapshot('banner', locale, viewport);
};
