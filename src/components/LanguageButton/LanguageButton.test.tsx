import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MockProviders } from '../../utils/jest/MockProviders';
import { LanguageButton } from './LanguageButton';
import '@testing-library/jest-dom';

const mockToggleMenu = jest.fn();

const renderComponent = (isMenuOpen = true): RenderResult => {
    return render(
        <MockProviders isMenuOpen={isMenuOpen} toggleMenu={mockToggleMenu}>
            <LanguageButton />
        </MockProviders>,
    );
};

describe('<LanguageButton />', () => {
    it('renders properly', () => {
        const { container } = renderComponent();

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('renders properly when clicking on button', async () => {
        Object.defineProperty(window, 'location', {
            value: {
                pathname: '/en/about',
            },
        });

        const user = userEvent.setup();

        renderComponent();

        const button = screen.getByText('pt');

        expect(button).toBeInTheDocument();

        expect(mockToggleMenu).toHaveBeenCalledTimes(0);

        await user.click(button);

        expect(document.title).toBe('Sobre - Aguarela Digital');

        expect(mockToggleMenu).toHaveBeenCalledTimes(1);
    });

    it('does not call the "toggleMenu" function if menu is closed', async () => {
        const user = userEvent.setup();

        renderComponent(false);

        const button = screen.getByText('pt');

        expect(mockToggleMenu).toHaveBeenCalledTimes(0);

        await user.click(button);

        expect(mockToggleMenu).toHaveBeenCalledTimes(0);
    });
});
