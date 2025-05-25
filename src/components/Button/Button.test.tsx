import type { RenderResult } from '@testing-library/react';
import type { ButtonProps } from './Button';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from './Button';
import '@testing-library/jest-dom';

const children = 'Texto dentro do botão';

const baseProps: ButtonProps = {
    children,
    page: 'projects',
    externalLink: 'https://www.google.com',
    alignLeft: false,
    isLowercased: false,
    isSubmit: false,
    disabled: false,
    onClick: jest.fn(),
};

const renderComponent = (newProps?: Partial<ButtonProps>): RenderResult => {
    return render(
        <Button {...baseProps} {...newProps}>
            {children}
        </Button>,
    );
};

describe('<Button />', () => {
    it('renders properly', () => {
        const { container } = renderComponent();

        const anchorElement = screen.getByText(children);

        expect(anchorElement).toHaveAttribute('href', baseProps.externalLink);
        expect(anchorElement).toHaveAttribute('target', '_blank');
        expect(screen.getByText(children)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('renders properly without an external link', () => {
        const { container } = renderComponent({ externalLink: undefined });

        const anchorElement = screen.getByText(children);

        expect(anchorElement).toHaveAttribute('href', `/pt/${baseProps.page}`);
        expect(anchorElement).not.toHaveAttribute('target');
        expect(container).toMatchSnapshot();
    });

    it('renders properly as a submit button', () => {
        const { container } = renderComponent({ isSubmit: true });

        const buttonElement = screen.getByText(children);

        expect(buttonElement).toHaveAttribute('type', 'submit');
        expect(container).toMatchSnapshot();
    });

    it('renders properly when disabled, uppercased and aligned left', () => {
        const { container } = renderComponent({
            alignLeft: true,
            disabled: true,
            isLowercased: true,
        });

        expect(container).toMatchSnapshot();
    });
});
