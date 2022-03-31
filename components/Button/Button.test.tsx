import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, ButtonProps } from './Button';

const children = 'Texto dentro do botão';

const baseProps: ButtonProps = {
    children,
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
        const { container } = render(<Button {...baseProps}>{children}</Button>);

        const anchorElement = screen.getByText(children);

        expect(anchorElement).toHaveAttribute('href', baseProps.externalLink);
        expect(anchorElement).toHaveAttribute('target', '_blank');
        expect(screen.getByText(children)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly without an external link', () => {
        const { container } = render(
            <Button {...baseProps} externalLink={null}>
                {children}
            </Button>
        );

        const anchorElement = screen.getByText(children);

        expect(anchorElement).toHaveAttribute('href', `/pt/${baseProps.page}`);
        expect(anchorElement).not.toHaveAttribute('target');
        expect(container).toMatchSnapshot();
    });

    test('renders properly as a submit button', () => {
        const { container } = render(
            <Button {...baseProps} isSubmit>
                {children}
            </Button>
        );

        const buttonElement = screen.getByText(children);

        expect(buttonElement).toHaveAttribute('type', 'submit');
        expect(container).toMatchSnapshot();
    });

    test('renders properly when disabled, uppercased and aligned left', () => {
        const { container } = render(
            <Button {...baseProps} alignLeft disabled isUppercased>
                {children}
            </Button>
        );

        expect(container).toMatchSnapshot();
    });
});
