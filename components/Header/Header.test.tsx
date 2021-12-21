import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header, HeaderProps } from './Header';
import NavLinksContext from '../context/NavLinksContext';
import { Breakpoint } from '../../utils/useWindowSize';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';

const baseProps: HeaderProps = {
    currentRoute: 'services',
    language: 'pt',
};

const mockSetNavHeight = jest.fn();
const mockToggleMenu = jest.fn();

const renderComponent = (
    setNavHeight: jest.Mock,
    newProps?: Partial<HeaderProps>
): RenderResult => {
    return render(
        <NavLinksContext.Provider
            value={{ isMenuOpen: false, toggleMenu: mockToggleMenu, setNavHeight }}
        >
            <Header {...baseProps} {...newProps} />
        </NavLinksContext.Provider>
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

    test('calls the "toggleMenu" function when clicking on <MenuIcon />', () => {
        renderComponent(mockSetNavHeight);

        const menuIcon = screen.getByRole('button');

        expect(menuIcon).toBeInTheDocument();

        expect(mockToggleMenu).toHaveBeenCalledTimes(0);

        userEvent.click(menuIcon);

        expect(mockToggleMenu).toHaveBeenCalledTimes(1);
    });
});
