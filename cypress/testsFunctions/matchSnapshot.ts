import { Locale } from '../../types/Locale';
import { Viewport } from '../utils/variables';

const defaultFailureThreshold = 0.001;
const firefoxFailureThreshold = 0.009;

const defaultMatchImageSnapshotOptions = {
    // threshold for entire image
    failureThreshold: defaultFailureThreshold,
    // percent of image or number of pixels
    failureThresholdType: 'percent',
    // threshold for each pixel
    customDiffConfig: { threshold: 0.05 },
    // capture viewport in screenshot
    capture: 'viewport',
};

export const matchSnapshot = (snapshotName: string, locale: Locale, viewport: Viewport): void => {
    const isFirefox = Cypress.isBrowser('firefox');
    const firefoxSuffix = isFirefox ? '_firefox' : '';
    const viewportSuffix = viewport === Viewport.mobile ? '_mobile' : '_desktop';
    const snapshotFileName = `${snapshotName}_${locale}${viewportSuffix}${firefoxSuffix}`;

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);

    cy.matchImageSnapshot(snapshotFileName, {
        ...defaultMatchImageSnapshotOptions,
        failureThreshold: isFirefox ? firefoxFailureThreshold : defaultFailureThreshold,
    });
};
