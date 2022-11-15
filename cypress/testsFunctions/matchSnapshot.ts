import { Locale } from '../../types/Locale';
import { Viewport } from '../utils/variables';

const defaultFailureThreshold = 0.001;
const increasedFailureThreshold = 0.009;
const defaultPixelThreshold = 0.05;
const increasedPixelThreshold = 0.3;

const defaultMatchImageSnapshotOptions = {
    // percent of image or number of pixels
    failureThresholdType: 'percent',
    // capture viewport in screenshot
    capture: 'viewport',
};

export const matchSnapshot = (
    snapshotName: string,
    locale: Locale,
    viewport: Viewport,
    isHigherThreshold = false
): void => {
    const isFirefox = Cypress.isBrowser('firefox');
    const firefoxSuffix = isFirefox ? '_firefox' : '';
    const viewportSuffix = viewport === Viewport.mobile ? '_mobile' : '_desktop';
    const snapshotFileName = `${snapshotName}_${locale}${viewportSuffix}${firefoxSuffix}`;

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);

    cy.matchImageSnapshot(snapshotFileName, {
        ...defaultMatchImageSnapshotOptions,
        // threshold for entire image
        failureThreshold: isHigherThreshold ? increasedFailureThreshold : defaultFailureThreshold,
        // threshold for each pixel
        customDiffConfig: {
            threshold: isHigherThreshold ? increasedPixelThreshold : defaultPixelThreshold,
        },
    });
};
