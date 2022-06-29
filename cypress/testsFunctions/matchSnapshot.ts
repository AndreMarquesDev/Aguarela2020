import { footerDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../utils/locales';
import { getLocalizedTexts } from '../utils/getTexts';
import { defaultViewportHeight, defaultViewportWidth } from '../utils/variables';

export const matchSnapshot = (snapshotName: string, locale: Locale): void => {
    const isFirefox = Cypress.isBrowser('firefox');
    const snapshotFileName = `${snapshotName}_${locale}${isFirefox ? '_firefox' : ''}`;
    const { footerInfo } = getLocalizedTexts(locale);

    cy.viewport(defaultViewportWidth, defaultViewportHeight);
    cy.getByText(footerDataTestId, `${footerInfo} André Marques`).scrollIntoView();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);

    cy.get('html').invoke('css', 'scrollBehavior', 'auto');

    cy.matchImageSnapshot(snapshotFileName);

    cy.get('html').invoke('css', 'scrollBehavior', 'smooth');
};
