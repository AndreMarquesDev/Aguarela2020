import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as nextRouter from 'next/router';
import { LanguageButton } from './LanguageButton';
import NavLinksContext from '../context/NavLinksContext';

// @ts-ignore
nextRouter.useRouter = jest.fn(() => ({
    query: {
        language: 'pt',
    },
    replace: jest.fn(),
}));

describe('<LanguageButton />', () => {
    test('renders properly', () => {
        const { container } = render(
            <NavLinksContext.Provider value={{ isMenuOpen: false, toggleMenu: jest.fn() }}>
                <LanguageButton />
            </NavLinksContext.Provider>
        );

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly when clicking on button', () => {
        Object.defineProperty(window, 'location', {
            value: {
                pathname: '/en/about',
            },
            writable: true,
        });

        render(
            <NavLinksContext.Provider value={{ isMenuOpen: false, toggleMenu: jest.fn() }}>
                <LanguageButton />
            </NavLinksContext.Provider>
        );

        const button = screen.getByText('pt');

        expect(button).toBeInTheDocument();

        userEvent.click(button);

        expect(document.title).toBe('Sobre - Aguarela Digital');
    });
});
