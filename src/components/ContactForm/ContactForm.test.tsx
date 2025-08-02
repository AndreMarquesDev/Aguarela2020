import type {
    RenderResult,
} from '@testing-library/react';
import {
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Locale } from '../../types/Locale';
import {
    contactFormContainerDataTestId,
    contactFormErrorMessageHiddenDataTestId,
    contactFormErrorMessageVisibleDataTestId,
} from '../../utils/dataTestIds';
import { FieldTypes } from '../../utils/formValidation';
import { initializeAxiosMockAdapter } from '../../utils/jest/axiosMockAdapter';
import { MockProviders } from '../../utils/jest/MockProviders';
import { textsEn, textsPt } from '../../utils/texts';
import { ContactForm, FORM_RESET_TIMEOUT } from './ContactForm';
import '@testing-library/jest-dom';

const renderComponent = (language: Locale = Locale.Pt): RenderResult => {
    return render(
        <MockProviders language={language}>
            <ContactForm />
        </MockProviders>,
    );
};

describe('<ContactForm />', () => {
    test('renders properly', () => {
        renderComponent();

        const hiddenErrorMessages = screen.getAllByTestId(contactFormErrorMessageHiddenDataTestId);

        expect(hiddenErrorMessages.length).toBe(5);
        expect(screen.getByText(textsPt.send)).toBeInTheDocument();

        expect(screen.getByTestId(contactFormContainerDataTestId)).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        renderComponent(Locale.En);

        const hiddenErrorMessages = screen.getAllByTestId(contactFormErrorMessageHiddenDataTestId);

        expect(hiddenErrorMessages.length).toBe(5);
        expect(screen.getByText(textsEn.send)).toBeInTheDocument();

        expect(screen.getByTestId(contactFormContainerDataTestId)).toMatchSnapshot();
    });

    test('displays error messages in required fields on submit with empty fields', async () => {
        const user = userEvent.setup();

        renderComponent();

        const submitButton = screen.getByText(textsPt.send);

        await user.click(submitButton);

        const errorMessages = await screen.findAllByTestId(
            contactFormErrorMessageVisibleDataTestId,
        );

        expect(errorMessages.length).toBe(3);

        expect(screen.getByTestId(contactFormContainerDataTestId)).toMatchSnapshot();
    });

    test('lets fields be properly filled', async () => {
        const user = userEvent.setup();

        renderComponent();

        const nameInput = screen.getByTestId(FieldTypes.Name);
        const brandInput = screen.getByTestId(FieldTypes.Brand);
        const emailInput = screen.getByTestId(FieldTypes.Email);
        const subjectInput = screen.getByTestId(FieldTypes.Subject);
        const textareaField = screen.getByTestId(FieldTypes.Textarea);

        await user.type(nameInput, 'André Marques');
        await user.type(brandInput, 'Brand');
        await user.type(emailInput, 'email@email.com');
        await user.type(subjectInput, 'Subject');
        await user.type(textareaField, 'Textarea field');

        await waitFor(() => {
            // eslint-disable-next-line testing-library/no-wait-for-snapshot
            expect(screen.getByTestId(contactFormContainerDataTestId)).toMatchSnapshot();
        });
    });

    test('submits the form successfully', async () => {
        initializeAxiosMockAdapter();

        const user = userEvent.setup();

        renderComponent();

        const nameInput = screen.getByTestId(FieldTypes.Name);
        const brandInput = screen.getByTestId(FieldTypes.Brand);
        const emailInput = screen.getByTestId(FieldTypes.Email);
        const subjectInput = screen.getByTestId(FieldTypes.Subject);
        const textareaField = screen.getByTestId(FieldTypes.Textarea);

        await user.type(nameInput, 'André Marques');
        await user.type(brandInput, 'Brand');
        await user.type(emailInput, 'email@email.com');
        await user.type(subjectInput, 'Subject');
        await user.type(textareaField, 'Textarea field');

        const submitButton = screen.getByText(textsPt.send);

        await user.click(submitButton);

        const container = await screen.findByTestId('contactForm_container');

        expect(container).toMatchSnapshot();
    });

    test(
        'resets the form after it was successfully submitted',
        async () => {
            initializeAxiosMockAdapter();

            const user = userEvent.setup();

            renderComponent();

            const nameInput = screen.getByTestId(FieldTypes.Name);
            const brandInput = screen.getByTestId(FieldTypes.Brand);
            const emailInput = screen.getByTestId(FieldTypes.Email);
            const subjectInput = screen.getByTestId(FieldTypes.Subject);
            const textareaField = screen.getByTestId(FieldTypes.Textarea);

            await user.type(nameInput, 'André Marques');
            await user.type(brandInput, 'Brand');
            await user.type(emailInput, 'email@email.com');
            await user.type(subjectInput, 'Subject');
            await user.type(textareaField, 'Textarea field');

            const submitButton = screen.getByText(textsPt.send);

            await user.click(submitButton);

            const successMessage = await screen.findByText(textsPt.messageSentSuccessfully);

            expect(successMessage).toBeInTheDocument();

            await waitForElementToBeRemoved(successMessage, {
                timeout: FORM_RESET_TIMEOUT,
            });

            const container = await screen.findByTestId('contactForm_container');

            expect(container).toMatchSnapshot();
        },
        FORM_RESET_TIMEOUT + 3000,
    );

    test('shows an error message in case the POST request fails', async () => {
        initializeAxiosMockAdapter(0, false);

        const user = userEvent.setup();

        renderComponent();

        const nameInput = screen.getByTestId(FieldTypes.Name);
        const brandInput = screen.getByTestId(FieldTypes.Brand);
        const emailInput = screen.getByTestId(FieldTypes.Email);
        const subjectInput = screen.getByTestId(FieldTypes.Subject);
        const textareaField = screen.getByTestId(FieldTypes.Textarea);

        await user.type(nameInput, 'André Marques');
        await user.type(brandInput, 'Brand');
        await user.type(emailInput, 'email@email.com');
        await user.type(subjectInput, 'Subject');
        await user.type(textareaField, 'Textarea field');

        const submitButton = screen.getByText(textsPt.send);

        await user.click(submitButton);

        const container = await screen.findByTestId('contactForm_container');

        expect(container).toMatchSnapshot();
    });
});
