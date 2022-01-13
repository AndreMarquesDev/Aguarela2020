import { contactFormContainerDataTestId } from '../../utils/dataTestIds';
import { FieldTypes } from '../../utils/formValidation';
import { Locale } from '../../utils/locales';
import { getLocalizedTexts } from '../utils/getTexts';

export const contactFormTest = (locale: Locale): void => {
    const {
        name,
        brandBusiness,
        email,
        subject,
        message,
        send,
        pleaseEnterFirstAndLastName,
        pleaseEnterValidEmailAddress,
        pleaseEnterAMessage,
        messageSentSuccessfully,
    } = getLocalizedTexts(locale);

    cy.getByDataTestId(contactFormContainerDataTestId).scrollIntoView();

    cy.getByText(contactFormContainerDataTestId, `${name} *`);
    cy.getByText(contactFormContainerDataTestId, brandBusiness);
    cy.getByText(contactFormContainerDataTestId, `${email} *`);
    cy.getByText(contactFormContainerDataTestId, subject);
    cy.getByText(contactFormContainerDataTestId, `${message} *`);
    cy.getByText(contactFormContainerDataTestId, send);

    cy.isHidden(contactFormContainerDataTestId, pleaseEnterFirstAndLastName);
    cy.isHidden(contactFormContainerDataTestId, pleaseEnterValidEmailAddress);
    cy.isHidden(contactFormContainerDataTestId, pleaseEnterAMessage);
    cy.getByText(contactFormContainerDataTestId, send).click();
    cy.isVisible(contactFormContainerDataTestId, pleaseEnterFirstAndLastName);
    cy.isVisible(contactFormContainerDataTestId, pleaseEnterValidEmailAddress);
    cy.isVisible(contactFormContainerDataTestId, pleaseEnterAMessage);

    cy.getByDataTestId(FieldTypes.Name).type('André');
    cy.isVisible(contactFormContainerDataTestId, pleaseEnterFirstAndLastName);
    cy.getByDataTestId(FieldTypes.Name).type(' Marques');
    cy.isHidden(contactFormContainerDataTestId, pleaseEnterFirstAndLastName);

    cy.getByDataTestId(FieldTypes.Brand).type('Brand');
    cy.getByDataTestId(FieldTypes.Subject).type('Subject');

    cy.getByDataTestId(FieldTypes.Email).type('andregm_7@');
    cy.isVisible(contactFormContainerDataTestId, pleaseEnterValidEmailAddress);
    cy.getByDataTestId(FieldTypes.Email).type('hotmail.com');
    cy.isHidden(contactFormContainerDataTestId, pleaseEnterValidEmailAddress);

    cy.getByDataTestId(FieldTypes.Textarea).type('This is a message');
    cy.isHidden(contactFormContainerDataTestId, pleaseEnterAMessage);

    cy.getByDataTestId(contactFormContainerDataTestId).find('.buttonBackground').not('.disabled');
    cy.getByText(contactFormContainerDataTestId, send).click();
    cy.getByDataTestId(contactFormContainerDataTestId).find('.buttonBackground.disabled');
    cy.getByText(contactFormContainerDataTestId, messageSentSuccessfully);
    cy.getByDataTestId(contactFormContainerDataTestId).find('.buttonBackground').not('.disabled');

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(8000);

    cy.getByText(contactFormContainerDataTestId, messageSentSuccessfully).should('not.exist');
};