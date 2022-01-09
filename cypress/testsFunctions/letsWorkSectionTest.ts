import { contactBlockSectionDataTestId, letsWorkSectionDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../utils/locales';
import { getLocalizedTexts } from '../utils/getTexts';
import { urls } from '../utils/selectors';

export const letsWorkSectionTest = (locale: Locale): void => {
    const { letsWork, letsWorkDescription, contact } = getLocalizedTexts(locale);

    cy.getByText(letsWorkSectionDataTestId, letsWork).scrollIntoView();

    cy.getByText(letsWorkSectionDataTestId, letsWorkDescription);

    cy.getByText(letsWorkSectionDataTestId, contact).click();
    cy.getByDataTestId(contactBlockSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].contact);
};
