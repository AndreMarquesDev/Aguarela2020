import { contactBlockSectionDataTestId, letsWorkSectionDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../types/Locale';
import { getLocalizedTexts } from '../utils/utils';
import { urls } from '../utils/selectors';
import { Viewport } from '../utils/variables';
import { matchSnapshot } from './matchSnapshot';

export const letsWorkSectionTest = (locale: Locale, viewport: Viewport): void => {
    const isFirefox = Cypress.isBrowser('firefox');
    const { letsWork, letsWorkDescription, contact } = getLocalizedTexts(locale);

    cy.getByText(letsWorkSectionDataTestId, letsWork).scrollIntoView();

    matchSnapshot('letsWork', locale, viewport, isFirefox);

    cy.getByText(letsWorkSectionDataTestId, letsWorkDescription);

    cy.getByText(letsWorkSectionDataTestId, contact).click();
    cy.getByDataTestId(contactBlockSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].contact);
};
