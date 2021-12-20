import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Header, HeaderProps } from './Header';
import NavLinksContext from '../context/NavLinksContext';
import { Breakpoint } from '../../utils/useWindowSize';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';

const baseProps: HeaderProps = {
    currentRoute: 'services',
    language: 'pt',
};

const renderComponent = (newProps?: Partial<HeaderProps>): RenderResult => {
    return render(
        <NavLinksContext.Provider
            value={{ isMenuOpen: false, toggleMenu: jest.fn(), setNavHeight: jest.fn() }}
        >
            <Header {...baseProps} {...newProps} />
        </NavLinksContext.Provider>
    );
};

describe('<Header />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        expect(container).toMatchSnapshot();
    });

    test('renders properly below phablet', () => {
        setJestWindowWidth(Breakpoint.Mobile);

        const { container } = renderComponent();

        expect(container).toMatchSnapshot();
    });
});
