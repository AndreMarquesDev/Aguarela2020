import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import { FormField, FormFieldProps } from './FormField';
import { FieldTypes } from '../../utils/formValidation';
import { textsPt } from '../../utils/texts';

const baseProps: FormFieldProps = {
    id: FieldTypes.Name,
    type: 'text',
    value: '',
    isInput: true,
    isRequired: false,
    hasError: true,
    onChange: jest.fn(),
    onBlur: jest.fn(),
    ariaError: 'nameErrorMessage',
};

const renderComponent = (newProps?: Partial<FormFieldProps>): RenderResult => {
    return render(<FormField {...baseProps} {...newProps} />);
};

describe('<FormField />', () => {
    test('renders properly', () => {
        const { container } = renderComponent({ isRequired: true });

        const label = screen.getByText(`${textsPt.name} *`);
        const field = screen.getByTitle(baseProps.id);
        const errorMessage = screen.getByText(textsPt.pleaseEnterFirstAndLastName);

        expect(label).toBeInTheDocument();
        expect(field).toBeInTheDocument();
        expect(errorMessage).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly when it is the brand field', () => {
        renderComponent({ id: FieldTypes.Brand });

        const label = screen.getByText(textsPt.brandBusiness);
        const field = screen.getByTitle(FieldTypes.Brand);

        expect(label).toBeInTheDocument();
        expect(field).toBeInTheDocument();
    });

    test('renders properly when it is the email field', () => {
        renderComponent({ id: FieldTypes.Email });

        const label = screen.getByText(textsPt.email);
        const field = screen.getByTitle(FieldTypes.Email);
        const errorMessage = screen.getByText(textsPt.pleaseEnterValidEmailAddress);

        expect(label).toBeInTheDocument();
        expect(field).toBeInTheDocument();
        expect(errorMessage).toBeInTheDocument();
    });

    test('renders properly when it is the subject field', () => {
        renderComponent({ id: FieldTypes.Subject });

        const label = screen.getByText(textsPt.subject);
        const field = screen.getByTitle(FieldTypes.Subject);

        expect(label).toBeInTheDocument();
        expect(field).toBeInTheDocument();
    });

    test('renders properly when it is the message field', () => {
        renderComponent({ id: FieldTypes.Textarea });

        const label = screen.getByText(textsPt.message);
        const field = screen.getByTitle(FieldTypes.Textarea);
        const errorMessage = screen.getByText(textsPt.pleaseEnterAMessage);

        expect(label).toBeInTheDocument();
        expect(field).toBeInTheDocument();
        expect(errorMessage).toBeInTheDocument();
    });

    test('renders properly when the field is not required', () => {
        renderComponent({ isRequired: false });

        const label = screen.getByText(textsPt.name);

        expect(label).toBeInTheDocument();
    });

    test('renders properly with no error message', () => {
        renderComponent({ hasError: false });

        const errorMessage = screen.getByTestId('errorMessage_hidden');

        expect(errorMessage).toBeInTheDocument();
    });

    test('renders without a label if an invalid id is provided', () => {
        // @ts-ignore
        renderComponent({ id: 'invalidId', isRequired: true });

        const label = screen.getByText('*');

        expect(label).toBeInTheDocument();
    });
});
