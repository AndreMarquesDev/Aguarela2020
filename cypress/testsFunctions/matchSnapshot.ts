import { Locale } from '../../utils/locales';
import { Viewport } from '../utils/variables';

export const matchSnapshot = (
    snapshotName: string,
    locale: Locale,
    viewport: Viewport = Viewport.desktop
): void => {
    const isFirefox = Cypress.isBrowser('firefox');
    const firefoxSuffix = isFirefox ? '_firefox' : '';
    // eslint-disable-next-line capitalized-comments
    // TODO add desktop suffix
    const mobileSuffix = viewport === Viewport.mobile ? '_mobile' : '';
    const snapshotFileName = `${snapshotName}_${locale}${mobileSuffix}${firefoxSuffix}`;

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);

    cy.matchImageSnapshot(snapshotFileName);
};
