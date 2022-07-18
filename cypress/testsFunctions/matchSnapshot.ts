import { Locale } from '../../utils/locales';

export const matchSnapshot = (snapshotName: string, locale: Locale): void => {
    const isFirefox = Cypress.isBrowser('firefox');
    const snapshotFileName = `${snapshotName}_${locale}${isFirefox ? '_firefox' : ''}`;

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);

    cy.matchImageSnapshot(snapshotFileName);
};
