import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm, { contactFormContainerDataTestId, FORM_RESET_TIMEOUT } from './ContactForm';
import TextsContext from '../context/TextsContext';
import { textsEn, textsPt } from '../../utils/texts';
import { FieldTypes } from '../../utils/formValidation';
import { initializeAxiosMockAdapter } from '../../ajax/axiosMockAdapter';

describe('<ContactForm />', () => {
    test('renders properly', () => {
        render(<ContactForm />);

        const hiddenErrorMessages = screen.getAllByTestId('errorMessage_hidden');

        expect(hiddenErrorMessages.length).toBe(5);
        expect(screen.getByText(textsPt.send)).toBeInTheDocument();

        expect(screen.getByTestId(contactFormContainerDataTestId)).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <ContactForm />
            </TextsContext.Provider>
        );

        const hiddenErrorMessages = screen.getAllByTestId('errorMessage_hidden');

        expect(hiddenErrorMessages.length).toBe(5);
        expect(screen.getByText(textsEn.send)).toBeInTheDocument();

        expect(screen.getByTestId(contactFormContainerDataTestId)).toMatchSnapshot();
    });

    test('displays error messages in required fields on submit with empty fields', async () => {
        render(<ContactForm />);

        const submitButton = screen.getByText(textsPt.send);

        userEvent.click(submitButton);

        const errorMessages = await screen.findAllByTestId('errorMessage_visible');

        expect(errorMessages.length).toBe(3);

        expect(screen.getByTestId(contactFormContainerDataTestId)).toMatchSnapshot();
    });

    test('lets fields be properly filled', async () => {
        render(<ContactForm />);

        const nameInput = screen.getByTestId(FieldTypes.Name);
        const brandInput = screen.getByTestId(FieldTypes.Brand);
        const emailInput = screen.getByTestId(FieldTypes.Email);
        const subjectInput = screen.getByTestId(FieldTypes.Subject);
        const textareaField = screen.getByTestId(FieldTypes.Textarea);

        userEvent.type(nameInput, 'André{space}Marques');
        userEvent.type(brandInput, 'Brand');
        userEvent.type(emailInput, 'email@email.com');
        userEvent.type(subjectInput, 'Subject');
        userEvent.type(textareaField, 'Textarea{space}field');

        await waitFor(() => {
            expect(screen.getByTestId(contactFormContainerDataTestId)).toMatchSnapshot();
        });
    });

    test('submits the form successfully', async () => {
        initializeAxiosMockAdapter();

        render(<ContactForm />);

        const nameInput = screen.getByTestId(FieldTypes.Name);
        const brandInput = screen.getByTestId(FieldTypes.Brand);
        const emailInput = screen.getByTestId(FieldTypes.Email);
        const subjectInput = screen.getByTestId(FieldTypes.Subject);
        const textareaField = screen.getByTestId(FieldTypes.Textarea);

        userEvent.type(nameInput, 'André{space}Marques');
        userEvent.type(brandInput, 'Brand');
        userEvent.type(emailInput, 'email@email.com');
        userEvent.type(subjectInput, 'Subject');
        userEvent.type(textareaField, 'Textarea{space}field');

        const submitButton = screen.getByText(textsPt.send);

        userEvent.click(submitButton);

        const container = await screen.findByTestId('contactForm_container');

        expect(container).toMatchSnapshot();
    });

    test(
        'resets the form after it was successfully submitted',
        async () => {
            initializeAxiosMockAdapter();

            render(<ContactForm />);

            const nameInput = screen.getByTestId(FieldTypes.Name);
            const brandInput = screen.getByTestId(FieldTypes.Brand);
            const emailInput = screen.getByTestId(FieldTypes.Email);
            const subjectInput = screen.getByTestId(FieldTypes.Subject);
            const textareaField = screen.getByTestId(FieldTypes.Textarea);

            userEvent.type(nameInput, 'André{space}Marques');
            userEvent.type(brandInput, 'Brand');
            userEvent.type(emailInput, 'email@email.com');
            userEvent.type(subjectInput, 'Subject');
            userEvent.type(textareaField, 'Textarea{space}field');

            const submitButton = screen.getByText(textsPt.send);

            userEvent.click(submitButton);

            const container = await screen.findByTestId('contactForm_container');

            await waitForElementToBeRemoved(screen.queryByText('Mensagem enviada com sucesso.'), {
                timeout: FORM_RESET_TIMEOUT,
            });

            expect(container).toMatchSnapshot();
        },
        FORM_RESET_TIMEOUT + 1000
    );

    test('shows an error message in case the POST request fails', async () => {
        initializeAxiosMockAdapter(0, false);

        render(<ContactForm />);

        const nameInput = screen.getByTestId(FieldTypes.Name);
        const brandInput = screen.getByTestId(FieldTypes.Brand);
        const emailInput = screen.getByTestId(FieldTypes.Email);
        const subjectInput = screen.getByTestId(FieldTypes.Subject);
        const textareaField = screen.getByTestId(FieldTypes.Textarea);

        userEvent.type(nameInput, 'André{space}Marques');
        userEvent.type(brandInput, 'Brand');
        userEvent.type(emailInput, 'email@email.com');
        userEvent.type(subjectInput, 'Subject');
        userEvent.type(textareaField, 'Textarea{space}field');

        const submitButton = screen.getByText(textsPt.send);

        userEvent.click(submitButton);

        const container = await screen.findByTestId('contactForm_container');

        expect(container).toMatchSnapshot();
    });
});
