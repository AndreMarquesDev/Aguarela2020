import { contactFormContainerDataTestId } from '../../utils/dataTestIds';
import { FieldTypes } from '../../utils/formValidation';
import { Locale } from '../../types/Locale';
import { getLocalizedTexts } from '../utils/getTexts';
import { matchSnapshot } from './matchSnapshot';

const formSuccessMessageAppearTimeout = 15000;
const FORM_RESET_TIMEOUT = 7500;
const formSuccessMessageDisappearTimeout = FORM_RESET_TIMEOUT + 2000;

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

    matchSnapshot('contactForm_initial', locale);

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

    cy.getByDataTestId(FieldTypes.Name).type('Name');
    cy.isVisible(contactFormContainerDataTestId, pleaseEnterFirstAndLastName);
    cy.getByDataTestId(FieldTypes.Name).type(' Surname');
    cy.isHidden(contactFormContainerDataTestId, pleaseEnterFirstAndLastName);

    cy.getByDataTestId(FieldTypes.Brand).type('Brand');
    cy.getByDataTestId(FieldTypes.Subject).type('Subject');

    cy.getByDataTestId(FieldTypes.Email).type('teste@');
    cy.isVisible(contactFormContainerDataTestId, pleaseEnterValidEmailAddress);
    cy.getByDataTestId(FieldTypes.Email).type('hotmail.com');
    cy.isHidden(contactFormContainerDataTestId, pleaseEnterValidEmailAddress);

    cy.getByDataTestId(FieldTypes.Textarea).type(`Cypress | ${locale} | ${Cypress.browser.name}`);
    cy.isHidden(contactFormContainerDataTestId, pleaseEnterAMessage);

    matchSnapshot('contactForm_filled', locale);

    cy.getByDataTestId('formTestMode').check({ force: true });

    cy.getByDataTestId(contactFormContainerDataTestId).find('.buttonBackground').not('.disabled');
    cy.getByText(contactFormContainerDataTestId, send).click();
    cy.getByDataTestId(contactFormContainerDataTestId).find('.buttonBackground.disabled');
    cy.getByText(
        contactFormContainerDataTestId,
        messageSentSuccessfully,
        formSuccessMessageAppearTimeout
    );

    matchSnapshot('contactForm_success', locale);

    cy.getByDataTestId(contactFormContainerDataTestId).find('.buttonBackground').not('.disabled');

    cy.getByText(
        contactFormContainerDataTestId,
        messageSentSuccessfully,
        formSuccessMessageDisappearTimeout
    ).should('not.exist');

    matchSnapshot('contactForm_reset', locale);
};
