import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as nextRouter from 'next/router';
import { LanguageButton } from './LanguageButton';
import { MockProviders } from '../../utils/jest/MockProviders';

// @ts-ignore
nextRouter.useRouter = jest.fn(() => ({
    query: {
        language: 'pt',
    },
    replace: jest.fn(),
}));

const mockToggleMenu = jest.fn();

const renderComponent = (isMenuOpen = true): RenderResult => {
    return render(
        <MockProviders isMenuOpen={isMenuOpen} toggleMenu={mockToggleMenu}>
            <LanguageButton />
        </MockProviders>
    );
};

describe('<LanguageButton />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly when clicking on button', () => {
        Object.defineProperty(window, 'location', {
            value: {
                pathname: '/en/about',
            },
        });

        renderComponent();

        const button = screen.getByText('pt');

        expect(button).toBeInTheDocument();

        expect(mockToggleMenu).toHaveBeenCalledTimes(0);

        userEvent.click(button);

        expect(document.title).toBe('Sobre - Aguarela Digital');

        expect(mockToggleMenu).toHaveBeenCalledTimes(1);
    });

    test('does not call the "toggleMenu" function if menu is closed', () => {
        renderComponent(false);

        const button = screen.getByText('pt');

        expect(mockToggleMenu).toHaveBeenCalledTimes(0);

        userEvent.click(button);

        expect(mockToggleMenu).toHaveBeenCalledTimes(0);
    });
});
