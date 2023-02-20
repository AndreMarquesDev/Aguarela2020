import { Page, expect, Locator } from '@playwright/test';
import { Locale } from '../../types/Locale';
import {
    contactFormContainerDataTestId,
    contactFormErrorMessageHiddenDataTestId,
    contactFormErrorMessageVisibleDataTestId,
} from '../../utils/dataTestIds';
import { getLocalizedTexts } from '../utils/utils';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';

const isErrorMessageHidden = async (element: Locator): Promise<void> => {
    await expect(element).toHaveAttribute('data-testid', contactFormErrorMessageHiddenDataTestId);
};

const isErrorMessageVisible = async (element: Locator): Promise<void> => {
    await expect(element).toHaveAttribute('data-testid', contactFormErrorMessageVisibleDataTestId);
};

export const contactFormTest = async (
    page: Page,
    locale: Locale,
    browserName: PlaywrightBrowserName
): Promise<void> => {
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
    const container = page.getByTestId(contactFormContainerDataTestId);
    const nameField = container.getByLabel(name);
    const brandField = container.getByLabel(brandBusiness);
    const emailField = container.getByLabel(email);
    const subjectField = container.getByLabel(subject);
    const messageField = container.getByLabel(message);
    const nameErrorMessageElement = container.getByText(pleaseEnterFirstAndLastName);
    const emailErrorMessageElement = container.getByText(pleaseEnterValidEmailAddress);
    const messageErrorMessageElement = container.getByText(pleaseEnterAMessage);
    const submitButton = container.getByRole('button', { name: send });
    const successMessage = container.getByText(messageSentSuccessfully);

    const invalidName = 'Name';
    const validName = `${invalidName} Surname`;
    const invalidEmail = 'teste@';
    const validEmail = `${invalidEmail}hotmail.com`;
    const validMessage = `E2E | ${locale} | ${browserName}`;

    // error messages are all hidden by default
    await isErrorMessageHidden(nameErrorMessageElement);
    await isErrorMessageHidden(emailErrorMessageElement);
    await isErrorMessageHidden(messageErrorMessageElement);

    // error messages become visible after trying to submit an empty form
    await submitButton.click();
    await isErrorMessageVisible(nameErrorMessageElement);
    await isErrorMessageVisible(emailErrorMessageElement);
    await isErrorMessageVisible(messageErrorMessageElement);

    // reset error messages
    await nameField.fill(validName);
    await emailField.fill(validEmail);
    await messageField.fill(validMessage);
    await isErrorMessageHidden(nameErrorMessageElement);
    await isErrorMessageHidden(emailErrorMessageElement);
    await isErrorMessageHidden(messageErrorMessageElement);

    // starts filling the form

    // name field only has one name, which should trigger an error message
    await nameField.fill(invalidName);
    // focus a different element so that error message can be displayed
    await brandField.focus();
    await isErrorMessageVisible(nameErrorMessageElement);

    await nameField.fill(validName);
    // name error message is hidden again because the field already has two names
    await brandField.focus();
    await isErrorMessageHidden(nameErrorMessageElement);

    // brand field is filled
    await brandField.fill('Brand');

    // email field is wrongly filled
    await emailField.fill(invalidEmail);
    // focus a different element so that error message can be displayed
    await brandField.focus();
    await isErrorMessageVisible(emailErrorMessageElement);

    await emailField.fill(validEmail);
    // email error message is hidden again because the field already has a proper email address
    await brandField.focus();
    await isErrorMessageHidden(emailErrorMessageElement);

    // subject field is filled
    await subjectField.fill('Subject');

    // error message is triggered because field has no value
    await messageField.fill('');
    await brandField.focus();
    await isErrorMessageVisible(messageErrorMessageElement);

    await messageField.fill(validMessage);
    // message error message is hidden after filling the field
    await brandField.focus();
    await isErrorMessageHidden(messageErrorMessageElement);

    // submit form
    await submitButton.click();

    // success message is displayed
    await successMessage.waitFor({ state: 'visible', timeout: 7500 });

    // form resets
    await successMessage.waitFor({ state: 'hidden', timeout: 7500 });
};
