import { contactBlockSectionDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../types/Locale';
import { aguarelaDigitalEmail } from '../../utils/urls';
import { getLocalizedTexts } from '../utils/getTexts';
import { matchSnapshot } from './matchSnapshot';

export const contactBlockTest = (locale: Locale): void => {
    const {
        contactMe1,
        contactMe2,
        contactMe3,
        needHelpWithYourBusiness,
        sendMeAnEmail,
        iAmAvailableToAdvise,
    } = getLocalizedTexts(locale);

    cy.getByText(contactBlockSectionDataTestId, contactMe1);
    cy.getByText(contactBlockSectionDataTestId, contactMe2);
    cy.getByText(contactBlockSectionDataTestId, contactMe3);
    cy.getByText(contactBlockSectionDataTestId, needHelpWithYourBusiness);
    cy.getByText(contactBlockSectionDataTestId, sendMeAnEmail);
    cy.getByText(contactBlockSectionDataTestId, iAmAvailableToAdvise);
    cy.getByText(contactBlockSectionDataTestId, aguarelaDigitalEmail);
    cy.getByHref(contactBlockSectionDataTestId, `mailto:${aguarelaDigitalEmail}`);

    matchSnapshot('contactBlock', locale);
};
