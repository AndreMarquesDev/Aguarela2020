import type { RenderResult } from '@testing-library/react';
import type { FormFieldProps } from './FormField';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { FieldTypes } from '../../utils/formValidation';
import { textsPt } from '../../utils/texts';
import { FormField } from './FormField';
import '@testing-library/jest-dom';

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
    it('renders properly', () => {
        const { container } = renderComponent({ isRequired: true });

        const label = screen.getByText(`${textsPt.name} *`);
        const field = screen.getByTitle(baseProps.id);
        const errorMessage = screen.getByText(textsPt.pleaseEnterFirstAndLastName);

        expect(label).toBeInTheDocument();
        expect(field).toBeInTheDocument();
        expect(errorMessage).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('renders properly when it is the brand field', () => {
        renderComponent({ id: FieldTypes.Brand });

        const label = screen.getByText(textsPt.brandBusiness);
        const field = screen.getByTitle(FieldTypes.Brand);

        expect(label).toBeInTheDocument();
        expect(field).toBeInTheDocument();
    });

    it('renders properly when it is the email field', () => {
        renderComponent({ id: FieldTypes.Email });

        const label = screen.getByText(textsPt.email);
        const field = screen.getByTitle(FieldTypes.Email);
        const errorMessage = screen.getByText(textsPt.pleaseEnterValidEmailAddress);

        expect(label).toBeInTheDocument();
        expect(field).toBeInTheDocument();
        expect(errorMessage).toBeInTheDocument();
    });

    it('renders properly when it is the subject field', () => {
        renderComponent({ id: FieldTypes.Subject });

        const label = screen.getByText(textsPt.subject);
        const field = screen.getByTitle(FieldTypes.Subject);

        expect(label).toBeInTheDocument();
        expect(field).toBeInTheDocument();
    });

    it('renders properly when it is the message field', () => {
        renderComponent({ id: FieldTypes.Textarea });

        const label = screen.getByText(textsPt.message);
        const field = screen.getByTitle(FieldTypes.Textarea);
        const errorMessage = screen.getByText(textsPt.pleaseEnterAMessage);

        expect(label).toBeInTheDocument();
        expect(field).toBeInTheDocument();
        expect(errorMessage).toBeInTheDocument();
    });

    it('renders properly when the field is not required', () => {
        renderComponent({ isRequired: false });

        const label = screen.getByText(textsPt.name);

        expect(label).toBeInTheDocument();
    });

    it('renders properly with no error message', () => {
        renderComponent({ hasError: false });

        const errorMessage = screen.getByTestId('errorMessage_hidden');

        expect(errorMessage).toBeInTheDocument();
    });

    it('renders without a label if an invalid id is provided', () => {
        // @ts-ignore
        renderComponent({ id: 'invalidId', isRequired: true });

        const label = screen.getByText('*');

        expect(label).toBeInTheDocument();
    });
});
