import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

const baseProps: ButtonProps = {
    children: 'Texto dentro do botão',
    page: 'projects',
    externalLink: 'https://www.google.com',
    alignLeft: false,
    isUppercased: false,
    isSubmit: false,
    disabled: false,
    onClick: jest.fn(),
};

describe('<Button />', () => {
    test('renders properly', () => {
        const { container } = render(<Button {...baseProps}>{baseProps.children}</Button>);

        const anchorElement = screen.getByTestId('button_container').firstChild;

        expect(anchorElement).toHaveAttribute('href', baseProps.externalLink);
        expect(anchorElement).toHaveAttribute('target', '_blank');
        expect(screen.getByText(baseProps.children)).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });

    test('renders properly without an external link', () => {
        const { container } = render(
            <Button {...baseProps} externalLink={null}>
                {baseProps.children}
            </Button>
        );

        const anchorElement = screen.getByTestId('button_container').firstChild;

        expect(anchorElement).toHaveAttribute('href', `/pt/${baseProps.page}`);
        expect(anchorElement).not.toHaveAttribute('target');
        expect(container.firstChild).toMatchSnapshot();
    });

    test('renders properly as a submit button', () => {
        const { container } = render(
            <Button {...baseProps} isSubmit>
                {baseProps.children}
            </Button>
        );

        const buttonElement = screen.getByTestId('button_container').firstChild;

        expect(buttonElement).toHaveAttribute('type', 'submit');
        expect(container.firstChild).toMatchSnapshot();
    });

    test('renders properly when disabled, uppercased and aligned left', () => {
        const { container } = render(
            <Button {...baseProps} alignLeft disabled isUppercased>
                {baseProps.children}
            </Button>
        );

        expect(container.firstChild).toMatchSnapshot();
    });
});
