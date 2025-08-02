import type { RenderResult } from '@testing-library/react';
import type { HeaderProps } from './Header';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Locale } from '../../types/Locale';
import { MockProviders } from '../../utils/jest/MockProviders';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { Breakpoint } from '../../utils/useWindowSize';
import { Header } from './Header';
import '@testing-library/jest-dom';

const baseProps: HeaderProps = {
    currentRoute: 'services',
    language: Locale.Pt,
};

const mockSetNavHeight = jest.fn();
const mockToggleMenu = jest.fn();

const renderComponent = (setNavHeight: jest.Mock | undefined): RenderResult => {
    return render(
        <MockProviders setNavHeight={setNavHeight} toggleMenu={mockToggleMenu}>
            <Header {...baseProps} />
        </MockProviders>,
    );
};

describe('<Header />', () => {
    test('renders properly', () => {
        const { container } = renderComponent(mockSetNavHeight);

        expect(mockSetNavHeight).toHaveBeenCalledTimes(2);

        expect(container).toMatchSnapshot();
    });

    test('renders properly below phablet', () => {
        setJestWindowWidth(Breakpoint.Mobile);

        const { container } = renderComponent(mockSetNavHeight);

        expect(container).toMatchSnapshot();
    });

    test('does not call the "setNavHeight" function if it is undefined', () => {
        renderComponent(undefined);

        expect(mockSetNavHeight).toHaveBeenCalledTimes(0);
    });

    test('calls the "toggleMenu" function when clicking on <MenuIcon />', async () => {
        const user = userEvent.setup();

        renderComponent(mockSetNavHeight);

        const menuIcon = screen.getByRole('button');

        expect(menuIcon).toBeInTheDocument();

        expect(mockToggleMenu).toHaveBeenCalledTimes(0);

        await user.click(menuIcon);

        expect(mockToggleMenu).toHaveBeenCalledTimes(1);
    });
});
